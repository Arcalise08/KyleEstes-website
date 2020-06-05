import React from "react";
import Card from "react-bootstrap/Card";

class ProjectCard extends React.Component {

    render() {
        const { project } = this.props
        return (

            <Card className=" mx-auto my-2 col-md-6">
                <Card.Title >
                    <h3 className="mt-3">{project.name}</h3>
                </Card.Title>
                <Card.Body className="pt-0">
                    {project.description ? project.description :"Description not available"}
                    <br/>
                    {project.archived ? <span style={{color: "red"}}>"This project has been shelved for now!"</span> : <span style={{color: "green"}}>"This project is still active!"</span>}
                    <br/>
                    <a href={"https://github.com/Arcalise08/" + project.name } target="_blank">Github Link</a>
                    <br/>
                    {project.has_pages ? <a href={'https://arcalise08.github.io/' + project.name } target="_blank">Website Link</a>
                        : project.homepage ?
                            <a href={project.homepage } target="_blank">Website Link</a>
                            : null}
                </Card.Body>
            </Card>
        )
    }
}

export default ProjectCard;