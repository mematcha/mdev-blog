function CarouselTemplate({data}){
    return (
        <div className="bg-white rounded-[10px]">
            {/* header element */}
            <div className="p-2 bg-slate-200 rounded-t-[10px]">
                {data.title}
            </div>
            <div>
                <ul className="flex flex-row justify-around p-2">
                    {data.courses.map((point,index)=>(
                        <li>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CarouselTemplate;