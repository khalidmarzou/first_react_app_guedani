
function MainCard(props) {

    return(
        <article className="bg-white h-72 rounded-md flex flex-col w-1/6 items-center justify-evenly">
            <i className={`${props.icon.type} ${props.icon.icon} text-white font-bold text-2xl w-[15%]`}></i>
            <span className="text-xl font-bold"> {props.content} </span>
            <span className="text-5xl font-extrabold"> {props.statistique} </span>
            <span className="font-bold"> {props.position} </span>
        </article>
    );
}

export default MainCard;