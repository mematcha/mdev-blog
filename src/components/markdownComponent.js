import React, { useState, useRef, useEffect, useCallback } from "react";
import NoteMenu from "./noteMenu";
// import MarkdownClip from "./markDownBit";
import ReactMarkdown from "react-markdown";
import "./markdownBit.scss";

// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Element } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

function MarkDownComponent({ sendTextData, isEdit }) {
  // const inputRef = useRef(null);

  const [text, setText] = useState("");
  const [newHeight, setNewHeight] = useState(60);
  const originalHeight = 60;
  let unicodeBidiValue = "isolate";
  useEffect(() => {
    sendTextData(text);
  }, [text]);

  useEffect(() => {
    if (!isEdit) {
      styleLinks();
    }
  }, [isEdit]);

  const styleLinks = () => {
    const links = document.querySelectorAll(".md-result a");

    links.forEach((link) => {
      link.setAttribute("target", "_blank");
    });
  };

  const handleChange = (e) => {
    setText(e.target.value);
    const textarea = document.getElementById("notearea");
    const lines = (textarea.value.match(/\n/g) || []).length + 1;
    const finalHeight = originalHeight + 20 * (lines - 1);
    setNewHeight(finalHeight);
  };

  const [editor] = useState(() => withReact(createEditor()));

  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];

  const CodeElement = (props) => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    );
  };

  const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
  };

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <>
      {isEdit && (
        <div className="flex flex-col py-4" style={{ fontFamily: "Verdana" }}>
          <textarea
            placeholder="Enter your message here..."
            value={text}
            id="notearea"
            onChange={handleChange}
            className="md-note-space outline-none resize-none overflow-hidden overflow-y-scroll"
            style={{ height: newHeight }}
          ></textarea>
          <Slate editor={editor} initialValue={initialValue}>
            <Editable
              placeholder="Enter your message here..."
              renderElement={renderElement}
              className="md-note-space outline-none resize-none overflow-hidden overflow-y-scroll"
              style={{ height: newHeight }}
              onKeyDown={event => {
                if (event.key === '`' && event.ctrlKey) {
                  // Prevent the "`" from being inserted by default.
                  event.preventDefault()
                  // Otherwise, set the currently selected blocks type to "code".
                  Transforms.setNodes(
                    editor,
                    { type: 'code' },
                    { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
                  )
                }
              }}
            />
          </Slate>
          <div className="flex flex-row justify-between opacity-50 hover:opacity-100">
            <button className="px-2 py-1 bg-slate-200">Add Carousel</button>
            <button className="px-2 py-1 bg-slate-200">Add Note</button>
            <button className="px-2 py-1 bg-slate-200">Add Text</button>
          </div>
        </div>
      )}
      {!isEdit && (
        <div className="flex flex-col py-4 " style={{ fontFamily: "Verdana" }}>
          <div className="md-result outline-none resize-none">
            <ReactMarkdown
              className="black-disc-bullet text-justify"
              children={text}
            ></ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
}

export default MarkDownComponent;
