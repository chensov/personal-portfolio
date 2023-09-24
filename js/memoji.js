// Memoji

const tooltip = document.getElementById("thanks");
const btn = document.getElementById("memoji-container");

const overlay = document.getElementById("product-shape");
const container = document.getElementById("memoji-container");
const hoodieColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  overlay.style.fill = "#" + randomColor;
};

container.addEventListener("click", hoodieColor);

function showMessage() {
  tooltip.style.opacity = 1;
  tooltip.style.transform = "translateY(-20px)";
}

function hideMessage() {
  tooltip.style.opacity = 0;
  tooltip.style.transform = "translateY(0px)";
}

btn.addEventListener("click", () => {
  if (tooltip.style.opacity !== 0) {
    showMessage();
    setTimeout("hideMessage()", 1000);
  } else {
    hideMessage();
  }
});

// Magnetic
const lerp = (current, target, factor) =>
  current * (1 - factor) + target * factor;

let mousePosition = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

// ------------------------------------------------------------------------
class MagneticObject {
  constructor(domElement) {
    this.domElement = domElement;
    this.boundingClientRect = this.domElement.getBoundingClientRect();
    this.triggerArea = 200;
    this.interpolationFactor = 0.4;

    this.lerpingData = {
      x: { current: 0, target: 0 },
      y: { current: 0, target: 0 },
    };

    this.render();
    this.resize();
  }

  resize() {
    window.addEventListener("resize", () => {
      this.boundingClientRect = this.domElement.getBoundingClientRect();
    });
  }

  render() {
    const distanceFromMouseToCenter = calculateDistance(
      mousePosition.x,
      mousePosition.y,
      this.boundingClientRect.left + this.boundingClientRect.width / 2,
      this.boundingClientRect.top + this.boundingClientRect.height / 2
    );

    let targetHolder = { x: 0, y: 0 };

    if (distanceFromMouseToCenter < this.triggerArea) {
      this.domElement.classList.add("focus");
      targetHolder.x =
        (mousePosition.x -
          (this.boundingClientRect.left + this.boundingClientRect.width / 2)) *
        0.1;
      targetHolder.y =
        (mousePosition.y -
          (this.boundingClientRect.top + this.boundingClientRect.height / 2)) *
        0.1;
    } else {
      this.domElement.classList.remove("focus");
    }
    this.lerpingData["x"].target = targetHolder.x;
    this.lerpingData["y"].target = targetHolder.y;

    for (const item in this.lerpingData) {
      this.lerpingData[item].current = lerp(
        this.lerpingData[item].current,
        this.lerpingData[item].target,
        this.interpolationFactor
      );
    }

    this.domElement.style.transform = `translate(${this.lerpingData["x"].current}px, ${this.lerpingData["y"].current}px)`;

    window.requestAnimationFrame(() => this.render());
  }
}

const button = document.querySelector(".circle");
new MagneticObject(button);
