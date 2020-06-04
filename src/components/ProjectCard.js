import React from "react";
import Card from "react-bootstrap/Card";

class ProjectCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { project } = this.props
        return (

            <Card className=" mx-auto my-2 col-md-6">
                <Card.Title>
                    {project.name}
                </Card.Title>
                <Card.Body>
                    {project.description ? project.description :"Description not available"}
                    <br/>
                    {project.archived ? "This project has been shelved for now!" : "This project is still active!"}
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