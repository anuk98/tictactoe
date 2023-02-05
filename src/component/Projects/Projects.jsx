import React from 'react'
import Card from './Card'
import './Project.css'
import Project_data from './Project_data'
function Projects() {
  return (
    <div className='projects' id='projects'>
        <div className="projects_container">
            <h1>Projects</h1>
            <div className="content_grid">
                {Project_data.map((value,index)=>{
                    return <Card key={index}  image={value.image} 
                    category={value.category}  title={value.title}/>
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Projects