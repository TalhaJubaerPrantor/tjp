import Globe  from "./Globe.jsx";
import { Canvas } from "@react-three/fiber";
import "./home.css";
import Skills from "./Skills.jsx";
import * as THREE from 'three'
import { Center } from "@react-three/drei";
import Footer from "../Footer/Footer.jsx";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";



const Home = () => {
    // const html=useTexture('html.png')
    return (
        <div>
        <div className="home-sec-1">
            <div className="home-sec-1-left">
                <h1 style={{fontFamily:"monospace"}}>I am Talha Jubaer Prantor</h1>
                <h2 style={{fontFamily:"monospace"}}>Presenting you the websites of next level...</h2>
                <h2 style={{fontFamily:"monospace"}}>I am here to help you to make your websites alive with 3D models using ThreeJs,GSAP and many other technology</h2>
                <h2 style={{fontFamily:"monospace"}}>So why be simple when you can be extraordinary</h2><br /><br />
                <a href="/"><FaFacebook/></a>
                <a href="/"><FaWhatsapp/></a>
                <a href="/"><FaLinkedin/></a>
                <a href="/"><FaGithub/></a>
            </div>
            <div className="home-sec-2">
            <Canvas className="globe" style={{height:"40vh"}}>
              <Globe></Globe>
            </Canvas>
            </div>
        </div>
        <div style={{textAlign:'center'}}>
            
            <h1>Skills</h1>
            <br /><br /><br /><br /><br />
        </div>
        <div className="skills">
            <Canvas className="skill-item" style={{height:"150px",width:'150px'}} >
              <Skills textures={{texture:"html"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"css"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"js"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"react"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"three"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"node"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"mongodb"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"express"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"cpp"}}></Skills>
            </Canvas>

            <Canvas className="skill-item" style={{height:"150px",width:'150px'}}>
              <Skills textures={{texture:"github"}}></Skills>
            </Canvas>
            </div>
            {/* Footer */}

            <Footer/>
        
        </div>
    );
};
// http://localhost:5173/
export default Home; 