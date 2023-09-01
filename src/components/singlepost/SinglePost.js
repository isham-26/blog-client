import "./singlePost.css";
import postimg from "../../images/postimg.jpg";
import editIcon from "../../icons/editIcon.png";
import deleteIcon from "../../icons/delete.png";
const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWreper">
        <img src={postimg} alt="img" />
        <div className="singlePostEdit">
          <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.</h1>
          <div className="editIcons">
            <img src={editIcon} alt="img" />
            <img src={deleteIcon} alt="img" />
          </div>
        </div>
        <div className="singlePostInfo">
          <span className="singlePostAuther">
            Auther: <b>Safak</b>
          </span>
          <span className="singlePostDate" title="post time">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          architecto consequuntur, perferendis repellat quas magnam voluptate
          dolorum pariatur officiis a magni veritatis at minima aspernatur
          deserunt odit adipisci animi ducimus! Reprehenderit vero quia
          inventore deleniti esse. Nostrum, dolores ad sed hic id, officia
          laboriosam quasi molestiae recusandae consequuntur nam architecto vero
          dicta sequi ipsa qui minima corporis laudantium cupiditate nulla rem
          consectetur. Exercitationem, eveniet debitis! Eos hic eius qui
          voluptates cumque dolorum magnam animi nobis voluptatem, rerum sint
          illo quod nostrum tempore dicta quasi odio saepe reprehenderit
          voluptate? Quis, animi quibusdam? Sequi, suscipit veritatis? Ipsum est
          doloribus perspiciatis autem minus.
        </p>
      </div>
      
    </div>
  );
};

export default SinglePost;
