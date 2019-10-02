import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container sextion project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title = {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda magni ad at sint nostrum adipisci, incidunt odit modi! Perferendis a eius repellat voluptate nihil incidunt ut aut, hic sit?</p>
                </div>
            </div>

            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Allan</div>
                <div>2nd Oct, 16pm</div>
            </div>

        </div>
    )
}

export default ProjectDetails