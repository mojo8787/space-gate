
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SpaceSceneProps {
  className?: string;
}

const SpaceScene: React.FC<SpaceSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true
    });
    
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Baghdad satellite path
    const satelliteOrbitGeometry = new THREE.TorusGeometry(3, 0.02, 16, 100);
    const satelliteOrbitMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x1be7ff,
      transparent: true,
      opacity: 0.6
    });
    const satelliteOrbit = new THREE.Mesh(satelliteOrbitGeometry, satelliteOrbitMaterial);
    satelliteOrbit.rotation.x = Math.PI / 3;
    scene.add(satelliteOrbit);

    // Satellite
    const satelliteGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.3);
    const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0xff4ecd });
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satellite);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars slowly
      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.0001;

      // Move satellite along orbit
      const time = Date.now() * 0.001;
      satellite.position.x = Math.cos(time * 0.5) * 3;
      satellite.position.y = Math.sin(time * 0.5) * 3 * Math.sin(Math.PI / 3);
      satellite.position.z = Math.sin(time * 0.5) * 3 * Math.cos(Math.PI / 3);

      // Look where it's going
      satellite.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} />;
};

export default SpaceScene;
