import React, { Suspense, useState } from 'react'
import Loader from '../components/Loader';
import {Space} from "../models/Space"
import {Canvas } from "@react-three/fiber"

const Login = () => {
    // const [isRotating,setRotating] = useState(false);
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
        <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{near:0.1,far:1000}}
        >
            <Suspense fallback={<Loader/>}>
                <Space
                    position={[1.6,-1.1,1]}
                    scale={[1.2,1.2,1.2]}
                    rotation={[1,1.4,1.1]}
                />
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Login;