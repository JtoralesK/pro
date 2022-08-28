import { Project } from "../project"
import {project1,project2,project3} from"../../data"
const ListProjects = ()=>{
    return (
       <section  id="proyectos" className="section-projects">
           <h1 className="section-projects-title">Mis proyectos</h1>
             <div className="list">
             <Project key={project1.id} img={project1.img} link={project1.link} github={project1.github} content={project1.content} name={project1.name}/>
             <Project key={project2.id} img={project2.img} link={project2.link} github={project2.github} content={project2.content} name={project2.name}/>
             <Project key={project3.id} img={project3.img} link={project3.link} github={project3.github} content={project3.content} name={project3.name}/>

             </div>
       </section>
        
        
    )
}
export {ListProjects}