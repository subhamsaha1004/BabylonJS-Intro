var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), scene);
var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 100, 100), scene);
var sphere = BABYLON.Mesh.CreateSphere("Sphere", 16, 3, scene);

// Render loop
var renderLoop = function () {
    scene.render();
};

// Launch render loop
engine.runRenderLoop(renderLoop);

var alpha = 0;
sphere.scaling.x = 0.5;
sphere.scaling.z = 1.5;
scene.beforeRender = function() {
    sphere.rotation.x = alpha;
    sphere.rotation.y = alpha;

    alpha += 0.01;
};
