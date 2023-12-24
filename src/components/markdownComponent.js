import React, { useState, useRef, useEffect, useCallback } from "react";
import NoteMenu from "./noteMenu";
// import MarkdownClip from "./markDownBit";
import ReactMarkdown from "react-markdown";
import "./markdownBit.scss";
import YouTubeEmbed from "react-youtube";
import "./markdownComponent.scss";

// Import the Slate editor factory.
import {
  createEditor,
  Editor,
  Transforms,
  Element,
  BaseEditor,
  Descendant,
  Value,
} from "slate";
// Import the Slate components and React plugin.
import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  useSlateStatic,
} from "slate-react";
import withEmbeds from "./WithEmbeds";

function MarkDownComponent({ sendTextData, isEdit }) {
  // const inputRef = useRef(null);

  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ];

  const [text, setText] = useState("");
  const [slateValue, setSlateValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);
  const [newHeight, setNewHeight] = useState(600);
  const originalHeight = 600;
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
    const textarea = document.getElementById("notearea");
    const lines = (textarea.value.match(/\n/g) || []).length + 1;
    const finalHeight = originalHeight + 20 * (lines - 1);
    setNewHeight(finalHeight);
  };

  const [editor] = useState(() => withEmbeds(withReact(createEditor())));

  const CodeElement = (props) => {
    return (
      <div>
        <pre {...props.attributes} className="bg-slate-900 text-white pt-2 px-4">
          <code>{props.children}</code>
        </pre>
      </div>
    );
  };

  const ImageElement = (props) => {
    return (
      <>
        <img {...props.attributes} src={props.element.url} alt="Image Not Loaded"></img>
        <div className="hidden">{props.children}</div>
      </>
    );
  };

  const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
  };

  const YoutubeElement = (props) => {
    const { attributes, children, element } = props;
    const { youtubeId } = element;
    const editor = useSlateStatic();
    console.log(youtubeId);
    return (
      <div {...attributes}>
        <YouTubeEmbed
          contentEditable={false}
          videoId={youtubeId}
        ></YouTubeEmbed>
        <span className="hidden">{children}</span>
      </div>
    );
  };

  const TwitterElement = (props) => {
    return <div {...props.attributes}>{props.chilren}</div>;
  };

  const GithubElement = (props) => {
    return <div {...props.attributes}>{props.children}</div>;
  };

  const LinkedInElement = (props) => {
    return <div {...props.attributes}>{props.children}</div>;
  };

  const OtherElement = (props) => {
    return (
      <div
        {...props.attributes}
        className="flex flex-row p-2 rounded-4 border-2 border-slate-200 cursor-pointer select-none items-center bg-slate-100"
      >
        <div
          className="icon-link mr-2"
          style={{ height: "inherit", minWidth: "48px", minHeight: "48px" }}
        ></div>
        <span className="text-[48px] text-slate-200">|</span>
        <div
          style={{ userSelect: "none" }}
          onClick={() => {
            window.open(props.element.url, "_blank");
          }}
        >
          {props.element.url}
        </div>
        <span className="hidden">{props.children}</span>
      </div>
    );
  };

  const BulletElement = (props) => {
    return (
      <div {...props.attributes}>
        <ul>
          <li className="bullet-li">{props.children}</li>
        </ul>
      </div>
    )
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "image":
        return <ImageElement {...props} />;
      case "bullet":
        return <BulletElement {...props} />;
      case "h1":
        return <h1 {...props.attributes}>{props.children}</h1>;
      case "h2":
        return <h2 {...props.attributes}>{props.children}</h2>;
      case "youtube":
        return <YoutubeElement {...props} />;
      case "twitter":
        return <TwitterElement {...props.attributes} />;
      case "github":
        return <GithubElement {...props.attributes} />;
      case "linkedin":
        return <LinkedInElement {...props.attributes} />;
      case "other":
        return <OtherElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const Leaf = (props) => {
    // console.log("leaf: ",props.leaf);

    return (
      <span
        {...props.attributes}
        style={{
          fontWeight: props.leaf.bold ? "bold" : "normal",
          fontStyle: props.leaf.italic ? "italic" : "normal",
          textDecoration: props.leaf.underline ? "underline dotted" : "normal",
        }}
      >
        {props.children}
      </span>
    );
  };

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const embedRegex = [
    {
      regex: /https:\/\/www.youtube\.com\/watch\?v=(\w+)/,
      type: "youtube",
    },
    {
      regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)$/,
      type: "twitter",
    },
    {
      regex: /https:\/\/github\.com\/[\w.\-]+\/[\w.\-]+\/blob\/[\w.\/\-]+/,
      type: "github",
    },
    {
      regex: /https:\/\/www\.linkedin\.com\/posts\/[\w.\-]+/,
      type: "linkedin",
    },
    {
      regex:
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      type: "other",
    },
  ];
  // Define our own custom set of helpers.
  const CustomEditor = {
    handleEmbed(editor, event) {
      const text = event.clipboardData.getData("text/plain");
      const files = event.clipboardData.files;
      if (files.length > 0) {
        if (
          files[0].name.includes(".png") ||
          files[0].name.includes(".jpg") ||
          files[0].name.includes(".jpeg")
        ) {
          console.log("is a image");
          event.preventDefault();
          Transforms.insertNodes(editor, {
            type: "image",
            children: [{ text: "" }],
            url: text,
          });
          Transforms.insertNodes(editor, {
            children: [{ text: "" }],
            type: "paragraph",
          });
        }
      } else {
        embedRegex.some(({ regex, type }) => {
          const match = text.match(regex);
          if (match) {
            // console.log("match", type, text);
            if (type == "youtube") {
              event.preventDefault();
              // console.log(match);

              Transforms.insertNodes(editor, {
                children: [{ text }],
                type,
                youtubeId: match[1],
              });
              Transforms.insertNodes(editor, {
                children: [{ text: "" }],
                type: "paragraph",
              });
              return true;
            } else if (type == "other") {
              event.preventDefault();
              console.log(match, type, "others");
              Transforms.insertNodes(editor, {
                children: [{ text: "" }],
                type: "other",
                url: match[0],
                title: "",
              });
              Transforms.insertNodes(editor, {
                children: [{ text: "" }],
                type: "paragraph",
              });
            }
          }

          return false;
        });
      }
    },

    handlePaste(editor, event) {
      this.handleEmbed(editor, event);
      console.log("paste", event.clipboardData.files);
    },

    isBoldMarkActive(editor) {
      const marks = Editor.marks(editor);
      return marks ? marks.bold === true : false;
    },

    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor);
      if (isActive) {
        Editor.removeMark(editor, "bold");
      } else {
        Editor.addMark(editor, "bold", true);
      }
    },

    isItalicMarkActive(editor) {
      const marks = Editor.marks(editor);
      return marks ? marks.italic === true : false;
    },

    toggleItalicMark(editor) {
      const isActive = CustomEditor.isItalicMarkActive(editor);
      if (isActive) {
        Editor.removeMark(editor, "italic");
      } else {
        Editor.addMark(editor, "italic", true);
      }
    },

    isUnderlineMarkActive(editor) {
      const marks = Editor.marks(editor);
      return marks ? marks.underline === true : false;
    },

    toggleUnderlineMark(editor) {
      const isActive = CustomEditor.isUnderlineMarkActive(editor);
      if (isActive) {
        Editor.removeMark(editor, "underline");
      } else {
        Editor.addMark(editor, "underline", true);
      }
    },

    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "code",
      });

      return !!match;
    },

    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor);
      Transforms.setNodes(
        editor,
        { type: isActive ? null : "code" },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
    },

    isBulletedPointActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "bullet",
      });

      return !!match;
    },

    toggleBulletedPoint(editor) {
      const isActive = CustomEditor.isBulletedPointActive(editor);
      Transforms.setNodes(
        editor,
        { type: isActive ? null : "bullet" },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
    },

    isH1BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "h1",
      });

      return !!match;
    },

    toggleH1Block(editor) {
      const isActive = CustomEditor.isH1BlockActive(editor);
      Transforms.setNodes(
        editor,
        { type: isActive ? null : "h1" },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
    },

    isH2BlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === "h2",
      });

      return !!match;
    },

    toggleH2Block(editor) {
      const isActive = CustomEditor.isH2BlockActive(editor);
      Transforms.setNodes(
        editor,
        { type: isActive ? null : "h2" },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
    },
  };

  return (
    <>
      {true && (
        <div className="flex flex-col py-4" style={{ fontFamily: "Verdana" }}>
          {isEdit && (
            <div className="flex flex-row items-center mb-4">
              <span
                className="text-[22px] leading-[24px] cursor-pointer mr-2"
                onMouseDown={(event) => {
                  event.preventDefault();
                  CustomEditor.toggleBoldMark(editor);
                }}
              >
                B
              </span>
              <span
                className="italic text-[22px] leading-[24px] cursor-pointer mx-2"
                onMouseDown={(event) => {
                  event.preventDefault();
                  CustomEditor.toggleItalicMark(editor);
                }}
              >
                I
              </span>
              <span className="underline text-[22px] leading-[24px] cursor-pointer mx-2">
                U
              </span>
              {/* <span className="icon-image cursor-pointer mx-2"></span> */}
              {/* <span className="icon-gif cursor-pointer mx-2"></span> */}
              {/* <span
                className="icon-link cursor-pointer mx-2"
                onMouseDown={(event) => {
                  event.preventDefault();
                  CustomEditor.toggleCodeBlock(editor);
                }}
              ></span> */}
              <span
                className="icon-bulleted cursor-pointer mx-2"
                onMouseDown={(event) => {
                  event.preventDefault();
                  CustomEditor.toggleBulletedPoint(editor);
                }}
              ></span>
              <span
                className="icon-codeblock cursor-pointer mx-2"
                onMouseDown={(event) => {
                  event.preventDefault();
                  CustomEditor.toggleCodeBlock(editor);
                }}
              ></span>
              {/* <span className="icon-carousel cursor-pointer mx-2"></span> */}
              <div
                className="text-[16px] cursor-pointer mx-1 text-white bg-black rounded-lg px-1"
                onMouseDown={(event) => {
                  event.preventDefault();
                  CustomEditor.toggleH1Block(editor);
                }}
              >
                h1
              </div>
              <div
                className="text-[16px] cursor-pointer mx-1 text-white bg-black rounded-lg px-1"
                onMouseDown={(event) => {
                  event.preventDefault();
                  CustomEditor.toggleH2Block(editor);
                }}
              >
                h2
              </div>
              {/* <div className="text-[16px] cursor-pointer mx-1 text-white bg-black rounded-lg px-1">
              Embed
            </div> */}
            </div>
          )}
          {/* <textarea 
            placeholder="Enter your message here..."
            value={text}
            id="notearea"
            onChange={handleChange}
            className="md-note-space outline-none resize-none overflow-hidden overflow-y-scroll"
            style={{ height: newHeight }}
        >

        </textarea> */}
          <Slate editor={editor} initialValue={initialValue}>
            <Editable
              placeholder="Enter your message here..."
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              contentEditable={isEdit}
              value={slateValue}
              style={{ fontFamily: "Verdana" }}
              className="md-note-space outline-none resize-none overflow-y-scroll"
              onKeyDown={(event) => {
                setSlateValue(editor.children);
                if (!event.ctrlKey) {
                  return;
                }
                switch (event.key) {
                  case "`": {
                    event.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                    break;
                  }

                  case "b": {
                    event.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                    break;
                  }

                  case "i": {
                    event.preventDefault();
                    CustomEditor.toggleItalicMark(editor);
                    break;
                  }

                  case "u": {
                    event.preventDefault();
                    CustomEditor.toggleUnderlineMark(editor);
                    break;
                  }
                }
              }}
              onPaste={(event) => {
                CustomEditor.handlePaste(editor, event);
              }}
            />
          </Slate>
          {/* <div className="flex flex-row justify-between opacity-50 hover:opacity-100">
            <button className="px-2 py-1 bg-slate-200">Add Carousel</button>
            <button className="px-2 py-1 bg-slate-200">Add Note</button>
            <button className="px-2 py-1 bg-slate-200">Add Text</button>
          </div> */}
        </div>
      )}
      {/* {!isEdit && (
        <div className="flex flex-col py-4 " style={{ fontFamily: "Verdana" }}>
          <div className="md-result outline-none resize-none">
            <ReactMarkdown
              className="black-disc-bullet text-justify"
              children={text}
            ></ReactMarkdown>
          </div>
        </div>
      )} */}
    </>
  );
}

export default MarkDownComponent;
