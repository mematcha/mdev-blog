import { Link } from "react-router-dom";

function Error404Page(){
    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <div className="text-[64px]">404</div>
            <div>We could not find what you were requesting 🙁</div>
            <div>
                <Link to="/" className="underline text-color-blue px-2">Home</Link>
                <span>|</span>
                <Link to="/series" className="underline text-color-blue px-2">Series</Link>
                <span>|</span>
                <Link to="/about-me" className="underline text-color-blue px-2">About Me</Link>
            </div>
        </div>
    )
}
export default Error404Page;