import * as THREE from 'three';

const PlanetCreator = (size, segments, name, pic, [x, y, z], isBackSide, isPhong, parent) => {
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

export default PlanetCreator;