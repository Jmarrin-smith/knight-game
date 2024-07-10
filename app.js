const wk = {
  a: 10,
  h: 100,
  d: 5,
};

const bk = {
  a: 50,
  h: 100,
  d: 5,
};

function bkat() {
  ra = bk.a - wk.d;
  wk.h = wk.h - ra;
  //  console.log("black knight health " + bk.h);
  //  console.log("white knight health " + wk.h);
  if (wk.h < 0) {
    console.log("white knight falls, black knight wins");
  } else {
    console.log("black knight health " + bk.h);
    console.log("white knight health " + wk.h);
  }
}

function wkat() {
  ra = wk.a - bk.d;
  bk.h = bk.h - ra;
  //  console.log("black knight health " + bk.h);
  //  console.log("white knight health " + wk.h);
  if (bk.h < 0) {
    console.log("black knight falls, white knight wins");
  } else {
    console.log("black knight health " + bk.h);
    console.log("white knight health " + wk.h);
  }
}

const wka = document.getElementById("wka");

wka.addEventListener("click", wkat);

const bka = document.getElementById("bka");

bka.addEventListener("click", bkat);

while (bk.h < 0) {
  console.log("white knight has slain their foe");
  bk.h = bk.h + 100;
}

while (wk.h < 0) {
  console.log("black knight has slain their foe");
  wk.h = wk.h + 100;
}
