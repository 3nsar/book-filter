import about from "./About.css"
import booksImg from "./booksImg.svg" 


const About = () => {
  return (
    <div className="about-container">
        <div className="about-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur similique expedita a adipisci quaerat facilis hic dicta? Ad a obcaecati deserunt, fugiat tempora, omnis sit, quasi pariatur enim ab quam.</p>
        </div>
        <div className="img-content">
        <img src={booksImg} alt="pic"/>
        </div>
    </div>
  )
}

export default About