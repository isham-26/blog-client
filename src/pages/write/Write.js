import "./Write.css";
import { useContext, useState } from "react";
import addFile from "../../icons/add-file.png";
import { Context } from "../../context/Context";
import axios from "axios";
const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =  new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error(err);
      }
    }
    try {
      const res=await axios.post("/posts", newPost);
      window.location.replace("/post/"+res.data._id)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="write">
    {
      file&&(<img src={URL.createObjectURL(file)} alt="img" className="writeImg" />)
    }
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <img src={addFile} alt="img" className="writeIcon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}/>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeText"
            onChange={(e)=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
