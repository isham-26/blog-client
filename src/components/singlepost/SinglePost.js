import "./singlePost.css";
// import postimg from "../../images/postimg.jpg";
import editIcon from "../../icons/editIcon.png";
import deleteIcon from "../../icons/delete.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
const SinglePost = () => {
  const location = useLocation();
  const [post, setPost] = useState({});
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const PF = "http://localhost:8000/images/";
  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path,{username: user.username,title,desc});
       window.location.reload()
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="singlepost">
      <div className="singlePostWreper">
        {post.photo && <img src={PF + post.photo} alt="img" />}
        {update ? (
          <input
            type="text"
            value={title}
            className="singlePostEditInput"
            autoFocus="true"
            onChange={(e)=>setTitle(e.target.value)}
          />
        ) : (
          <div className="singlePostEdit">
            <h1 className="singlePostTitle" >{title}</h1>
            {post.username === user?.username && (
              <div className="editIcons">
                <img
                  src={editIcon}
                  alt="img"
                  title="Edit post"
                  onClick={() => setUpdate(true)}
                />
                <img
                  src={deleteIcon}
                  alt="img"
                  title="Delete post"
                  onClick={handleDelete}
                />
              </div>
            )}
          </div>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuther">
            Auther:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate" title="post time">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {update ? <textarea className="textEditInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/> : <p>{desc}</p>}
        {update ?<button className="updateButton" onClick={handleUpdate}>update</button> : <span></span>}
      </div>
    </div>
  );
};

export default SinglePost;
