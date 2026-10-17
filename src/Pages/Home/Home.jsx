import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import './Home.css';

const Home = () => {
  // Pre-filled mock data with bitmojis and code
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Alex Dev",
      avatar: "https://sdk.bitmoji.com/render/panel/10212076-99341490212_1-s5-v1.png?transparent=1&palette=1",
      caption: "Just figured out a cleaner way to write this array map function!",
      code: "const squared = numbers.map(n => n * n);",
      likes: 42
    },
    {
      id: 2,
      author: "Sam Coder",
      avatar: "https://sdk.bitmoji.com/render/panel/10227181-99341490212_1-s5-v1.png?transparent=1&palette=1",
      caption: "Here is a quick Python script to automate file renaming.",
      code: "import os\nfor f in os.listdir():\n  os.rename(f, f.lower())",
      likes: 89
    }
  ]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="feed-container">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <div className="user-info">
              <img src={post.avatar} alt="Bitmoji" className="bitmoji-avatar" />
              <h4>{post.author}</h4>
            </div>
            
            <div className="dropdown-container">
              <button onClick={() => toggleDropdown(post.id)} className="dots-btn">
                <MoreVertical size={20} />
              </button>
              {activeDropdown === post.id && (
                <div className="dropdown-menu">
                  <button>Edit Post</button>
                  <button className="delete-text">Delete Post</button>
                </div>
              )}
            </div>
          </div>
          
          <p className="caption">{post.caption}</p>
          {post.code && (
            <pre className="code-snippet">
              <code>{post.code}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;