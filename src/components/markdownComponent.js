import React, { useState, useRef, useEffect } from "react";
import NoteMenu from "./noteMenu";
import MarkdownClip from "./markDownBit";

function MarkDownComponent() {
  // const inputRef = useRef(null);
  const [inputArray, setInputArray] = useState([{md:false,content:''}]);
  const [focusedElement, setFocusedElement] = useState(null);
  const [movement, setMovement] = useState("");
  const [showMarkdown,setShowMarkdown]=useState(false);
  // const [markdownContent, setMarkdownContent] = useState("");
  // const handleChange = (e) => {
  //   setMarkdownContent(e.target.value);
  // };
  console.log(inputArray);
  
  useEffect(() => {
    if (movement === "up") {
      focusOnPreviousElement(focusedElement);
    }
    if (movement === "down") {
      focusOnNextElement(focusedElement);
    }
  }, [inputArray]);

  const focusOnNextElement = (focusedElement) => {
    if (focusedElement instanceof HTMLDivElement) {
      var nextDiv = focusedElement.nextSibling;
      if (nextDiv instanceof HTMLDivElement) {
        console.log("nextDiv", nextDiv);
        nextDiv.focus();
      }
    }
  };

  const focusOnPreviousElement = (focusedElement) => {
    if (focusedElement instanceof HTMLDivElement) {
      var prevDiv = focusedElement.previousSibling;
      if (prevDiv instanceof HTMLDivElement) {
        console.log("prevDiv", prevDiv);
        prevDiv.focus();
      }
    }
  };

  const handleKeyPress = (event) => {
    setMovement("");
    // console.log(event.key);
    var array = [...inputArray];
    const focusedElement = document.activeElement;

    if (event.key === "a" && event.ctrlKey) {
      console.log("Ctrl + A pressed"); // Replace with your action
    }
    if (event.key === "ArrowUp") {
      focusOnPreviousElement(focusedElement);
      return;
    }
    if (event.key === "ArrowDown") {
      focusOnNextElement(focusedElement);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      var keyValue = Number(focusedElement.getAttribute("refer"));
      array = [...inputArray];
      array[keyValue-1].md=true;
      array[keyValue-1].content=focusedElement.textContent;
      array.splice(keyValue, 0, {md:false,content:''});
      setInputArray(array);
      setFocusedElement(focusedElement);
      setMovement("down");
    }
    if (focusedElement && focusedElement.tagName === "DIV") {
      // console.log("Currently focused div:", focusedElement);
      // console.log(focusedElement.innerHTML);
      if (
        focusedElement.innerHTML === "" &&
        event.key === "Backspace" &&
        array.length > 1
      ) {
        array.pop();
        setFocusedElement(focusedElement);
        setInputArray(array);
        setMovement("up");
      }
    }
  };

  const getParentDiv = (e) =>{
    var target=e.target;
    while (!(target instanceof HTMLDivElement)) {
      target=target.parentElement;
    }
    return target;
  };

  const focusOnClick = (e)=>{
    var targetDiv=getParentDiv(e);
    var keyValue = Number(targetDiv.getAttribute("refermd"));
    var array = [...inputArray];
    array[keyValue-1].md=false;
    setInputArray(array);
  };

  return (
    <>
      <div className="flex flex-col">
        <NoteMenu></NoteMenu>
        <div className="md-note-space flex flex-col border-2 border-black p-4">
          {inputArray.map((value, index) => (
            <MarkdownClip 
              key={index}
              index={index}
              onClick={focusOnClick} 
              handleKeyPress={handleKeyPress}
              content={value.content} 
              showMarkdown={value.md}>
            </MarkdownClip>
          ))}
        </div>
      </div>
    </>
  );
}

export default MarkDownComponent;
