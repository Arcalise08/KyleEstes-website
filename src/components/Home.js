import React from "react";
import MediaQuery from "react-responsive/src/Component";
import ParticlesBg from "./particles-bg";
import clipart from "../img/clipart.png";
import {Accordion, Popover, OverlayTrigger, Card, Button, Col, Row, Container} from "react-bootstrap";
import copy from 'copy-to-clipboard';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            showTip: false,
            email: "Copy Email"
        }
    }

    getMsg = (e) => {
        if (e === "react") {
            return <a target="_blank" href="https://reactjs.org/"style={{color: "blue"}}>React, </a>
        }
        if (e === "angular") {
            return <a target="_blank" href="https://angular.io/" style={{color: "red"}}>Angular, </a>
        }
        if (e === "vue") {
            return <a target="_blank" href="https://angular.io/" style={{color: "green"}}>Vue, </a>
        }
    }
    showEmail = () => {
        if (this.state.email !== "Copy Email") {
            copy('arcalise08@gmail.com');
        }
        else {
            copy('arcalise08@gmail.com');
            this.setState({email: "Copied!"});
        }
    }

    popover = (e, type) => {
        return (
            <OverlayTrigger
                trigger="click"
                placement="auto"
                overlay={
                    <Popover>
                        <Popover.Content>
                            Tech stack describing <br/>
                             <a target="_blank" style={{color: "#18661f"}} href="https://mongodb.com"> Mongodb, </a>
                             <a target="_blank" style={{color: "black"}} href="https://expressjs.com/">Express, </a>
                            {this.getMsg(type)}
                             <a target="_blank" style={{color: "#b0d95f"}} href="https://nodejs.org/en/">Node </a>
                            <br/>
                            {type === "react" && <a target="_blank" href="https://www.geeksforgeeks.org/mern-stack/">Read more about it here!</a>}
                            {type === "angular" && <a target="_blank" href="https://www.sitepoint.com/introduction-mean-stack/">Read more about it here!</a>}
                            {type === "vue" && <a target="_blank" href="https://www.educative.io/edpresso/what-is-mevn-stack">Read more about it here!</a>}
                        </Popover.Content>
                    </Popover>
                }
            >
                {e}
            </OverlayTrigger>
        )
    }

    render() {
        return (
            <div className="App">
                <MediaQuery maxWidth={576}>
                    <ParticlesBg num="20" color="#b51204" className="sandwich" type="cobweb" bg={true}/>
                </MediaQuery>
                <MediaQuery minWidth={576}>
                    <ParticlesBg color="#b51204" type="cobweb" bg={true}/>
                </MediaQuery>

                <h1 style={{fontSize:72}} id="title" className="text-center" >
                    Julian Estes
                </h1>
                <h5 className="text-center" style={{marginTop:25, marginBottom:25}}>
                    <u style={{color: "#3267a8"}}>FullStack Software Developer</u>
                </h5>
                <div>
                    <div className="titleBackground mx-auto col-md-6">
                        <img className="d-block mx-auto titleClipart" alt="Meaningless clipart. fun though." height="300px" width="300px" src={clipart}/>
                    </div>
                </div>
                <div className="mx-auto col-md-6 mt-4">
                    <Card>
                        <Card.Title style={{color: "#4d8a8c", fontSize:32}} className="text-center mt-2">
                            Greetings!
                        </Card.Title>
                        <Card.Body style={{fontFamily: "Lato", fontSize:26}}>
                            <p style={{fontSize:24, marginTop:35, textAlign:"center"}}>
                                Hi! Thanks for taking the time to check out my site! Youll find links for my Linkedin and some
                                of my sample projects(Some are a little outdated!) at the top of the page!
                            </p>
                        </Card.Body>
                    </Card>
                    <Card className=" mt-2 mb-3">
                        <Card.Title style={{color: "#4d8a8c", fontSize:32}}  className="text-center mt-2">
                            About Me
                        </Card.Title>
                        <Card.Body style={{fontFamily: "Lato", fontSize:26}}>
                            <h1 style={{textAlign:"center", fontWeight:"bold"}}>So lets get right into the meat of this...</h1> <br/>

                            <p style={{textAlign:"center", fontSize:26}}>I'm an indie software developer.</p> <br/>

                            <p style={{textAlign:"center", fontSize:26}}>I run the {this.popover(<span style={{color: "blue", cursor: "pointer"}}>M.E.R.N</span>, "react")} tech stack. Specifically I target react and react native applications.</p> <br/>

                            <p style={{textAlign:"center", fontSize:26}}>I have experience in Angular({this.popover(<span style={{color: "red", cursor: "pointer"}}>M.E.A.N</span>, "angular")}) and Vue({this.popover(<span style={{color: "green", cursor: "pointer"}}>M.E.V.N</span>, "vue")})</p> <br/>

                            <p style={{textAlign:"center", fontSize:26}}>I've managed the successful deployment of many production level react native apps including(but not limited to) the following</p> <br/>

                            <Col className={"mx-auto"}>
                                <Accordion>
                                    <Card>
                                        <Card.Header style={{flex:1, textAlign:"center"}}>
                                            <Accordion.Toggle as={Button} variant="link" style={{fontSize:32}}  eventKey="0">
                                                Quick Prep CPC
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body >
                                                <p style={{fontSize:24, marginTop:35, textAlign:"center"}}>
                                                    This app was my first to release. I worked closely on a team of certified medical coders and doctors case studies to produce not only the app. But an entire
                                                    backend for the app as well. This apps backend was made completely by me and allows for non programmers to deliver study materials directly from the coder to the app user.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header style={{flex:1, textAlign:"center"}}>
                                            <Accordion.Toggle as={Button} variant="link" style={{fontSize:32}} eventKey="1">
                                                Quick Prep CDL
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p style={{fontSize:24, marginTop:35, textAlign:"center"}}>
                                                    This app is also very similar to the CPC app. I'm currently working on its deployment on a team of aspiring and experienced truck drivers to deliver study materials for those who
                                                    seek it.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header style={{flex:1, textAlign:"center"}}>
                                            <Accordion.Toggle as={Button} variant="link" style={{fontSize:32}} eventKey="2">
                                                Restaurant Roulette Ultimate
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p style={{fontSize:24, marginTop:35, textAlign:"center"}}>
                                                    I created this app very early as a tech demonstration very early in my indie career and have since decided to pick it back up and deploy it to Google play. It makes use
                                                    of googles places API to find restaurants near the app user and displays them into a wheel that can be spun and then displays the winning restaurant to the user. This also makes
                                                    use of googles ads as a revenue stream.
                                                </p>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                                <p style={{fontSize:26, marginTop:35, textAlign:"center"}}>
                                    There are many MANY more apps and source code then i have listed in my projects. My professional life rarely allows for the posting of source code to the internet as a whole. And as such most on my public projects
                                    page is outdated. If anyone has any interest, Please feel free to contact me as i have no issues at all speaking about the development of any of my professional quality apps.
                                </p>




                            <br/>
                            <p style={{fontSize:26, marginTop:35, textAlign:"center"}}>
                                Specialities: Javascript & JS frameworks Vue, React, Angular, C#; Object-Oriented programming
                            </p>

                        </Card.Body>
                    </Card>
                    <Card className="mt-2 mb-5">
                        <Card.Title style={{color: "#4d8a8c", fontSize:26}}  className="text-center mt-2">
                            Inquiries
                        </Card.Title>
                        <Card.Body>
                            <p style={{fontSize:26, marginTop:35, textAlign:"center"}}>
                                Any business related inquiries can be made directly to the email [<small className="customEmail" onClick={() => this.showEmail()}>{this.state.email}</small>]
                                <br/>
                                <br/>
                                Heres a few of my other things. You can reach me on any of them!
                                <br/>
                                <br/>
                            </p>
                            <div className="text-center">
                                <a target="_blank" className="mx-2" href="https://www.linkedin.com/in/julian-estes-411b711a8/"><img style={{width:65,height:65}} src={require('../img/linkedin.svg')}/></a>
                                <a target="_blank" className="mx-2" href="https://github.com/Arcalise08"><img style={{width:65,height:65}} src={require('../img/github.svg')}/></a>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <small className='d-block text-center mt-3'><a target="_blank" className="hideMe" href="https://media.giphy.com/media/lXiRoPt9Rkzt7yLYY/giphy.gif">Made</a> with <span style={{color: "#3293a8"}}>React</span> by <span style={{color:"red"}}>Julian Estes</span></small>
            </div>
        )
    }
}
export default Home;
