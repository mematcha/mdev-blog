function LoginPage(){

    return(
        <div className="w-[80%] flex flex-col mx-[10%]">
            <div className="px-[20%] py-[50px] flex flex-col">
                <span>Email ID</span>
                <input></input>
            </div>
            <div className="px-[20%] py-[50px] flex flex-col">
                <span>Password</span>
                <input></input>
            </div>
            <div className="mx-[20%]">
                <button className="bg-slate-100 p-4">Login</button>
            </div>
        </div>
    );
}

export default LoginPage;