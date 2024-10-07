function formatStatistique(statistique) {
    if (statistique < 1000) {
        return statistique.toString();
    } else if (statistique >= 1000 && statistique < 1_000_000) {
        return (statistique / 1000).toFixed(1) + 'K';
    } else if (statistique >= 1_000_000 && statistique < 1_000_000_000) {
        return (statistique / 1_000_000).toFixed(1) + 'M';
    } else {
        return (statistique / 1_000_000_000).toFixed(1) + 'B';
    }
}

function MainCard(props) {
    const iconPosition = props.position > 0 
        ? { icon: "fa-arrow-up", color: "text-green-500" } 
        : { icon: "fa-arrow-down", color: "text-red-500" };

    const formattedStatistique = formatStatistique(props.statistique.statistique);

    return (
        <article className="bg-white h-72 rounded-md flex flex-col w-1/6 items-center justify-evenly">
            <i className={`${props.icon.type} ${props.icon.icon} ${props.icon.color} font-bold text-6xl`}></i>
            <span className="text-xl font-bold">{props.content}</span>
            <span className={`text-5xl font-extrabold ${props.statistique.color}`}>{formattedStatistique}</span>
            <span className={`font-bold ${iconPosition.color}`}>
                <i className={`fa-solid ${iconPosition.icon}`}></i> {props.position}
            </span>
        </article>
    );
}

export default MainCard;
