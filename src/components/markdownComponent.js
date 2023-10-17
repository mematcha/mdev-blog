import React, { useState } from 'react';

function MarkDownComponent() {
  const [markdownContent, setMarkdownContent] = useState("");

  const handleChange = (e) => {
    setMarkdownContent(e.target.value);
  };

  return (
    <>
      <div>
        <textarea
          value={markdownContent}
          onChange={handleChange}
          placeholder="Enter your Markdown here..."
          rows={10} // You can adjust the number of rows
          cols={50} // You can adjust the number of columns
        />
        <div>
          <h2>Preview:</h2>
          <div>{markdownContent}</div>
        </div>
      </div>
    </>
  );
}

export default MarkDownComponent;
