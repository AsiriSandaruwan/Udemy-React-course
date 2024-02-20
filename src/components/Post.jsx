import axios from "axios";
import { useEffect, useState } from "react";

const Post = () => {
    const [posts , setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        }
        fetchPosts();
    },[])
    return (
        <div>
            <p>this is the post function</p>
            {posts.map((post) => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Post;