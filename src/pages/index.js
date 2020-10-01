import React from 'react';
import {Canvas} from 'react-three-fiber';
import {softShadows,  OrbitControls} from 'drei';
import SpinningMesh from './../components/spinning-mesh';

// Call this here, outside the component
softShadows();

// https://drei.react-spring.io/?path=/story/shaders-meshdistortmaterial--mesh-distort-material-ref-st
// https://www.youtube.com/watch?v=fdtqqyeKRJk&ab_channel=WrongAkram
// https://www.youtube.com/watch?v=Qs9A3XIjbg4&pp=wgIECgIIAQ%3D%3D&feature=push-sd&attr_tag=64dSwKWfvRJ3rA_K%3A6&ab_channel=WrongAkram

/**
 * The scene and camera are built into the Canvas. We cant write HTML directly into the Canvas either,
 * for that we would need to use the Html component from drei
 * 
 * The cameras position is [x,y,z]
 * fov = field of view
 * 
 * ambientLight gives a soft light
 * 
 * directionalLight is the main source of light that casts the shadows
 * 
 * pointLight is a light from the side
 */
const Index = () => {

    return (
        <div
        style={{height: '100vh'}}
        >
       <Canvas
        colorManagement
        shadowMap
        camera={{position: [-5, 2, 10], fov: 60}}
        >
        <ambientLight intensity={0.3}/>
        <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5}/>
        <pointLight position={[0, -10, 0]} intensity={0.5}/>
        <group>
            {/* <Plane args={[2, 2]} receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}/> */}
            {/*The plane or floor, needed so the light hits something and creates a shadow*/}
            <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
            >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.2} />
            </mesh>
            <SpinningMesh
            position={[0, 1, 0]}
            color='lightblue'
            args={[2, 2, 1]}
            speed={2}
          />
          <SpinningMesh position={[-2, 1, -5]} color='pink' speed={6} />
          <SpinningMesh position={[5, 1, -2]} color='black' speed={6} args={[1, 3, 2]}/>
        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
        </Canvas>
        </div>
 
    )
}

export default Index;