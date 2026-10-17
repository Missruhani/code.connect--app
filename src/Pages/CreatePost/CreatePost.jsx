import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const [codeSnippet, setCodeSnippet] = useState('');

  return (
    <div className="create-page-container">
      <h2>Create a New Post</h2>
      
      <div className="create-post-box">
        <label>Code Snippet</label>
        <textarea 
          className="code-input"
          placeholder="// Paste your code snippet here..."
          value={codeSnippet}
          onChange={(e) => setCodeSnippet(e.target.value)}
          rows="6"
        />

        <label>Attachments (Images, PDF, Documents, Links, Video)</label>
        <div className="attachment-box">
          <input type="file" id="file-upload" multiple />
          <p>Drag & drop files here or click to browse globally/locally</p>
          <input type="text" placeholder="Or paste a global URL link here..." className="link-input" />
        </div>

        <button className="submit-btn">Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;