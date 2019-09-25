const animateWeb = () => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: ".web_design .img_container",
      bottom: ["-100%", 0],
      scale: [1.4, 1],
      duration: 2000
    })
    .add({
      targets: ".web_design .line_wrapper",
      width: media1200.matches ? [0, "80%"] : [0, "40%"],
      offset: "-=1000",
      complete: () => {
        anime({
          targets: document.querySelector(".web_design .new_think"),
          opacity: [0, 1],
          translateY: [10, 0],
          easing: "easeOutExpo",
          duration: 500
        });
      }
    })
    .add({
      targets: ".web_design .letters",
      translateX: [30, 0],
      opacity: [0, 1],
      offset: "-=700"
    })
    .add({
      targets: ".web_design .de",
      opacity: [0, 1],
      translateY: [50, 0],
      offset: "-=500"
    });
  waypoint2.disable();
};

var waypoint2 = new Waypoint({
  element: document.querySelector(".web_design"),
  handler: animateWeb,
  offset: "50%"
});

document.querySelector(".dNd").onmousemove = e => {
  let xPos = e.clientX / window.innerWidth - 0.5;
  let yPos = e.clientY / window.innerHeight - 0.5;
  anime({
    targets: "#circ1,#tri2,#rect1",
    translateY: [15 * yPos],
    translateX: [15 * xPos],
    duration: 50
  });
  anime({
    targets: "#circ2,#tri1",
    translateY: [25 * -yPos],
    translateX: [25 * -xPos],
    duration: 50
  });
};

const animatedNd = () => {
  anime({
    targets: ".dNd .content",
    opacity: [0, 1],
    translateX: [50, 0],
    delay: (el, i) => i * 300,
    easing: "easeOutExpo",
    duration: 2000
  });
  waypoint3.disable();
};

var waypoint3 = new Waypoint({
  element: document.querySelector(".dNd"),
  handler: animatedNd,
  offset: "50%"
});

const animateMedia = () => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: ".media .img_container",
      bottom: ["-100%", 0],
      scale: [1.3, 1],
      duration: 2000
    })
    .add({
      targets: ".media .line",
      width: media1200.matches ? [0, "80%"] : [0, "50%"],
      offset: "-=1500"
    })
    .add({
      targets: ".media .heading, .media .content",
      translateX: [-30, 0],
      opacity: [0, 1],
      duration: 1000,
      offset: "-=1200",
      delay: (el, i) => i * 200
    })
    .add({
      targets: ".media .me",
      opacity: [0, 1],
      translateY: [30, 0],
      offset: "-=700"
    });
  waypoint4.disable();
};

var waypoint4 = new Waypoint({
  element: document.querySelector(".media"),
  handler: animateMedia,
  offset: "50%"
});

const animatePort = () => {
  anime({
    targets: ".slide--layout-1 .slide__figure",
    translateY: [30, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => i * 100
  });
  waypoint6.disable();
};

var waypoint6 = new Waypoint({
  element: document.querySelector("#portfolio"),
  handler: animatePort,
  offset: "50%"
});

const animateFooter = () => {
  anime({
    targets: ".fEle",
    easing: "easeOutExpo",
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 1000,
    delay: (el, i) => i * 100
  });
  waypoint7.disable();
};

var waypoint7 = new Waypoint({
  element: document.querySelector("#footer"),
  handler: animateFooter,
  offset: "60%"
});
