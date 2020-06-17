import React from "react";
import MediaQuery from "react-responsive/src/Component";
import ParticlesBg from "./particles-bg";
import clipart from "../img/clipart.png";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";



class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            showTip: false,
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
                            {type === "react" ? <a target="_blank" href="https://www.geeksforgeeks.org/mern-stack/">Read more about it here!</a> : null}
                            {type === "angular" ? <a target="_blank" href="https://www.sitepoint.com/introduction-mean-stack/">Read more about it here!</a> : null}
                            {type === "vue" ? <a target="_blank" href="https://www.educative.io/edpresso/what-is-mevn-stack">Read more about it here!</a> : null}
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

                <h2 id="title" className="text-center" >
                    Julian Estes
                </h2>
                <h5 className="text-center">
                    <u style={{color: "#3267a8"}}>FullStack Software Developer</u>
                </h5>
                <div>
                    <div className="titleBackground mx-auto col-md-6">
                        <img className="d-block mx-auto titleClipart" alt="Meaningless clipart. fun though." height="300px" width="300px" src={clipart}/>
                    </div>
                </div>
                <div className="mx-auto col-md-6 mt-4">
                    <Card>
                        <Card.Title style={{color: "#4d8a8c"}} className="text-center mt-2">
                            Greetings!
                        </Card.Title>
                        <Card.Body style={{fontFamily: "Lato"}}>
                            Hi! Thanks for taking the time to check out my site! Youll find links for my Linkedin and some
                            of my sample projects(Some are a little outdated!) at the top of the page!
                        </Card.Body>
                    </Card>
                    <Card className=" mt-2 mb-3">
                        <Card.Title style={{color: "#4d8a8c"}}  className="text-center mt-2">
                            About Me
                        </Card.Title>
                        <Card.Body style={{fontFamily: "Lato"}}>
                            So I guess first off, My name is <span style={{color:"#802f1d"}}>Julian Estes</span> however i go by <span style={{color:"#327ba8"}}>Kyle Estes! </span>
                            I've loved software and game development since I was a kid. I've always been excited in how you can
                            put a few snippits of code together and watch something come to life! Its been my dream since I was
                            a kid to get in the development field! To that end I've been practicing c# for years! More recently
                            I've been learning javascript for some web development(front and backend) experience. I've learned
                            several frameworks (Vue, React, & Angular). I'm also certified by Careerfoundry in the
                            {this.popover(<span style={{color: "blue", cursor: "pointer"}}>M.E.R.N</span>, "react")}
                            (or {this.popover(<span style={{color: "red", cursor: "pointer"}}>M.E.A.N</span>,  "angular")}
                            ... or... {this.popover(<span style={{color: "green", cursor: "pointer"}}>M.E.V.N</span>,  "vue")}... but that doesnt sound as cool) tech stack. I absolutely love
                            what I do and I bring that passion and love to any project I work on.
                            <br/>
                            <br/>I know theres still a ton to learn. I learn new things every day and I'm up for any challenge that anyone can present to me!
                            <br/>
                            <br/>Specialities: Javascript & JS frameworks Vue, React, Angular, C#; Object-Oriented programming

                        </Card.Body>
                    </Card>
                    <Card className="mt-2 mb-5">
                        <Card.Title style={{color: "#4d8a8c"}}  className="text-center mt-2">
                            Inquiries
                        </Card.Title>
                        <Card.Body>
                            Any business related inquiries can be made directly to the email <span style={{color: "red"}}>
                    <a target="_blank" href="mailTo:Therealendergate@gmail.com">here.</a></span>
                            <br/>
                            <br/>
                            Heres a few of my other things. You can reach me on any of them!
                            <br/>
                            <br/>
                            <div className="text-center">
                                <a target="_blank" className="mx-2" href="https://www.linkedin.com/in/julian-estes-411b711a8/"><img style={{width:65,height:65}} src={require('../img/linkedin.svg')}/></a>
                                <a target="_blank" className="mx-2" href="https://github.com/Arcalise08"><img style={{width:65,height:65}} src={require('../img/github.svg')}/></a>
                                <a target="_blank" className="mx-2" href="https://medium.com/@demonata08"><img style={{width:65,height:65}} src={require('../img/medium.svg')}/></a>
                                <a target="_blank" className="mx-2" href="https://twitter.com/Arcalise08"><img style={{width:65,height:65}} src={require('../img/twitter.svg')}/></a>
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
