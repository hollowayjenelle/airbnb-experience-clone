export default function Card(props){
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={`./images/${props.img}`} alt="lady in swimwear smiling"/>
            </div>
            <div className="ratings">
                <img src="./images/star.png" alt="red star" className="star-img"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) -</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="experience-description">{props.title}</p>
            <p className="pricing"><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}