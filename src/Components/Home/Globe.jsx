/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";


const Object=({position,size,color})=>{
    const [isHoverd,setIsHoverd]=useState(true);
    const ref=useRef();
    useFrame((state,delta)=>{
        ref.current.rotation.y +=delta
        
    })   
    const earthDay=useTexture('earth2.jpg')
    const earthNight=useTexture('earth2.jpg')


    return(
        <group ref={ref}  onClick={()=>{setIsHoverd(!isHoverd)}} >
        <mesh position={position} >
                <sphereGeometry args={size}/>
                <meshBasicMaterial map={isHoverd? earthDay:earthNight}  />
        </mesh>
        <mesh>
            <sphereGeometry args={[size[0]+.5,15,15]}></sphereGeometry>
            <meshBasicMaterial color={isHoverd?'#0098db':'black'} wireframe/>
        </mesh>
        </group>
    );
}

const Globe = () => {
    

    return (
        <>
            <OrbitControls enableZoom={false}/>
            <Object position={[0,0,0]} size={[2.5,32,32]} />
            
        </>
    );
};

export default Globe;
