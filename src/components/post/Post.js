import "./post.css";
import postimg from "../../images/postimg.jpg";
const Post = () => {
  return (
    <div className="post">
      <img src={postimg} alt="img" />
      <div className="postdata">
        <div className="postinfo">
          <div className="postcats">
            <span className="postcat">Coding</span>
            <span className="postcat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet.</span>
          <hr />
        </div>
        <p className="postdesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos praesentium sequi a temporibus officiis minima dolorem aperiam labore fugiat dolore, aut et quod perspiciatis blanditiis magni enim commodi laudantium fuga ullam autem, voluptatibus sunt? Eum iure unde veniam et cumque numquam earum possimus reiciendis inventore, dolorem aliquid dicta excepturi accusantium, officiis iusto eveniet cum ad odit commodi placeat saepe ut.
        </p>
        <div className="postdate"><span title="Post time">1 hour ago</span></div>
      </div>
    </div>
  );
};

export default Post;
