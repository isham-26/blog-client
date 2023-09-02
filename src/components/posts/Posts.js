import Post from "../post/Post";
import "./Posts.css";

const Posts = (props) => {
  return (
    <div className="posts">
      {props.posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Posts;
