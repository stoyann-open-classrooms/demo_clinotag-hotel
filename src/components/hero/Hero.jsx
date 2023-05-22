import "./hero.css"
import backgroungImage from '../../assets/image/home_img.jpeg'
function Hero() {
  return (
    <div className="hero">
        <img src={backgroungImage} alt="" />
    </div>
  )
}

export default Hero