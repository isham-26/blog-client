import "./Write.css";
import addFile from "../../icons/add-file.png";
import writepost from "../../images/writepost.jpg"
const Write = () => {
  return (
    <div className="write">
      <img src={writepost} alt="img" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <img
              src={addFile}
              alt="img"
              className="writeIcon"
            />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
      
    </div>
  );
};

export default Write;
