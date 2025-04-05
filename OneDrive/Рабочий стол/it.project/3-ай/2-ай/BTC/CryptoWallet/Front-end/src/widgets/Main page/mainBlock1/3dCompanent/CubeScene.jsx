import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '@react-three/drei';

const Model = ({ url }) => {
  const obj = useLoader(OBJLoader, url);
  const ref = useRef();

  useEffect(() => {
    if (obj) {
      const box = new THREE.Box3().setFromObject(obj);
      const center = box.getCenter(new THREE.Vector3());
      obj.position.sub(center);
      
      obj.scale.setScalar(1); // Увеличивает объект в 2 раза
      
      const goldColor = new THREE.Color(0xE7CF16);
      obj.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: goldColor,
            roughness: 0.7,
            metalness: 0.5,
            emissive: goldColor.clone().multiplyScalar(0.1),
            emissiveIntensity: 0.1
          });
        }
      });
    }
  }, [obj]);

  return <primitive ref={ref} object={obj} />;
};

const Scene = () => {
  return (
    <Canvas 
      style={{ width: '604px', height: '500px', position: 'absolute' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ physicallyCorrectLights: true }}
    >
      <ambientLight intensity={0.3} color={0xffffff} />
      <directionalLight position={[5, 5, 5]} intensity={2} color={0xfff4d0} castShadow />
      <directionalLight position={[-3, 3, -3]} intensity={1.5} color={0xffffff} />
      <Model url="/img/untitled.obj" />
      <OrbitControls 
        enablePan={true}
        enableZoom={false} 
        enableRotate={true}
      />
    </Canvas>
  );
};

export default Scene;
