import { useParams } from "react-router-dom";

function Blog(){
  const { id } = useParams();
  return (
    <div>
      <p>This is one blog</p>
      <p>Blog number: {id}</p>
    </div>
  );
}

export default Blog;