import React from "react";
import MediaQuery from "react-responsive/src/Component";
import ParticlesBg from "particles-bg";
import clipart from "../img/clipart.png";
import Card from "react-bootstrap/Card";



class Home extends React.Component {

    render() {
        return (
            <div className="App">
                <MediaQuery maxWidth={576}>
                    <ParticlesBg num="20" color="#b51204" type="cobweb" bg={true}/>
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
                        <img className="d-block mx-auto titleClipart" height="300px" width="300px" src={clipart}/>
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
                            I've loved software and game development since i was a kid. I've always been excited in how you can
                            put a few snippits of code together and watch something come to life! Its been my dream since I was
                            a kid to get in the development field! To that end I've been practicing c# for years! More recently
                            i've been learning javascript for some web development(front and backend) experience. I've learned
                            several frameworks (Vue, React, & Angular). I'm also certified by Careerfoundry in the M.E.R.N
                            (or M.E.A.N... or... M.E.V.N... but that doesnt sound as cool) tech stack. I absolutely love
                            what I do and I bring that passion and love to any project I work on.
                            <br/>
                            <br/>I know theres still a ton to learn. I learn new things every day and I'm up for any challenge that anyone can present to me!
                            <br/>
                            <br/>Specialities: Javascript & JS frameworks Vue, React, Angular, C#; Object-Oriented programming
                        </Card.Body>
                    </Card>
                    <MediaQuery maxWidth={576}>
                        <ParticlesBg num="20" color="#b51204" type="cobweb" bg={true}/>
                    </MediaQuery>
                    <Card className="mt-2 mb-5">
                        <Card.Title style={{color: "#4d8a8c"}}  className="text-center mt-2">
                            Inquiries
                        </Card.Title>
                        <Card.Body>
                            Any business related inquiries can be made directly to the email <span style={{color: "red"}}>
                    <a target="_blank" href="mailTo:Therealendergate@gmail.com">here.</a></span>
                            <br/>
                            <br/>
                            I also reply relatively quickly on <a target="_blank" href="https://www.linkedin.com/in/julian-estes-411b711a8/"> Linkedin.</a>
                            <br/>
                            <br/>
                            Dont forget to also follow my projects on <a target="_blank" href="https://github.com/Arcalise08">Github!</a> Im uploading new stuff every day!
                        </Card.Body>
                    </Card>
                </div>
                <MediaQuery maxWidth={576}>
                    <ParticlesBg num="20" color="#b51204" type="cobweb" bg={true}/>
                </MediaQuery>
                <MediaQuery minWidth={576}>
                    <ParticlesBg color="#b51204" type="cobweb" bg={true}/>
                </MediaQuery>
                <small className='d-block text-center mt-3'>Made with <span style={{color: "#3293a8"}}>React</span> by <span style={{color:"red"}}>Julian Estes</span></small>
            </div>
        )
    }
}
export default Home;