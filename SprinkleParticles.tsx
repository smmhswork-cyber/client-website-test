import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SprinkleParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create sprinkles
    const sprinkleCount = 150;
    const sprinkles: THREE.Mesh[] = [];
    const colors = [0xe8c5b0, 0xc8d8c0, 0xd4956a, 0xd4a574, 0xe0b0a0];

    for (let i = 0; i < sprinkleCount; i++) {
      const geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshPhongMaterial({ color });
      const sprinkle = new THREE.Mesh(geometry, material);

      sprinkle.position.set(
        (Math.random() - 0.5) * 10,
        Math.random() * 10,
        (Math.random() - 0.5) * 2
      );

      sprinkle.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      sprinkle.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          -Math.random() * 0.02 - 0.01,
          0
        ),
        originalY: sprinkle.position.y,
      };

      scene.add(sprinkle);
      sprinkles.push(sprinkle);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      sprinkles.forEach((sprinkle) => {
        sprinkle.position.add(sprinkle.userData.velocity);
        sprinkle.rotation.x += 0.01;
        sprinkle.rotation.y += 0.01;

        // Reset position when sprinkle falls below screen
        if (sprinkle.position.y < -5) {
          sprinkle.position.y = 10;
          sprinkle.position.x = (Math.random() - 0.5) * 10;
        }

        // Fade out effect
        const fadeStart = 2;
        if (sprinkle.position.y < fadeStart) {
          const material = sprinkle.material as THREE.MeshPhongMaterial;
          material.opacity = sprinkle.position.y / fadeStart;
          material.transparent = true;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}
