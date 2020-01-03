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
});
