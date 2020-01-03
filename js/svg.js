let media1200 = window.matchMedia("(max-width:1200px)");

// function animateDevices() {
//   anime
//     .timeline({
//       easing: "easeOutExpo",
//       duration: 1500
//     })
//     .add({
//       targets: "#c_x5F_bez_x5F_g,#c_x5F_stand_x5F_g",
//       opacity: [0, 1],
//       translateY: [-30, 0],
//       delay: (el, i) => i * 100
//     })
//     .add({
//       targets: "#c_x5F_border",
//       y: [240, 120],
//       scaleY: [0, 1],
//       offset: "-=1300"
//     })
//     .add({
//       targets: "#c_x5F_bg",
//       y: [200, 123],
//       scaleY: [0, 1],
//       offset: "-=1200"
//     })
//     .add({
//       targets: "#c_x5F_screen path",
//       scale: [1.05, 1],
//       opacity: [0, 0.5],
//       delay: (el, i) => i * 100,
//       offset: "-=800",
//       duration: 1000
//     })
//     .add({
//       targets: "#c_x5F_power",
//       scale: [0, 1],
//       offset: "-=1500",
//       duration: 1000
//     })
//     .add({
//       targets: "#c_x5F_stand_x5F_g",
//       scale: [1, 0],
//       duration: 1000,
//       offset: "-=1000"
//     })
//     .add({
//       targets: "#c_x5F_power",
//       scale: [1, 0],
//       offset: "-=700",
//       duration: 500
//     })
//     .add({
//       targets: "#c_x5F_screen",
//       scale: [1, 0.8],
//       offset: "-=400"
//     })
//     .add({
//       targets: "#c_x5F_screen path,#c_x5F_bg",
//       scaleY: [1, 0.93],
//       scaleX: [1, 0.95],
//       offset: "-=1500"
//     })
//     .add({
//       targets: "#c_x5F_border",
//       fill: "#F7F7F7",
//       offset: "-=1500"
//     })
//     .add({
//       targets: "#c_x5F_bez_x5F_g",
//       scaleX: [1, 0.9],
//       scaleY: [1, 0.3],
//       offset: "-=1500"
//     })
//     .add({
//       targets: "#c_x5F_bez_x5F_g",
//       opacity: [1, 0],
//       offset: "-=1000"
//     })
//     .add({
//       targets: "#c_x5F_screen",
//       scaleX: [0.8, 0.7],
//       scaleY: [0.8, 1.2],
//       offset: "-=1000"
//     })
//     .add({
//       targets: "#c_x5F_border,#c_x5F_bg",
//       rx: "5px",
//       ry: "5px",
//       offset: "-=1200"
//     })
//     .add({
//       targets: "#c_x5F_screen",
//       scaleX: [0.7, 0.4],
//       scaleY: [1.2, 1.3],
//       offset: "-=1000"
//     })
//     .add({
//       targets: "#c_x5F_screen path",
//       scale: 0.9,
//       offset: "-=1500"
//     })
//     .add({
//       targets: "#c_x5F_bg",
//       rx: 0,
//       ry: 0,
//       offset: "-=1500",
//       complete: () => {
//         bringInFour();
//       }
//     });
// }

function bringInFour() {
  anime
    .timeline({
      easing: "easeOutSine"
    })
    .add({
      targets: ".four",
      translateX: ["-100%"]
    })
    .add({
      targets: "#XMLID_8_",
      width: [0, 681.1],
      offset: "-=500"
    })
    .add({
      targets: "#XMLID_9_",
      height: [0, 427.2],
      offset: "-=1000"
    })
    .add({
      targets: "#XMLID_6_",
      width: [0, 681.1],
      offset: "-=1000"
    })
    .add({
      targets: "#XMLID_13_ path",
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: (el, i) => i * 50
    })
    .add({
      targets: "#XMLID_13_ path",
      fill: ["rgba(43, 43, 43,0)", "rgba(43, 43, 43,1)"],
      duration: 500
    })
    .add({
      targets: "#XMLID_12_ path",
      fill: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
      duration: 500,
      offset: "-=500"
    })
    .add({
      targets: ".home4 .content div",
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: (el, i) => i * 50,
      offset: "-=500",
      duration: 200,
      begin: () => {
        document.querySelector("body").style.overflowY = "scroll";
      }
    });
}
