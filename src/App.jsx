import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);
  
  // Get the data
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log("something went wrong"))
  }, []);

  // Add Post 
  const addPost = () => {
    axios.post("http://localhost:3000/posts", newPost)
      .then((res) => {
        setPosts([...posts, res.data]);
        setNewPost({ title: "", content: "" });
      })
      .catch((err) => console.log("something went wrong"))
      .catch((err) => alert('Something went wrong while adding the post.'));

  }

  // Put request 
  const UpdatePost = () => {
    axios.put(`http://localhost:3000/posts/${currentPostId}`, newPost)
      .then((res) => {
        setPosts(posts.map((post) => (post.id === currentPostId ? res.data : post)));
        setNewPost({ title: "", content: "" });
        setIsUpdating(false);
        setCurrentPostId(null);
      })
      .catch((err) => console.log("something went wrong"));
  }

  const handleSubmit = () => {
    if (isUpdating) {
      UpdatePost();
    } else {
      addPost();
    }
  };

  // Fill form with post data when clicking for "Update"
  const handleEditClick = ((post) => {
    setNewPost({ title: post.title, content: post.content });
    setIsUpdating(true);
    setCurrentPostId(post.id);
  })

  // Delete post
  const deletePost = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => console.log("Some thing went wrong"))
  }
  
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-primary px-5'>
        <a href="#" className='navbar-brand'>
          <h2 className='text-white'>CRUD Post Manager</h2>
        </a>
      </nav>

      <div className='container my-4'>

        <div className='mb-5'>
          <input type="text" 
          className='form-control mb-2'
          placeholder='Title' value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})}
          />

          <input type="text" 
          className='form-control mb-2'
          placeholder='Content' value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})}
          />

          <button className='btn btn-primary' onClick={handleSubmit}>
            {isUpdating ? 'Update Post' : 'Add Post'}
          </button>

        </div>

        <ul className='list-group mb-3'>

          {posts.map((post) => (
            <li key={post.id} className='list-group-item mb-4'>
             <h2>{post.title}</h2>
             <p>{post.content}</p>
 
             <div className='d-flex gap-2'>
               <button className='btn btn-warning' onClick={() => handleEditClick(post)}>
                 Update
               </button>
               <button className='btn btn-danger' onClick={() => deletePost(post.id)}>
                 Delete
               </button>
             </div>
           </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
