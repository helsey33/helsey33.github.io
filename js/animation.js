if (screen.width <= 699) {
  document.location = 'videos.html';
}
window.addEventListener('load', () => {
  document.querySelector('body').classList.remove('loading');

  anime
    .timeline({
      easing: 'easeOutExpo'
    })
    .add({
      targets: '.home-container .one',
      top: ['-100%', 0],
      duration: 2500
    })
    .add({
      targets: '.home1 .text',
      opacity: [0, 1],
      translateY: [40, 0],
      offset: '-=1000'
    })
    .add({
      targets: '.home1 .text',
      opacity: [1, 0],
      translateY: [0, -40],
      complete: anim => {
        document.querySelector('.home1 .text').remove();
      }
    })
    .add({
      targets: '.emo h1',
      translateY: [300, 0],
      offset: '-=1000'
    })
    .add({
      targets: '.home-container .two',
      top: ['-100%', 0],
      duration: 2500,
      offset: '+=500'
    })
    .add({
      targets: '.content-up, .content-down span',
      opacity: [0, 1],
      translateY: [100, 0],
      offset: '-=2000',
      delay: (el, i) => i * 200,
      begin: anim => {
        document.querySelector(
          '.content-down span'
        ).style.webkitAnimationPlayState = 'running';
      }
    })
    .add({
      targets: '.content-down .line',
      width: [0, '25vw'],
      offset: '-=300',
      begin: anim => {
        document.querySelector('.devices svg').style.opacity = 1;
        animateDevices();
      }
    });

  document.querySelector('.knowMore').onclick = () => {
    anime
      .timeline({
        easing: 'easeOutSine'
      })
      .add({
        targets: '.three',
        scale: [1, 0],
        opacity: [1, 0]
      })
      .add({
        targets: '.four',
        right: ['-100%', 0],
        offset: '-=1000'
      })
      .add({
        targets: '.home4',
        scale: [1.5, 1],
        offset: '-=1000'
      })
      .add({
        targets: '#XMLID_8_',
        width: [0, 681.1],
        offset: '-=500'
      })
      .add({
        targets: '#XMLID_9_',
        height: [0, 427.2],
        offset: '-=1000'
      })
      .add({
        targets: '#XMLID_6_',
        width: [0, 681.1],
        offset: '-=1000'
      })
      .add({
        targets: '#XMLID_13_ path',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: (el, i) => i * 50
      })
      .add({
        targets: '#XMLID_13_ path',
        fill: ['rgba(43, 43, 43,0)', 'rgba(43, 43, 43,1)'],
        duration: 500
      })
      .add({
        targets: '#XMLID_12_ path',
        fill: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
        duration: 500,
        offset: '-=500'
      })
      .add({
        targets: '.home4 .content div',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: (el, i) => i * 50,
        offset: '-=500',
        duration: 200,
        complete: () => {
          document.querySelector('body').style.overflow = 'visible';
        }
      });
  };

  document.querySelector('.home4').onmousemove = e => {
    let xPos = e.clientX / window.innerWidth - 0.5;
    let yPos = e.clientY / window.innerHeight - 0.5;
    anime({
      targets: '.home4 svg',
      rotateX: [10 * yPos],
      rotateY: [10 * xPos],
      duration: 50
    });
  };
});

let active = false;
document.getElementById('hamburger').onclick = () => {
  document.getElementById('hamburger').classList.toggle('active');
  if (!active) {
    anime
      .timeline({
        easing: 'easeOutExpo'
      })
      .add({
        targets: '#menu',
        right: ['-21%', 0],
        duration: 1000
      })
      .add({
        targets: '#menu li',
        translateX: [20, 0],
        opacity: [0, 1],
        delay: (el, i) => i * 100,
        offset: '-=800'
      });
  } else {
    anime({
      targets: '#menu',
      easing: 'easeOutExpo',
      right: [0, '-21%'],
      duration: 1000
    });
  }

  active = !active;
};
