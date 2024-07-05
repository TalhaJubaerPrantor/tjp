import {  OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";



const Skills = (props) => {

        const html=useTexture('html.png');
        const css=useTexture('css.png');
        const js=useTexture('javascript.png');
        const react=useTexture('react.png');
        const three=useTexture('three.png');
        const node=useTexture('node.png');
        const express=useTexture('express.png');
        const mongoDb=useTexture('mongodb.png');
        const cpp=useTexture('cpp.png');
        const gitHub=useTexture('github.png');

        const texture=props.textures.texture;

        let setTexture='';
        if(texture=='html')
             setTexture=html;
        else if(texture=='css'){
             setTexture=css;
        }else if(texture=='js'){
            setTexture=js;
        }else if(texture=='react'){
            setTexture=react;
        }else if(texture=='three'){
            setTexture=three;
        }else if(texture=='node'){
            setTexture=node;
        }else if(texture=='express'){
            setTexture=express;
        }else if(texture=='mongodb'){
            setTexture=mongoDb;
        }else if(texture=='cpp'){
            setTexture=cpp;
        }else if(texture=='github'){
            setTexture=gitHub;
        }

        const skillRef=useRef()
        useFrame((state,delta)=>{
            skillRef.current.rotation.y+=delta
        })

        // screen size
        // const [size,setSize]=useState();
        // setSize(window.innerWidth)
        // console.log(size)

    return (
        <>
        {/* <CameraControls ref={cameraRef}/> */}
        {/* <OrbitControls enableZoom={false}/> */}
        <mesh ref={skillRef}>
            <boxGeometry args={[3.5,3.5,3.5]}/>
            <meshBasicMaterial color={'white'} map={setTexture} transparent/>
        </mesh>

            
        </>
    );
};

export default Skills;