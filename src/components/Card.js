export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === 'Online'){
        badgeText = "ONLINE"
    }

    return (
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`./images/${props.coverImg}`} alt="lady in swimwear smiling"/>
            <div className="ratings">
                <img src="./images/star.png" alt="red star" className="star-img"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) -</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="experience-description">{props.title}</p>
            <p className="pricing"><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}