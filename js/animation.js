window.addEventListener("load", () => {
  document.querySelector("body").classList.remove("loading");

  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: ".home-container .one",
      top: ["-100%", 0],
      duration: 2500
    })
    .add({
      targets: ".home1 .text",
      opacity: [0, 1],
      translateY: [40, 0],
      offset: "-=1000"
    })
    .add({
      targets: ".home1 .text",
      opacity: [1, 0],
      translateY: [0, -40],
      complete: anim => {
        document.querySelector(".home1 .text").remove();
      }
    })
    .add({
      targets: ".emo h1",
      translateY: [300, 0],
      offset: "-=1000",
      complete: anim => {
        bringInFour();
      }
    });

  document.querySelector(".home4").onmousemove = e => {
    let xPos = e.clientX / window.innerWidth - 0.5;
    let yPos = e.clientY / window.innerHeight - 0.5;
    anime({
      targets: ".home4 svg",
      rotateX: [10 * yPos],
      rotateY: [10 * xPos],
      duration: 50
    });
  };
});

let active = false;
document.getElementById("hamburger").onclick = () => {
  document.getElementById("hamburger").classList.toggle("active");
  if (!active) {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: "#menu",
        right: ["-21%", 0],
        duration: 1000
      })
      .add({
        targets: "#menu li",
        translateX: [20, 0],
        opacity: [0, 1],
        delay: (el, i) => i * 100,
        offset: "-=800"
      });
  } else {
    anime({
      targets: "#menu",
      easing: "easeOutExpo",
      right: [0, "-21%"],
      duration: 1000
    });
  }

  active = !active;
};
