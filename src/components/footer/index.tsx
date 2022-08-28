import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare,FaFilePdf } from "react-icons/fa";

const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="footer_box">
            <div className="footer_bar"></div>

                <h1>Torales Javier</h1>
                <p>Mis Redes</p>
               <div className="redes">
                   <a target="_blank" href="https://www.linkedin.com/in/javitorales"><BsLinkedin></BsLinkedin></a>
                   <a  target="_blank" href="https://github.com/JtoralesK?tab=repositories"><FaGithubSquare></FaGithubSquare></a>
                   <a download={"cv.pdf"} className="cv" href="https://drive.google.com/file/d/1DZYWULZQhz2TwexeWRr3MmmOi0idRY9t/view?usp=sharing"><FaFilePdf></FaFilePdf></a>
               </div>
            </div>
        </footer>
    )
}
export {Footer};