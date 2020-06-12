import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ProjectCard extends React.Component {
    constructor() {
        super();
        this.state = {
            img: null,
            showImg: false,
            showButton: true
        }
    }

    projectIMG = () => {
        const { project } = this.props
        if (project.name === "KatChat") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>An application for chatting with your friends made with react native.</h4>
                    <img className="col" src={require('../img/KatChat.jpg')}/>
                </div>

            )
        }
        if (project.name === "to-do-app") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>An application for chatting with your friends made with react native.</h4>
                    <img className="col" src={require('../img/to-do-app.jpg')}/>
                </div>

            )
        }
        if (project.name === "DnD-App") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>A DnD app made with javascript that shows all kinds of dnd related things!</h4>
                    <img className="col" src={require('../img/dnd-app.jpg')}/>
                </div>

            )
        }
        if (project.name === "games-app") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>A games review site. Made with react. fully implemented with a REST server.</h4>
                    <img className="col" src={require('../img/games-app.jpg')}/>
                </div>

            )
        }
        if (project.name === "meetup-app") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>An application for chatting with your friends made with react native.</h4>
                    <img className="col" src={require('../img/meetup-app.jpg')}/>
                </div>

            )
        }
        if (project.name === "my-quiz-app") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>An application for chatting with your friends made with react native.</h4>
                    <img className="col" src={require('../img/my-quiz-app.jpg')}/>
                </div>

            )
        }
        if (project.name === "Pokedex-JS") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>A pokedex! What more do you need to know?</h4>
                    <img className="col" src={require('../img/Pokedex-JS.jpg')}/>
                </div>

            )
        }
        if (project.name === "KyleEstes-website") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>That would be this website! Neat huh?</h4>
                </div>

            )
        }
        if (project.name === "My-Portfolio-Website") {
            return (
                <div>
                    <h4 style={{textAlign:"center"}}>This is one of my first ever iterations of my website.</h4>
                    <img className="col" src={require('../img/My-Portfolio-Website.jpg')}/>
                </div>

            )
        }

        return null;
    }


    render() {
        const { project } = this.props
        return (

            <Card className=" mx-auto my-2 col-md-6">
                <Card.Title >
                    <h3 className="mt-3">{project.name}</h3>
                </Card.Title>
                <Card.Body className="pt-0">
                    {project.description ? project.description : "Description not available"}
                    <br/>
                    {project.archived ? <span style={{color: "red"}}>This project has been shelved for now!</span> : <span style={{color: "green"}}>This project is still active!</span>}
                    <br/>
                    <a href={"https://github.com/Arcalise08/" + project.name } target="_blank">Github Link</a>
                    <br/>
                    {project.has_pages ? <a href={'https://arcalise08.github.io/' + project.name } target="_blank">Website Link</a>
                        : project.homepage ?
                            <a href={project.homepage } target="_blank">Website Link</a>
                            : null}
                            <br/>

                </Card.Body>
                <Card.Footer>
                    <div>
                        <Button className="col btn btn-dark" onClick={()=> this.setState({showImg: true})}>{this.state.showImg ? "Nice..." : "See Details"}</Button>
                    </div>
                </Card.Footer>
                <Modal show={this.state.showImg} onHide={() => this.setState({showImg: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>{project.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.projectIMG()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.setState({showImg: false})} variant="primary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card>
        )
    }
}

export default ProjectCard;
