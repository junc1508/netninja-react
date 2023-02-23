//this creates blog details by fetching the route parameter: id from the path
// and use the id to fetch data from db.json
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    // grab route parameter id
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    //function to delete the post from server
    const handleClick = () => {
        //fetch request for delete
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        }).then(() => {
            //redirect the user to home once the page is deleted
            history.push('/');
        })
    }

    return(
        <div className="blog-details">
            {/* if it is pending: display loading */}
            { isPending && <div>Loading...</div> }
            {/* if there is error, display error */}
            { error && <div>{ error }</div> }
            {/* display value for the blog only when there is value */}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author} </p>
                    <div>{ blog.body } </div>
                    {/* delete the blog entry from json.server */}
                    <button onClick={ handleClick }>delete</button>
                </article>
            )
             }
        </div>
    );
}
export default BlogDetails;