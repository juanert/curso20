import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
      <p>Here you will find all the blogs</p>
      <div>
        <Link to="/Blogs/1">Blog 1</Link>
      </div>
      <div>
        <Link to="/Blogs/2">Blog 2</Link>
      </div>
      <div>
        <Link to="/Blogs/3">Blog 3</Link>
      </div>
    </div>
  );
}

export default Blogs;
