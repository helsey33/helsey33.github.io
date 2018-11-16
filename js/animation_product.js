let pdt1 = true;
let pdt2 = true;
let pdt3 = true;
let pdt4 = true;

document.querySelector(".main1").onclick = () => {
  if (pdt1) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".main2,.main3,.main4",
        scale: [1, 0],
        opacity: [1, 0],
        translateX: [0, 300],
        delay: (el, i) => i * 50,
        duration: 1000
      })
      .add({
        targets: ".pd1_side",
        opacity: [0, 1],
        translateX: [-300, 0],
        delay: (el, i) => i * 100,
        offset: "-=1000",
        duration: 1000
      })
      .add({
        targets: ".title1",
        opacity: [0, 1],
        translateY: [-50, 0],
        offset: "-=1000",
        duration: 1000
      })
      .add({
        targets: ".back_img",
        opacity: [0, 1],
        rotate: [0, 90],
        translateX: [50, 0],
        offset: "-=1000"
      });
    pdt1 = false;
  }
};

document.querySelector(".main2").onclick = () => {
  if (pdt2) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".main1,.main3,.main4",
        scale: [1, 0],
        opacity: [1, 0],
        translateX: [0, 300],
        delay: (el, i) => i * 50,
        duration: 1000
      })
      .add({
        targets: ".main2",
        translateX: [0, "-103%"],
        offset: "-=1000"
      })
      .add({
        targets: ".pd2_side",
        opacity: [0, 1],
        translateX: [-300, 0],
        delay: (el, i) => i * 50,
        offset: "-=700",
        duration: 1000
      })
      .add({
        targets: ".title2",
        opacity: [0, 1],
        translateY: [-50, 0],
        offset: "-=500"
      })
      .add({
        targets: ".back_img",
        opacity: [0, 1],
        rotate: [0, 90],
        translateX: [50, 0],
        offset: "-=1000"
      });
    pdt2 = false;
  }
};

document.querySelector(".main3").onclick = () => {
  if (pdt3) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".main1,.main2,.main4",
        scale: [1, 0],
        opacity: [1, 0],
        translateX: [0, 300],
        delay: (el, i) => i * 50,
        duration: 1000
      })
      .add({
        targets: ".main3",
        translateX: [0, "-206%"],
        offset: "-=1000"
      })
      .add({
        targets: ".pd3_side",
        opacity: [0, 1],
        translateX: [-300, 0],
        delay: (el, i) => i * 50,
        offset: "-=700",
        duration: 1000
      })
      .add({
        targets: ".title3",
        opacity: [0, 1],
        translateY: [-50, 0],
        offset: "-=500"
      })
      .add({
        targets: ".back_img",
        opacity: [0, 1],
        rotate: [0, 90],
        translateX: [50, 0],
        offset: "-=1000"
      });
    pdt3 = false;
  }
};

document.querySelector(".main4").onclick = () => {
  if (pdt4) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".main1,.main2,.main3",
        scale: [1, 0],
        opacity: [1, 0],
        translateX: [0, 300],
        delay: (el, i) => i * 50,
        duration: 1000
      })
      .add({
        targets: ".main4",
        translateX: [0, "-309%"],
        offset: "-=1000"
      })
      .add({
        targets: ".pd4_side",
        opacity: [0, 1],
        translateX: [-300, 0],
        delay: (el, i) => i * 50,
        offset: "-=700",
        duration: 1000
      })
      .add({
        targets: ".title4",
        opacity: [0, 1],
        translateY: [-50, 0],
        offset: "-=500"
      })
      .add({
        targets: ".back_img",
        opacity: [0, 1],
        rotate: [0, 90],
        translateX: [50, 0],
        offset: "-=1000"
      });
    pdt4 = false;
  }
};

document.querySelector(".back_img").onclick = () => {
  if (!pdt1) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".back_img",
        opacity: [1, 0],
        rotate: [90, 0],
        translateX: [0, 50]
      })
      .add({
        targets: ".title1",
        opacity: [1, 0],
        translateY: [0, -50],
        duration: 1000,
        offset: "-=1000"
      })
      .add({
        targets: ".pd1_side",
        opacity: [1, 0],
        translateX: [0, -100],
        delay: (el, i) => i * 50,
        offset: "-=500",
        duration: 1000
      })
      .add({
        targets: ".main2,.main3,.main4",
        scale: [0, 1],
        opacity: [0, 1],
        translateX: [300, 0],
        delay: (el, i) => i * 50,
        duration: 1000,
        offset: "-=1000"
      });
    pdt1 = true;
  } else if (!pdt2) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".back_img",
        opacity: [1, 0],
        rotate: [90, 0],
        translateX: [0, 50]
      })
      .add({
        targets: ".title2",
        opacity: [1, 0],
        translateY: [0, -50],
        duration: 1000,
        offset: "-=1000"
      })
      .add({
        targets: ".pd2_side",
        opacity: [1, 0],
        translateX: [0, -100],
        delay: (el, i) => i * 50,
        offset: "-=500",
        duration: 1000
      })
      .add({
        targets: ".main2",
        translateX: ["-103%", 0],
        offset: "-=1000",
        duration: 1000
      })
      .add({
        targets: ".main1,.main3,.main4",
        scale: [0, 1],
        opacity: [0, 1],
        translateX: [300, 0],
        delay: (el, i) => i * 50,
        duration: 1000,
        offset: "-=1000"
      });
    pdt2 = true;
  } else if (!pdt3) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".back_img",
        opacity: [1, 0],
        rotate: [90, 0],
        translateX: [0, 50]
      })
      .add({
        targets: ".title3",
        opacity: [1, 0],
        translateY: [0, -50],
        duration: 1000,
        offset: "-=1000"
      })
      .add({
        targets: ".pd3_side",
        opacity: [1, 0],
        translateX: [0, -100],
        delay: (el, i) => i * 50,
        offset: "-=500",
        duration: 1000
      })
      .add({
        targets: ".main3",
        translateX: ["-206%", 0],
        offset: "-=1000",
        duration: 1000
      })
      .add({
        targets: ".main1,.main2,.main4",
        scale: [0, 1],
        opacity: [0, 1],
        translateX: [300, 0],
        delay: (el, i) => i * 50,
        duration: 1000,
        offset: "-=1000"
      });
    pdt3 = true;
  } else if (!pdt4) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".back_img",
        opacity: [1, 0],
        rotate: [90, 0],
        translateX: [0, 50]
      })
      .add({
        targets: ".title4",
        opacity: [1, 0],
        translateY: [0, -50],
        duration: 1000,
        offset: "-=1000"
      })
      .add({
        targets: ".pd4_side",
        opacity: [1, 0],
        translateX: [0, -100],
        delay: (el, i) => i * 50,
        offset: "-=500",
        duration: 1000
      })
      .add({
        targets: ".main4",
        translateX: ["-309%", 0],
        offset: "-=1000",
        duration: 1000
      })
      .add({
        targets: ".main1,.main2,.main3",
        scale: [0, 1],
        opacity: [0, 1],
        translateX: [300, 0],
        delay: (el, i) => i * 50,
        duration: 1000,
        offset: "-=1000"
      });
    pdt4 = true;
  }
};

const animateProduct = () => {
  anime({
    targets: ".main_wrapper",
    opacity: [0, 1],
    translateY: [50, 0],
    delay: (el, i) => i * 100,
    duration: 1000,
    easing: "easeOutExpo"
  });
  waypoint5.disable();
};

var waypoint5 = new Waypoint({
  element: document.getElementById("product"),
  handler: animateProduct,
  offset: "50%"
});
