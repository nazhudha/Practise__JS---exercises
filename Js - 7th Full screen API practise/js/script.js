console.log('test working')

const button = document.querySelector('button')
const fullScreen = document.querySelector('div')
const fsSpan = document.querySelector('span')

// LONGER version ==================

button.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fsSpan.innerHTML = ' Full Screen Now'
    } else {
        document.exitFullscreen();
        fsSpan.innerHTML = ' No longer Full Screen'
    }})


// SHORT version

// button.addEventListener('click', () => {
//     button.requestFullscreen()})


// FUNCTION FULL SCREEN ============

async function goFullScreen() {
    document.getElementById("fullscreen")
      .requestFullscreen()
      .then((res) => {
         console.log("Went full screen");
      })
      .catch((err) => {
         console.log("Fullscreen error: ", err);
      });
  }
  
  async function handleExitFullScreen() {
    document.exitFullscreen()
      .then((res) => {
         console.log("Exit full screen success");
      })
      .catch((err) => {
         console.log("Fullscreen error: ", err);
      });
  }