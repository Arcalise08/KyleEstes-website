import React from "react";
import MediaQuery from "react-responsive/src/Component";
import ParticlesBg from "particles-bg";
import axios from 'axios';
import clipart from "../img/clipart.png";
import Card from "react-bootstrap/Card";
import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
constructor() {
    super();
    this.state = {
        projects: []
    }
}
    async getProjects() {
        await axios.get("https://api.github.com/users/Arcalise08/repos")
            .then((response) => {
                console.log(response.data)
                this.setState({
                    projects: response.data
                })
            })
    }

    componentDidMount() {
        this.getProjects();
    }

    render() {
        return (
                <div className="App">
                    <MediaQuery maxWidth={576}>
                        <ParticlesBg num="20" color="#b51204" type="cobweb" bg={true}/>
                    </MediaQuery>
                    <MediaQuery minWidth={576}>
                        <ParticlesBg color="#b51204" type="cobweb" bg={true}/>
                    </MediaQuery>
                    <h1 className="display-2 text-center mt-3 mb-3">My Projects</h1>
                    {this.state.projects.length > 0 ? this.state.projects.map(project => <ProjectCard key={project.id} project={project}/>): null}
                    <MediaQuery maxWidth={576}>
                        <ParticlesBg num="20" color="#b51204" type="cobweb" bg={true}/>
                    </MediaQuery>

                    <small className='d-block text-center mt-3'>Made with <span style={{color: "#3293a8"}}>React</span> by <span style={{color:"red"}}>Julian Estes</span></small>

                </div>
        )
    }
}

export default Projects;