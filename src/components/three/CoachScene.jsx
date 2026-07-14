"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html, ContactShadows } from "@react-three/drei";
import { Wind, Droplets, Atom, Cpu } from "lucide-react";

const MARKERS = [
  { id: "capture", label: "CO₂ Capture", desc: "Rooftop capture cells bind CO₂ from processed air.", pos: [0.9, 1.35, 0.4], Icon: Atom, color: "#10b981" },
  { id: "air", label: "Air Purify", desc: "Multi-stage filtration purifies intake air.", pos: [-2.0, 1.05, 0.4], Icon: Wind, color: "#06b6d4" },
  { id: "water", label: "Water Harvest", desc: "Atmospheric moisture harvested into usable water.", pos: [2.4, 1.05, 0.4], Icon: Droplets, color: "#0ea5e9" },
  { id: "intel", label: "Intelligence", desc: "Edge AI streams to the environmental digital twin.", pos: [-0.9, 1.35, 0.4], Icon: Cpu, color: "#34d399" },
];

function Coach() {
  const group = useRef();
  useFrame((state) => {
    if (group.current) group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
  });

  const windows = Array.from({ length: 7 }, (_, i) => -2.1 + i * 0.63);

  return (
    <group ref={group}>
      {/* Coach body */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[5.6, 1.7, 1.6]} />
        <meshStandardMaterial color="#eef2f7" metalness={0.4} roughness={0.3} />
      </mesh>
      {/* Livery band */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[5.62, 0.4, 1.62]} />
        <meshStandardMaterial color="#10b981" metalness={0.45} roughness={0.35} />
      </mesh>
      {/* Nose accents */}
      <mesh position={[2.85, 0.4, 0]}>
        <boxGeometry args={[0.16, 1.1, 1.5]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.6} roughness={0.3} emissive="#06b6d4" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[-2.85, 0.4, 0]}>
        <boxGeometry args={[0.16, 1.1, 1.5]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.6} roughness={0.3} emissive="#06b6d4" emissiveIntensity={0.15} />
      </mesh>
      {/* Windows */}
      {windows.map((x, i) => (
        <mesh key={i} position={[x, 0.5, 0.81]}>
          <boxGeometry args={[0.46, 0.55, 0.06]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.15} />
        </mesh>
      ))}
      {windows.map((x, i) => (
        <mesh key={`b${i}`} position={[x, 0.5, -0.81]}>
          <boxGeometry args={[0.46, 0.55, 0.06]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.15} />
        </mesh>
      ))}
      {/* Rooftop environmental module base */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <boxGeometry args={[3.4, 0.42, 1.2]} />
        <meshStandardMaterial color="#cbe9dc" metalness={0.5} roughness={0.28} />
      </mesh>
      {/* Rooftop glowing core */}
      <mesh position={[0, 1.44, 0]}>
        <boxGeometry args={[2.8, 0.18, 0.86]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Intake vents */}
      {[-1.0, 0, 1.0].map((x, i) => (
        <mesh key={`v${i}`} position={[x, 1.44, 0]}>
          <boxGeometry args={[0.5, 0.22, 0.9]} />
          <meshStandardMaterial color="#0891b2" emissive="#22d3ee" emissiveIntensity={0.5} />
        </mesh>
      ))}
      {/* Bogies / wheels */}
      {[-1.9, 1.9].map((x, i) => (
        <group key={i}>
          {[0.55, -0.55].map((z, j) => (
            <mesh key={j} position={[x, -0.85, z]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.32, 0.32, 0.14, 26]} />
              <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.4} />
            </mesh>
          ))}
          <mesh position={[x, -0.6, 0]}>
            <boxGeometry args={[1.0, 0.3, 1.3]} />
            <meshStandardMaterial color="#475569" metalness={0.5} roughness={0.5} />
          </mesh>
        </group>
      ))}

      {MARKERS.map((m) => (
        <Marker key={m.id} {...m} />
      ))}
    </group>
  );
}

function Marker({ label, desc, pos, Icon, color }) {
  const [hover, setHover] = useState(false);
  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
      </mesh>
      <Html center distanceFactor={9} position={[0, 0.4, 0]} zIndexRange={[10, 0]}>
        <div
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          className="cursor-pointer select-none"
          data-testid={`coach-marker-${label.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <div
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-slate-800 shadow-lg"
            style={{ borderBottom: `2px solid ${color}` }}
          >
            <Icon className="h-3.5 w-3.5" style={{ color }} />
            {label}
          </div>
          {hover && (
            <div className="mt-1.5 w-44 rounded-xl bg-white/95 p-2.5 text-[10px] leading-snug text-slate-500 shadow-xl">
              {desc}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

export const CoachScene = () => (
  <Canvas
    shadows
    dpr={[1, 2]}
    camera={{ position: [7, 3.5, 8], fov: 40 }}
    data-testid="coach-3d-canvas"
    gl={{ antialias: true }}
  >
    <color attach="background" args={["#f6fbf9"]} />
    <fog attach="fog" args={["#f6fbf9", 16, 30]} />
    <ambientLight intensity={1.15} />
    <hemisphereLight args={["#ffffff", "#d1fae5", 0.8]} />
    <directionalLight position={[6, 9, 6]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
    <directionalLight position={[-6, 4, -5]} intensity={0.7} color="#06b6d4" />
    <pointLight position={[0, 3, 7]} intensity={0.7} color="#34d399" />
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
      <Coach />
    </Float>
    <ContactShadows position={[0, -1.25, 0]} opacity={0.3} scale={16} blur={2.6} far={5} color="#0f766e" />
    <OrbitControls
      enablePan={false}
      minPolarAngle={Math.PI / 7}
      maxPolarAngle={Math.PI / 2.05}
      minDistance={6}
      maxDistance={15}
      autoRotate
      autoRotateSpeed={0.7}
    />
  </Canvas>
);
