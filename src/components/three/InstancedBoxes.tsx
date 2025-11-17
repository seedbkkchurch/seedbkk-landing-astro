// InstancedBoxes.tsx หรือ .jsx ก็ได้
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Stats from 'three/addons/libs/stats.module.js'

const InstancedBoxes: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const instances = 5000
        let lastTime = 0

        const moveQ = new THREE.Quaternion(0.5, 0.5, 0.5, 0.0).normalize()
        const tmpQ = new THREE.Quaternion()
        const tmpM = new THREE.Matrix4()
        const currentM = new THREE.Matrix4()

        // CAMERA
        const width = container.clientWidth || window.innerWidth
        const height = container.clientHeight || window.innerHeight

        const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000)
        camera.position.z = 100

        // SCENE
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x101010)

        // GEOMETRY (เหมือนในตัวอย่างเดิม)
        const geometry = new THREE.InstancedBufferGeometry()

        const vertexBuffer = new THREE.InterleavedBuffer(
            new Float32Array([
                // Front
                -1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, -1, -1, 1, 0, 0, 1, 0, 0, 1, -1, 1, 0, 1, 1, 0, 0,
                // Back
                1, 1, -1, 0, 1, 0, 0, 0, -1, 1, -1, 0, 0, 0, 0, 0, 1, -1, -1, 0, 1, 1, 0, 0, -1, -1, -1, 0, 0, 1, 0, 0,
                // Left
                -1, 1, -1, 0, 1, 1, 0, 0, -1, 1, 1, 0, 1, 0, 0, 0, -1, -1, -1, 0, 0, 1, 0, 0, -1, -1, 1, 0, 0, 0, 0, 0,
                // Right
                1, 1, 1, 0, 1, 0, 0, 0, 1, 1, -1, 0, 1, 1, 0, 0, 1, -1, 1, 0, 0, 0, 0, 0, 1, -1, -1, 0, 0, 1, 0, 0,
                // Top
                -1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, -1, 1, -1, 0, 0, 1, 0, 0, 1, 1, -1, 0, 1, 1, 0, 0,
                // Bottom
                1, -1, 1, 0, 1, 0, 0, 0, -1, -1, 1, 0, 0, 0, 0, 0, 1, -1, -1, 0, 1, 1, 0, 0, -1, -1, -1, 0, 0, 1, 0, 0,
            ]),
            8
        )

        const positions = new THREE.InterleavedBufferAttribute(vertexBuffer, 3, 0)
        geometry.setAttribute('position', positions)

        const uvs = new THREE.InterleavedBufferAttribute(vertexBuffer, 2, 4)
        geometry.setAttribute('uv', uvs)

        const indices = new Uint16Array([
            0, 2, 1, 2, 3, 1, 4, 6, 5, 6, 7, 5, 8, 10, 9, 10, 11, 9, 12, 14, 13, 14, 15, 13, 16, 17, 18, 18, 17, 19, 20,
            21, 22, 22, 21, 23,
        ])

        geometry.setIndex(new THREE.BufferAttribute(indices, 1))

        // MATERIAL
        const material = new THREE.MeshBasicMaterial()
        const texture = new THREE.TextureLoader().load('textures/crate.gif') // ระวัง path ด้วย
        texture.colorSpace = THREE.SRGBColorSpace
        texture.flipY = false
        material.map = texture

        // INSTANCED MESH
        const matrix = new THREE.Matrix4()
        const offset = new THREE.Vector3()
        const orientation = new THREE.Quaternion()
        const scale = new THREE.Vector3(1, 1, 1)

        const mesh = new THREE.InstancedMesh(geometry, material, instances)

        for (let i = 0; i < instances; i++) {
            // offset
            let x = Math.random() * 100 - 50
            let y = Math.random() * 100 - 50
            let z = Math.random() * 100 - 50

            offset.set(x, y, z).normalize()
            offset.multiplyScalar(5)
            offset.set(x + offset.x, y + offset.y, z + offset.z)

            // orientation
            x = Math.random() * 2 - 1
            y = Math.random() * 2 - 1
            z = Math.random() * 2 - 1
            let w = Math.random() * 2 - 1

            orientation.set(x, y, z, w).normalize()

            matrix.compose(offset, orientation, scale)
            mesh.setMatrixAt(i, matrix)
        }

        scene.add(mesh)

        // RENDERER
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(width, height)
        container.appendChild(renderer.domElement)

        // STATS
        const stats = new Stats()
        container.appendChild(stats.dom)

        // RESIZE HANDLER
        const onWindowResize = () => {
            const newWidth = container.clientWidth || window.innerWidth
            const newHeight = container.clientHeight || window.innerHeight

            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix()
            renderer.setSize(newWidth, newHeight)
        }

        window.addEventListener('resize', onWindowResize)

        // ANIMATE
        renderer.setAnimationLoop((time: number) => {
            mesh.rotation.y = time * 0.00005

            const delta = (time - lastTime) / 5000
            tmpQ.set(moveQ.x * delta, moveQ.y * delta, moveQ.z * delta, 1).normalize()
            tmpM.makeRotationFromQuaternion(tmpQ)

            for (let i = 0; i < instances; i++) {
                mesh.getMatrixAt(i, currentM)
                currentM.multiply(tmpM)
                mesh.setMatrixAt(i, currentM)
            }

            mesh.instanceMatrix.needsUpdate = true
            mesh.geometry.computeBoundingSphere()

            lastTime = time

            renderer.render(scene, camera)
            stats.update()
        })

        // CLEANUP
        return () => {
            renderer.setAnimationLoop(null)
            window.removeEventListener('resize', onWindowResize)

            container.removeChild(renderer.domElement)
            container.removeChild(stats.dom)

            geometry.dispose()
            material.dispose()
            texture.dispose()
        }
    }, [])

    return <div ref={containerRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} />
}

export default InstancedBoxes
