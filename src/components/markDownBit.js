import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./markdownBit.scss";

function MarkdownClip(props) {

  return (
    <>
      {props.showMarkdown==false && (
        <div
          refer={props.index+1}
          contentEditable={true}
          className="outline-none py-1"
          onKeyDown={props.handleKeyPress}
        >{props.content}</div>
      )}
      {
        props.showMarkdown==true && (
            <div 
                onClick={props.onClick}
                refermd={props.index+1}
                className="outline-none py-1"
                contentEditable={false}>
                <ReactMarkdown>{props.content}</ReactMarkdown>
            </div>
        )
      }
    </>
  );
}

export default MarkdownClip;
