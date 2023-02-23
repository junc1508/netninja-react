//this creates a list of blog preview for Home page

import { Link } from "react-router-dom";

const BlogList = ({ blogs}) => {
    return (
        <div className="Blog-list">
            {/* we have access to each individual 
            blog (with id) in the map function */}
            {blogs.map((blog) => (
              <div className="blog-preview" key={blog.id}>
                <Link to={ `/blogs/${blog.id}` }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </Link>
                
            </div>
        ))}
        </div>
    );
}

export default BlogList;