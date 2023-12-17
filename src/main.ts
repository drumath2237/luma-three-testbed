import "./style.scss";

const main = async () => {
  const renderCanvas = document.getElementById(
    "renderCanvas"
  ) as HTMLCanvasElement | null;
  if (!renderCanvas) {
    return;
  }

  console.log("hi");
};

main();

