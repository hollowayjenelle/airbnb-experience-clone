import grid from "../images/photo-grid.png"

export default function Hero(){
    return(
        <div className="hero-display">
            <div className="grid-container">
            <img src={grid} alt="photo grid containing different pictures" className="photo-grid"/>
            </div>
            <h1 className="main-heading">Online Experiences</h1>
            <p className="description">Join unique interactive activities led by <br></br>one-of-a-kind-hosts-all without leaving <br></br> home</p>
        </div>
    )
}