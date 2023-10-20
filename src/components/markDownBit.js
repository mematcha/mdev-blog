import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./markdownBit.scss";

function MarkdownClip(props) {

  

  return (
    <>
      {props.showMarkdown==false && (
        <div
          refer={props.index+1}
          contentEditable
          className="outline-none py-1 min-h-[32px]"
          onKeyDown={props.handleKeyPress}
        >{props.content}</div>
      )}
      {
        props.showMarkdown==true && (
            <div 
                onClick={props.onClick}
                refermd={props.index+1}
                className="outline-none py-1 min-h-[32px]">
                <ReactMarkdown>{props.content}</ReactMarkdown>
            </div>
        )
      }
    </>
  );
}

export default MarkdownClip;
