import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const WaveBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Настраиваем сцену, камеру и рендерер
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current })

    // Создаем волну
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0.0 },
        u_mouse: { value: new THREE.Vector2() },
      },
      vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    uniform float u_time;
    uniform vec2 u_mouse;
    varying vec2 vUv;
    void main() {
      vec2 position = vUv - u_mouse;
      float color = 0.5 + 0.5 * sin(u_time + length(position) * 5.0);
      gl_FragColor = vec4(vec3(color), 1.0);
    }
  `,
    })
    const plane = new THREE.Mesh(geometry, material)
    scene.add(plane)

    // Обновляем рендерер каждый кадр
    const animate = () => {
      if (canvasRef.current) {
        requestAnimationFrame(animate)
        material.uniforms.u_time.value += 0.01
        renderer.render(scene, camera)
      }
    }
    animate()

    // Обновляем положение мыши в шейдере
    const onMouseMove = (event) => {
      if (canvasRef.current) {
        const canvasRect = canvasRef.current.getBoundingClientRect()
        material.uniforms.u_mouse.value.x =
          ((event.clientX - canvasRect.left) / canvasRect.width) * 2 - 1
        material.uniforms.u_mouse.value.y =
          ((event.clientY - canvasRect.top) / canvasRect.height) * -2 + 1
      }
    }
    canvasRef.current.addEventListener('mousemove', onMouseMove)

    return () => {
      canvasRef.current.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="wave-background" />
}

export default WaveBackground
