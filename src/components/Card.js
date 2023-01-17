import star from "../images/star.png"
import image1 from "../images/image1.png"

export default function Card(){
    return (
        <div className="card-container">
            <div className="image-container">
                <button className="status">SOLD OUT</button>
                <img src={image1} alt="lady in swimwear smiling"/>
            </div>
            <div className="ratings">
                <img src={star} alt="red star" className="star-img"/>
                <span>5.0 &#40;6&#41; - USA</span>
            </div>
            <p className="experience-description">Life lessons with Katie Zaferes</p>
            <p className="pricing"><strong>From $136</strong> / person</p>
        </div>
    )
}