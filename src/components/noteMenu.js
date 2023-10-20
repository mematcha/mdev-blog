import boldIcon from "../assets/note_icons/Asset 9bold_icon.svg";
import itallicIcon from "../assets/note_icons/Asset 10italic_icon.svg";
import underlinedIcon from "../assets/note_icons/Asset 11underline_icon.svg";
import linkIcon from "../assets/note_icons/linkIcon.svg";
import bulletedIcon from "../assets/note_icons/Asset 13bulleted_icon.svg";
import quoteIcon from "../assets/note_icons/Asset 14quote_icon.svg";
import codeIcon from "../assets/note_icons/Asset 15code_icon.svg";
import codeBlockIcon from "../assets/note_icons/Asset 16codeBlock_icon.svg";
import embedIcon from "../assets/note_icons/Asset 17embed_icon.svg";
import uploadImg from "../assets/note_icons/Asset 18image_icon.svg";
import guideIcon from "../assets/note_icons/Asset 19guide_icon.svg";

function NoteMenu(){

    return (
    <div className="py-2 w-full bg-slate-100">
        <ul className="flex flex-row items-center list-menu">
            <li>
                <img src={boldIcon}></img>
            </li>
            <li>
                <img src={itallicIcon}></img>
            </li>
            <li>
                <img src={underlinedIcon}></img>
            </li>
            <li>
                <img src={linkIcon}></img>
            </li>
            <li>
                <img src={bulletedIcon}></img>
            </li>
            <li>
                <img src={quoteIcon}></img>
            </li>
            <li>
                <img src={codeIcon}></img>
            </li>
            <li>
                <img src={codeBlockIcon}></img>
            </li>
            <li>
                <img src={embedIcon}></img>
            </li>
            <li>
                <img src={uploadImg}></img>
            </li>
        </ul>
    </div>
    );
}

export default NoteMenu;