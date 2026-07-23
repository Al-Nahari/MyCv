'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 90
const LINK_DISTANCE = 2.6

function NetworkNodes() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const group = useRef<THREE.Group>(null)

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
      velocities[i * 3] = (Math.random() - 0.5) * 0.003
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.003
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001
    }
    return { positions, velocities }
  }, [])

  const linePositions = useMemo(() => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3), [])

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
    const arr = posAttr.array as Float32Array

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] += velocities[i * 3]
      arr[i * 3 + 1] += velocities[i * 3 + 1]
      arr[i * 3 + 2] += velocities[i * 3 + 2]

      if (Math.abs(arr[i * 3]) > 7) velocities[i * 3] *= -1
      if (Math.abs(arr[i * 3 + 1]) > 4) velocities[i * 3 + 1] *= -1
      if (Math.abs(arr[i * 3 + 2] + 2) > 3) velocities[i * 3 + 2] *= -1
    }
    posAttr.needsUpdate = true

    let vertexCount = 0
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = arr[i * 3] - arr[j * 3]
        const dy = arr[i * 3 + 1] - arr[j * 3 + 1]
        const dz = arr[i * 3 + 2] - arr[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < LINK_DISTANCE) {
          linePositions[vertexCount++] = arr[i * 3]
          linePositions[vertexCount++] = arr[i * 3 + 1]
          linePositions[vertexCount++] = arr[i * 3 + 2]
          linePositions[vertexCount++] = arr[j * 3]
          linePositions[vertexCount++] = arr[j * 3 + 1]
          linePositions[vertexCount++] = arr[j * 3 + 2]
        }
      }
    }
    const lineAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute
    ;(lineAttr.array as Float32Array).set(linePositions.subarray(0, vertexCount))
    lineAttr.needsUpdate = true
    linesRef.current.geometry.setDrawRange(0, vertexCount / 3)

    if (group.current) {
      const t = state.clock.getElapsedTime()
      group.current.rotation.y = Math.sin(t * 0.05) * 0.1
      group.current.rotation.x = Math.cos(t * 0.04) * 0.05
    }
  })

  return (
    <group ref={group}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} color="#5b9bff" transparent opacity={0.85} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3e7bfa" transparent opacity={0.12} />
      </lineSegments>
    </group>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <NetworkNodes />
      </Canvas>
    </div>
  )
}
