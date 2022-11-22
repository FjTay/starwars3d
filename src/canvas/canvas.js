import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import galaxyPic from './galaxy.png'
import rotationAxisPic from './rotationAxis.jpg'
import mustafarPic from './mustafar.jpg'
import tatooinePic from './tatooine.jpg'
import alderaanPic from './alderaan.jpg'
import coruscantPic from './coruscant.jpg'
import feluciaPic from './felucia.jpg'
import naboohPic from './nabooh.jpeg'
import endorPic from './endor.jpg'
import deathStarPic from './deathStar.jpg'
import hothPic from './hoth.png'

const Canvas = () => {    

const runGalaxy = () => {

// global variables
let scene;
let camera;
let renderer;
let previousIntersect = false;
let planetHighLighter = false
const canvas = document.querySelector('.webgl');
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const redLaser = [0xD70000, 0x9D0000, 0x9D0000, 0x9D0000];

// shader GLSL variables
const _VS = `
  uniform vec3 viewVector;
  uniform float c;
  uniform float p;
  varying float intensity;
  void main() 
  {
    vec3 vNormal = normalize( normalMatrix * normal );
    vec3 vNormel = normalize( normalMatrix * viewVector );
    intensity = pow( c - dot(vNormal, vNormel), p );
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.4 );
  }
`;

const _FS = `
  uniform vec3 glowColor;
  varying float intensity;
  void main() 
  {
    vec3 glow = 2.0 * glowColor * intensity;
      gl_FragColor = vec4( glow, 1.0 );
  }
`;

// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 6;
scene.add(camera);

// shader function
const shader = (size, segments) => {
    return new THREE.Mesh(
        new THREE.SphereGeometry(size, segments, segments), 
        new THREE.ShaderMaterial ({
            uniforms: { 
                "c":   { type: "f", value: 0.2 },
                "p":   { type: "f", value: 4.0 },
            glowColor: { type: "c", value: new THREE.Color(0xd9d946) },
            viewVector: { type: "v3", value: camera.position }
		    },
            vertexShader : _VS,
            fragmentShader : _FS,
            side: THREE.BackSide,
		    blending: THREE.AdditiveBlending,
		    transparent: true
        })
    )
}

const star1 = shader(0.7, 32);
star1.position.set(0, 0, 0);
scene.add(star1);

// renderer setup
renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

// orbit control setup
const controls = new OrbitControls(camera, renderer.domElement);

// planet main function
const planet = (size, segments, name, pic, [x, y, z], isBackSide, isPhong) => {
    const newPlanet =  new THREE.Mesh(
        new THREE.SphereGeometry(size, segments, segments), 
        new THREE[isPhong ? 'MeshPhongMaterial' : 'MeshBasicMaterial']({
            // map: THREE.ImageUtils.loadTexture(`texture/${name}.${ext}`),
            map: THREE.ImageUtils.loadTexture(pic),
            side: isBackSide ? THREE.BackSide : THREE.FrontSide
        })
    )
    newPlanet.name = name
    newPlanet.position.set(x, y, z)
    return newPlanet
}

// function that makes planet bright
const brightPlanet = (planet, intensity) => {
    planet.material.color.r = intensity;
    planet.material.color.g = intensity;
    planet.material.color.b = intensity;
}

// creating planetes
const galaxy = planet(100, 64, 'galaxy', galaxyPic, [0, 0, 0], true, false)
scene.add(galaxy)

const rotationAxis = planet(0.001, 16, 'rotationAxis', rotationAxisPic, [0, 0, 0], false, false)
scene.add(rotationAxis)

const mustafar = planet(0.3, 32, 'mustafar', mustafarPic, [6, 0, 0], false, true)
brightPlanet(mustafar, 4)
rotationAxis.add(mustafar)

const tatooine = planet(0.4, 32, 'tatooine', tatooinePic, [8, 0, 0], false, true)
rotationAxis.add(tatooine)

const alderaan = planet(0.5, 32, 'alderaan', alderaanPic, [10, 0, 0], false, true)
rotationAxis.add(alderaan)

const coruscant = planet(0.4, 32, 'coruscant', coruscantPic, [12, 0, 0], false, true)
brightPlanet(coruscant, 8)
rotationAxis.add(coruscant)

const felucia = planet(0.6, 32, 'felucia', feluciaPic, [14, 0, 0], false, true)
rotationAxis.add(felucia)

const nabooh = planet(0.4, 32, 'nabooh', naboohPic, [16, 0, 0], false, true)
rotationAxis.add(nabooh)

const endor = planet(0.15, 32, 'endor', endorPic, [18, 0, 0], false, true)
rotationAxis.add(endor)

const deathStar = planet(0.1, 32, 'deathStar', deathStarPic, [20, 0, 0], false, true)
rotationAxis.add(deathStar)

const hoth = planet(0.4, 32, 'hoth', hothPic, [22, 0, 0], false, true)
rotationAxis.add(hoth)

// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// point light helper
const Helper = new THREE.PointLightHelper(pointLight);
scene.add(Helper);

// handling resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}, false);

// tracking pointer movements
const onPointerMove = (event) => {
	pointer.x = (event.clientX / window.innerWidth) * 2 - 1
	pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
}
window.addEventListener('pointermove', onPointerMove )

// planet highlighter
const drawPlanetHighlighter = () => {
    return new THREE.Mesh(
        new THREE.MeshBasicMaterial({ color: 0xD70000}),
        new THREE.RingGeometry(20, 5, 10, 10, 0, 5.12) 
    )
}

// planet highlighting (hover) function
const planetHover = () => {
    raycaster.setFromCamera( pointer, camera );
	const intersects = raycaster.intersectObjects(rotationAxis.children);
        if(intersects.length === 1 && !previousIntersect) {
            previousIntersect = intersects[0]
            planetHighLighter = drawPlanetHighlighter()
            planetHighLighter.name = 'planetHighLighter'
            previousIntersect.object.add(planetHighLighter)
                alert("hello")
        } else if (intersects.length === 0 && previousIntersect) {
            previousIntersect.object.children = previousIntersect.object.children.filter(elem => elem.name !== "planetHighLighter")
            previousIntersect = false
        }
}

// spinning animation
const animate = () => {
    requestAnimationFrame(animate);
    galaxy.rotation.y -= 0.0001;
    rotationAxis.rotation.y -= 0.0005
    mustafar.rotation.y -= 0.01;
    tatooine.rotation.y -= 0.01;
    alderaan.rotation.y -= 0.01;
    coruscant.rotation.y -= 0.01;
    felucia.rotation.y -= 0.01;
    nabooh.rotation.y -= 0.01;
    hoth.rotation.y -= 0.01;
    endor.rotation.y -= 0.01;
    controls.update();
    planetHover()
    render();
};

// rendering
const render = () => {
    if (previousIntersect) {
        planetHighLighter.geometry.dispose()
        planetHighLighter.material.dispose()
        let geometry = new THREE.RingGeometry(previousIntersect.object.geometry.boundingSphere.radius + 0.5, previousIntersect.object.geometry.boundingSphere.radius + 0.6, 100, 100, 0, Math.PI + Math.sin(Date.now() * 0.003) * Math.PI < 6 ? Math.PI + Math.sin(Date.now() * 0.003) * Math.PI : 6)
        planetHighLighter.geometry = geometry
        let material = new THREE.MeshBasicMaterial({color: redLaser[Math.floor(Math.random() * redLaser.length)]});
        planetHighLighter.material = material
        planetHighLighter.lookAt(camera.position)
    }
    star1.material.uniforms.viewVector.value = new THREE.Vector3().subVectors(camera.position, star1.position)
    renderer.render(scene, camera);
}

animate();
}

useEffect(() => { 
    runGalaxy()
})

    return (<canvas className="webgl"></canvas>)
}

export default Canvas;