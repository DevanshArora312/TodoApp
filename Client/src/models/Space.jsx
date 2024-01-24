import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { setRotate, setY, setlastX,setSpeed } from "../redux/slices/space";
import { useSelector, useDispatch } from "react-redux";

export function Space(props) {
  const { nodes, materials } = useGLTF("/space.glb");
  const spaceRef = useRef();
  const { gl, viewport } = useThree();
  const lastX = useSelector(state => state.space.lastX);
  const rotationSpeed = useSelector(state => state.space.speed);
  const dampingFactor = 0.95;
  const dispatch = useDispatch();
  const rotate = useSelector((state) => state.space.rotation);
    
  useEffect(() => {
    dispatch(setRotate(props.rotation));
  }, []);
  const handlePointerMove = (event) => {
        // event.stopPropagation();
        event.preventDefault();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const delta = (clientX - lastX) / viewport.width;
        // Update the island's rotation based on the mouse/touch movement
        dispatch(setY(rotate[1] + delta * 0.01 * Math.PI));
        spaceRef.current.rotation.y = rotate[1];

        dispatch(setlastX(clientX));

    };

    useEffect(() => {
        // Add event listeners for pointer and keyboard events
        const canvas = gl.domElement;
        canvas.addEventListener("pointermove", handlePointerMove);
        
        // Remove event listeners when component unmounts
        return () => {
        canvas.removeEventListener("pointermove", handlePointerMove);
        };
    }, [gl, handlePointerMove]);


  return (
    <a.group ref={spaceRef} {...props} dispose={null} className="origin-center" > 
      <points
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.013}
      />
    </a.group>
  );
}

