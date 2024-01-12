
function SideCard({data}){

    

    return (
        <div className="flex flex-col overflow-y-scroll p-4 max-h-[400px] min-w-[200px]">
            <ul className="border-l-2 border-black">
                {data.map((card,index)=>(
                    <li className="cursor-pointer p-2">{card}</li>
                ))}
            </ul>
        </div>
    );
}
export default SideCard;