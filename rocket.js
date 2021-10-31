AFRAME.registerComponent("move", {
  schema: {
    mouseY: {
      type: "number",
      default: 1,
    },
  },

  tick: function () {
    var pos = this.el.getAttribute("position");
    this.data.mouseY = this.data.mouseY + 0.1;
    pos.y = this.data.mouseY;
    this.el.setAttribute("position", {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    });
  },
});

AFRAME.registerComponent("fall_on_click", {
  schema: {
    mouseY: {
      type: "number",
      default: 1,
    },
  },

  tick: function () {
    window.addEventListener("click", (e) => {
      this.data.mouseY = this.data.mouseY - 0.01;
    });

    var pos = this.el.getAttribute("position");
    pos.y = this.data.mouseY;
    this.el.setAttribute("position", {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    });
  },
});
