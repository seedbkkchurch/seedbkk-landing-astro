import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBox() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio || 1)

        // Scene + Camera
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
        camera.position.z = 2

        renderer.setSize(canvas.clientWidth, canvas.clientHeight)

        // Cube ง่าย ๆ
        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(),
            new THREE.MeshNormalMaterial() // มีสีหลาย ๆ ด้าน
        )
        scene.add(cube)

        let frameId: number

        const renderLoop = () => {
            frameId = requestAnimationFrame(renderLoop)
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            renderer.render(scene, camera)
        }

        renderLoop()

        // handle resize
        const handleResize = () => {
            const { clientWidth, clientHeight } = canvas
            renderer.setSize(clientWidth, clientHeight, false)
            camera.aspect = clientWidth / clientHeight
            camera.updateProjectionMatrix()
        }

        window.addEventListener('resize', handleResize)

        // cleanup
        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }, [])

    return <canvas ref={canvasRef} style={{ width: '100%', height: '300px', display: 'block' }} />
}
