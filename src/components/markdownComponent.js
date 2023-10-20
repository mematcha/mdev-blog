import React, { useState, useRef, useEffect } from "react";
import NoteMenu from "./noteMenu";
// import MarkdownClip from "./markDownBit";
import ReactMarkdown from "react-markdown";
import remarkBreaks from './remarkBreaks'; // Import the custom remark plugin
import "./markdownBit.scss";
function MarkDownComponent({sendTextData,isEdit}) {
  // const inputRef = useRef(null);

  const [text, setText] = useState('');
  const [newHeight,setNewHeight] = useState(600);
  const originalHeight = 600;
  let unicodeBidiValue = 'isolate';
  useEffect(()=>{
    sendTextData(text);
  },[text])

  useEffect(()=>{
    if(!isEdit){
      styleLinks();
      // toggleUnicodeBidiForAllLists();
    }
    if(isEdit){

    }
  },[isEdit])

  const styleLinks = () => {
    const links = document.querySelectorAll('.md-result a');

      links.forEach(link => {
        link.setAttribute('target', '_blank');
      });
  }

  const handleChange = (e) => {
    setText(e.target.value);
    const textarea = document.getElementById('notearea');
    const lines = (textarea.value.match(/\n/g) || []).length + 1;
    const finalHeight = originalHeight+20*(lines-1);
    setNewHeight(finalHeight);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default behavior (creating a new line)
      setText(text + '\n'); // Add a newline character to the text
    }
  };

  const CustomLink = ({ children, ...props }) => (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );  
  
  const options = {
    remarkPlugins: [remarkBreaks], // Add the plugin to the remarkPlugins option
  };

  return (
    <>
      {isEdit && (<div className="flex flex-col border-4 border-gray-200 p-4">
        <textarea 
            value={text}
            id="notearea"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="md-note-space outline-none resize-none overflow-hidden"
            style={{height:newHeight}}>    
        </textarea>
      </div>)}
      {!isEdit && (
        <div className="flex flex-col border-4 border-gray-200 p-4 px-8">
        <div 
            className="md-result outline-none resize-none">
              <ReactMarkdown className="black-disc-bullet" children={text} options={options}></ReactMarkdown>
        </div>
      </div>
      )}
    </>
  );
}

export default MarkDownComponent;