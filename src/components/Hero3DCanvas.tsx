import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  accentColor?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      58,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    // WebGL Renderer with Alpha
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Central Geodesic Icosahedron (Core Enterprise Hub) in Corporate Blue
    const geoIcosahedron = new THREE.IcosahedronGeometry(7.2, 2);
    const matWire = new THREE.MeshBasicMaterial({
      color: 0x063B83, // Corporate Blue
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosahedron = new THREE.Mesh(geoIcosahedron, matWire);
    scene.add(icosahedron);

    // 2. Primary Gyro Orbit Ring in Electric Blue (#087FE5)
    const geoTorus = new THREE.TorusGeometry(8.8, 0.09, 16, 100);
    const matTorus = new THREE.MeshBasicMaterial({
      color: 0x087FE5, // Electric Blue
      transparent: true,
      opacity: 0.7,
    });
    const torus = new THREE.Mesh(geoTorus, matTorus);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    // 3. Second High-Glow Ring in Cyan (#08B9E8)
    const geoTorus2 = new THREE.TorusGeometry(10.8, 0.06, 16, 120);
    const matTorus2 = new THREE.MeshBasicMaterial({
      color: 0x08B9E8, // Cyan
      transparent: true,
      opacity: 0.55,
    });
    const torus2 = new THREE.Mesh(geoTorus2, matTorus2);
    torus2.rotation.y = Math.PI / 4;
    scene.add(torus2);

    // 4. Floating Enterprise Node Cloud (SAP Data Stream) in Cyan, Electric Blue, White
    const particleCount = 260;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x08B9E8);
    const cElectric = new THREE.Color(0x087FE5);
    const cWhite = new THREE.Color(0xFFFFFF);

    for (let i = 0; i < particleCount; i++) {
      const radius = 6.5 + Math.random() * 11;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = i % 3 === 0 ? cCyan : i % 3 === 1 ? cElectric : cWhite;
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.2;
      targetY = y * 2.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Subtle rotations
      icosahedron.rotation.y = elapsedTime * 0.12 + mouseX * 0.35;
      icosahedron.rotation.x = elapsedTime * 0.07 + mouseY * 0.35;

      torus.rotation.z = -elapsedTime * 0.18;
      torus.rotation.x = Math.PI / 3 + mouseY * 0.25;

      torus2.rotation.y = elapsedTime * 0.14;
      torus2.rotation.z = elapsedTime * 0.09;

      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = -elapsedTime * 0.03;

      camera.position.x = mouseX * 1.8;
      camera.position.y = -mouseY * 1.8;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geoIcosahedron.dispose();
      matWire.dispose();
      geoTorus.dispose();
      matTorus.dispose();
      geoTorus2.dispose();
      matTorus2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
};
