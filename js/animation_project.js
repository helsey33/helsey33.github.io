const animateProject = () => {
  anime
    .timeline({
      easing: "easeOutExpo",
      duration: 1000
    })
    .add({
      targets: "#projects .img_wrapper",
      scale: [1.2, 1],
      opacity: [0, 1],
      delay: (el, i) => i * 100
    });
  waypoint5.disable();
};

var waypoint5 = new Waypoint({
  element: document.getElementById("projects"),
  handler: animateProject,
  offset: "50%"
});
