const animateAbout = () => {
  anime
    .timeline({
      easing: "easeInSine"
    })
    .add({
      targets: "#about .right_wrapper span",
      top: [0, "-100%"],
      duration: 1000,
      begin: () => {
        anime({
          targets: "#about .img2",
          scale: [1.5, 1],
          easing: "easeOutExpo",
          duration: 2000
        });
      }
    })
    .add({
      targets: "#about .heading span",
      left: [0, "100%"],
      duration: 1000,
      offset: "-=500"
    })
    .add({
      targets: "#about .content span",
      left: ["0%", "-100%"],
      duration: 1000,
      offset: "-=500"
    })
    .add({
      targets: "#about .border_deisgn span:nth-child(1)",
      width: [0, "100%"],
      offset: "-=700",
      duration: 500
    })
    .add({
      targets: "#about .border_deisgn span:nth-child(2)",
      height: [0, "100%"],
      offset: "-=400",
      duration: 500
    })
    .add({
      targets: "#about .border_deisgn span:nth-child(3)",
      width: [0, "100%"],
      offset: "-=400",
      duration: 500
    })
    .add({
      targets: "#about .border_deisgn span:nth-child(4)",
      height: [0, "100%"],
      offset: "-=400",
      duration: 500
    })
    .add({
      targets: "#about .side_wrapper div",
      opacity: [0, 1],
      translateX: ["-20%", 0],
      delay: (el, i) => i * 200,
      duration: 100,
      offset: "-=300"
    })
    .add({
      targets: "#about .next_img",
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 100,
      offset: "-=200"
    });
  waypoint.disable();
};

var waypoint = new Waypoint({
  element: document.getElementById("about"),
  handler: animateAbout,
  offset: "50%"
});

document.querySelector("#about .next_img").onclick = () => {
  anime
    .timeline({
      easing: "easeInSine"
    })
    .add({
      targets: "#about .next_img",
      opacity: [1, 0],
      scale: [1, 0],
      duration: 100
    })
    .add({
      targets: "#about .right_wrapper span",
      top: ["-100%", 0],
      duration: 500,
      complete: () => {
        document.querySelector("#about .img2").style.display = "none";
        anime({
          targets: "#about .right_wrapper span",
          top: [0, "100%"],
          duration: 1000,
          easing: "easeInSine",
          begin: () => {
            anime({
              targets: "#about .img1",
              scale: [1.5, 1],
              easing: "easeOutExpo",
              duration: 3000
            });
          }
        });
      }
    })
    .add({
      targets: "#about .border_deisgn span",
      backgroundColor: ["#d5803f", "#F2B6B5"],
      offset: "-=1000"
    })
    .add({
      targets: "#about .heading",
      color: ["#d5803f", "#F2B6B5"],
      offset: "-=1000"
    })
    .add({
      targets: "#about .content span",
      left: ["-100%", "0%"],
      duration: 500,
      offset: "-=200",
      complete: () => {
        document.querySelector("#about .content1").style.opacity = 0;
        document.querySelector("#about .content2").style.opacity = 1;
        anime({
          targets: "#about .content span",
          left: ["0%", "100%"],
          duration: 500,
          easing: "easeInSine"
        });
      }
    });
};
