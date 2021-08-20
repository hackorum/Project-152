AFRAME.registerComponent("lamborghini", {
  schema: {
    clicks: {
      type: "number",
      default: 0,
    },
  },
  update: function () {
    window.addEventListener("click", (e) => {
      this.data.clicks += 1;
      if (this.data.clicks == 1) {
        this.el.setAttribute("rotation", { x: 0, y: 45, z: 0 });
      } else if (this.data.clicks == 2) {
        this.el.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      } else if (this.data.clicks == 3) {
        this.el.setAttribute("rotation", { x: 0, y: 135, z: 0 });
      } else if (this.data.clicks == 4) {
        this.el.setAttribute("rotation", { x: 0, y: 180, z: 0 });
      } else if (this.data.clicks == 5) {
        this.el.setAttribute("rotation", { x: 0, y: 225, z: 0 });
      } else if (this.data.clicks == 6) {
        this.el.setAttribute("rotation", { x: 0, y: 270, z: 0 });
      } else if (this.data.clicks == 7) {
        this.el.setAttribute("rotation", { x: 0, y: 315, z: 0 });
      } else if (this.data.clicks == 8) {
        this.el.setAttribute("rotation", { x: 0, y: 360, z: 0 });
        this.data.clicks = 0;
      }
    });
  },
});
