import { useState } from "react";
import { useHistory } from "react-router-dom";

// create a new blog with form
//submit post request to json.server
//redirect to homepage after submission

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // react to the submit event
    const handleSubmit = (e) => {
      // prevent default refresh action
      e.preventDefault();
      // create an object for json.server
      const blog = { title, body, author };
      
      //after handleSubmit, we start post request
      //so is pending to post
      setIsPending(true);

      //post reqeust to update data in json.server
      fetch('http://localhost:8000/blogs',{
        method: 'POST',
        // tell the server that the content type is json
        headers: { "Content-Type": "application/json" },
        // we need to covert blog into json string
        body: JSON.stringify(blog)
        //fetch returns a promise for then method
      }).then(() => {
        console.log('new blog added')
        //finish post, is not pending to post
        setIsPending(false);
        //go to homepage
        history.push('/');
      })

      
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input 
                  type="text" 
                  required
                //   value attribute for submit
                  value={title}
                //   update title state with real time input value
                //   when there is a change in input - controlled input
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                  value = { author }
                  onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {/* shows add blog button  when not submitting
                shows the disabled button when submitting */}
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
                {/* output the states so we can see the sync of controlled input*/}
                <p>{ title } </p>
                <p>{ body } </p>
                <p>{ author } </p>
            </form>
        </div>
    )
}
export default Create;