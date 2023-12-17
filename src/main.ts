import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { LumaSplatsThree } from "@lumaai/luma-web";

import "./style.scss";

const main = async () => {
  const renderCanvas = document.getElementById(
    "renderCanvas"
  ) as HTMLCanvasElement | null;
  if (!renderCanvas) {
    return;
  }

  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new WebGLRenderer({ antialias: true, canvas: renderCanvas });
  renderer.setClearColor(0xffffff);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const controls = new OrbitControls(camera, renderer.domElement);

  const splats = new LumaSplatsThree({
    source: "https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff",
  });
  scene.add(splats);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
  };
  animate();
};

main();

