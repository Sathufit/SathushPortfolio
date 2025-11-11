import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
function FloatingShapes() {
    const torusRef = useRef(null);
    const sphereRef = useRef(null);
    const boxRef = useRef(null);
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Rotate torus
        if (torusRef.current) {
            torusRef.current.rotation.x = t * 0.2;
            torusRef.current.rotation.y = t * 0.3;
            torusRef.current.position.y = Math.sin(t) * 0.2;
        }
        // Rotate sphere
        if (sphereRef.current) {
            sphereRef.current.rotation.y = t * 0.5;
            sphereRef.current.position.y = Math.cos(t * 0.8) * 0.3;
        }
        // Rotate box
        if (boxRef.current) {
            boxRef.current.rotation.x = t * 0.4;
            boxRef.current.rotation.z = t * 0.3;
            boxRef.current.position.y = Math.sin(t * 1.2) * 0.2;
        }
    });
    return (_jsxs(_Fragment, { children: [_jsxs("mesh", { ref: torusRef, position: [0, 0, 0], children: [_jsx("torusGeometry", { args: [1, 0.4, 16, 100] }), _jsx("meshStandardMaterial", { color: "#fafafa", metalness: 0.9, roughness: 0.1, emissive: "#fafafa", emissiveIntensity: 0.2 })] }), _jsxs("mesh", { ref: sphereRef, position: [-2, 0.5, 0], children: [_jsx("sphereGeometry", { args: [0.5, 32, 32] }), _jsx("meshStandardMaterial", { color: "#a1a1aa", wireframe: true, metalness: 0.8, roughness: 0.2, emissive: "#a1a1aa", emissiveIntensity: 0.1 })] }), _jsxs("mesh", { ref: boxRef, position: [2, -0.3, 0], children: [_jsx("boxGeometry", { args: [0.7, 0.7, 0.7] }), _jsx("meshStandardMaterial", { color: "#d4d4d8", metalness: 0.9, roughness: 0.1, emissive: "#d4d4d8", emissiveIntensity: 0.15 })] })] }));
}
export default function Hero3D() {
    return (_jsx("div", { className: "absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none z-0", children: _jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 50 }, dpr: [1, 2], children: [_jsx("ambientLight", { intensity: 0.8 }), _jsx("directionalLight", { position: [10, 10, 5], intensity: 1.5, color: "#fafafa" }), _jsx("directionalLight", { position: [-10, -5, -5], intensity: 0.6, color: "#a1a1aa" }), _jsx("pointLight", { position: [0, 0, 5], intensity: 0.8, color: "#d4d4d8" }), _jsx(FloatingShapes, {})] }) }));
}
