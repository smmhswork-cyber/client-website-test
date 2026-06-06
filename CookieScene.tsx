import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CookieScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cookiesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfdfaf6);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(isMobile ? 1 : window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const sphereSegments = isMobile ? 16 : 32;
    const cookieShapes = [
      { geometry: new THREE.ConeGeometry(0.6, 0.3, 5), color: 0xe8c5b0, x: -2, y: 1 },
      { geometry: new THREE.SphereGeometry(0.5, sphereSegments, sphereSegments), color: 0xc8d8c0, x: 0, y: -1 },
      { geometry: new THREE.ConeGeometry(0.5, 0.2, 4), color: 0xd4956a, x: 2, y: 1 },
      { geometry: new THREE.BoxGeometry(0.8, 0.8, 0.2), color: 0xe8c5b0, x: -1.5, y: -1.5 },
      { geometry: new THREE.SphereGeometry(0.4, sphereSegments, sphereSegments), color: 0xd4956a, x: 1.5, y: -0.5 },
    ];
    if (!isMobile) {
      cookieShapes.push({ geometry: new THREE.SphereGeometry(0.35, sphereSegments, sphereSegments), color: 0xe0b0a0, x: -0.5, y: 0.5 });
    }

    cookieShapes.forEach((shape) => {
      const material = new THREE.MeshPhongMaterial({
        color: shape.color,
        shininess: 100,
      });
      const mesh = new THREE.Mesh(shape.geometry, material);
      mesh.position.set(shape.x, shape.y, 0);
      mesh.userData = {
        originalY: shape.y,
        floatSpeed: Math.random() * 0.01 + 0.005,
        rotationSpeed: Math.random() * 0.01 + 0.005,
      };
      scene.add(mesh);
      cookiesRef.current.push(mesh);
    });

    // Mouse tracking for parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Update cookies
      cookiesRef.current.forEach((cookie) => {
        // Floating animation
        cookie.position.y = cookie.userData.originalY + Math.sin(time * cookie.userData.floatSpeed) * 0.5;

        // Rotation
        cookie.rotation.x += cookie.userData.rotationSpeed;
        cookie.rotation.y += cookie.userData.rotationSpeed * 0.7;

        // Parallax with mouse
        cookie.position.x += (mouseX * 0.1 - cookie.position.x) * 0.05;
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
