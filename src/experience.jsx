import { OrbitControls } from '@react-three/drei';
import { Avatar } from './components/Avatar';
import { Canvas } from '@react-three/fiber';
function Experience() {
    return (
     <Canvas  camera={{ position:[3,3,3], fov:30 }}  >
        
     <OrbitControls />  
     <pointLight position={[10, 10, 10]} />
     <group position-y={-1}>
     <Avatar /></group>
     <ambientLight intensity={1} />
      
    
    
     </Canvas>
    );
  }
  
  export default Experience;