// Create the scene
const scene = new THREE.Scene();
// Setup the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 1000;
// Setup the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Handle window resizing
window.addEventListener('resize', function() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    renderer.setSize(newWidth, newHeight);
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
});
// Celestial Bodies Data
const celestialBodies = [
    {
        name: "Sun",
        radius: 1, // Based on your scale
        distance: 0,
        color: 0xffdd00
    },
    {
        name: "Mercury",
        radius: 0.0035058,
        distance: 83.20,
        color: 0x8c7d6b
    },
    // ... Add other celestial bodies similarly
];

// Create spheres for each celestial body
celestialBodies.forEach(body => {
    const geometry = new THREE.SphereGeometry(body.radius * 100, 32, 32); // Multiplied by 100 for better visualization
    const material = new THREE.MeshBasicMaterial({ color: body.color });
    const sphere = new THREE.Mesh(geometry, material);
    
    sphere.position.x = body.distance; // For now, positioning each sphere on the x-axis based on its distance
    scene.add(sphere);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotating the entire scene for a better view (optional)
    scene.rotation.y += 0.001;

    renderer.render(scene, camera);
}

animate();
