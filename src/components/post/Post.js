import "./post.css";
import {Link} from "react-router-dom"
// import postimg from "../../images/postimg.jpg";
const Post = ({ post }) => {
  const PF="http://localhost:8000/images/"
  return (
    <div className="post">
      {post.photo && <img src={PF+post.photo} alt="img" />}
      <div className="postdata">
        <div className="postinfo">
          <div className="postcats">
            {post.categories.map((ele) => (
              <span className="postcat">Coding</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">            
            <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
        </div>
        <p className="postdesc">{post.desc}</p>
        <div className="postdate">
          <span title="Post time">{ new Date(post.createdAt).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
