console.log("hello?");

const memes = ["yee", "im on a boat", "how it feels to chew 5 gum"];

console.log(memes[0]);
console.log(memes[1]);
console.log(memes[2]);

memes[3] = "colour red";

console.log(memes[3]);

memes.pop(3);

console.log(memes);

memes.push("terrible mall commercial");

console.log(memes);

const iterator = memes.values();

for (const value of iterator) {
  console.log(value);
}

console.log(memes.length);

const nums = [5, 71, 3, 82, 2];

console.log(nums);

nums.reverse();

console.log(nums);

nums.sort();

console.log(nums);
