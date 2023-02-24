//
// Header Animation
//
let intro_head = document.querySelector(".introduction h1").textContent;

let animation = Promise.resolve().then(function resolver() {
  return introAnimation()
    .then(resolver)
});

async function introAnimation() {
  await animateAddChar("H", 1000)
    .then(() => animateAddChar("E", 1000))
    .then(() => animateAddChar("L", 300))
    .then(() => animateAddChar("L", 300))
    .then(() => animateAddChar("I", 200))
    .then(() => animateRemoveChar(800))
    .then(() => animateAddChar("O", 600))
    .then(() => animateAddChar(" ", 100))
    .then(() => animateAddChar("W", 300))
    .then(() => animateAddChar("O", 400))
    .then(() => animateAddChar("E", 200))
    .then(() => animateRemoveChar(500))
    .then(() => animateAddChar("R", 300))
    .then(() => animateAddChar("L", 300))
    .then(() => animateAddChar("D", 300))
    .then(() => animateRemoveChar(2500))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200))
    .then(() => animateRemoveChar(200));
}

function introHeadAddChar(letter) {
  intro_head = intro_head.concat(letter);
  document.querySelector(".introduction h1").textContent = intro_head;
}

function introHeadRemoveChar() {
  intro_head = intro_head.slice(0, -1);
  document.querySelector(".introduction h1").textContent = intro_head;
}

async function animateAddChar(letter, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(introHeadAddChar(letter));
    }, time);
  });
}

async function animateRemoveChar(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(introHeadRemoveChar());
    }, time)
  })
}

//
// ABOUT ME
//
let about_me_state = document.querySelector(".about-me-value");
let about_me_pages = ["education", "work_experience", "skills"];

function aboutMeIter(type) {
  let max = 2;
  let min = 0;
  let count = parseInt(about_me_state.textContent.slice(-2, -1));

  if (type == "next") {
    if (count == max) {
      about_me_state.textContent = "AboutMe[0]";
      switchAboutMe(0);
    }
    if (count != max) {
      about_me_state.textContent = "AboutMe[" + (count + 1) + "]";
      switchAboutMe(count + 1);
    }
  }

  if (type == "previous") {
    if (count == min) {
      about_me_state.textContent = "AboutMe[2]";
      switchAboutMe(2);
    }
    if (count != min) {
      about_me_state.textContent = "AboutMe[" + (count - 1) + "]";
      switchAboutMe(count - 1);
    }
  }
}

function switchAboutMe(number) {
  let pages = document.querySelectorAll(".about-me .about > div");

  pages.forEach((page) => {
    page.style.display = "none";
  });

  pages[number].style.display = "flex";
}
