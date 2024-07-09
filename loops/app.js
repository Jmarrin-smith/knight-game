let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
  }

const points = 0;

const fpoint = document.querySelector("+5p");


fpoint.addEventListener("click",() => {
    for (let i = 0; i < 5; i++) {
        points=points+1
      }
console.log(points)
  });

const opoint = document.querySelector("+1p")

opoint.addEventListener("click",() => {
    points=points+1
console.log
})

