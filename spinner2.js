//refactored spinner1.js

const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

let timer = 100;
for (let str of arr) {
  setTimeout(() => {
    process.stdout.write(str);
  }, timer);
  timer = timer + 200;
}

//original code from spinner1.js

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|   ');
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|   ');
// }, 1700);

//https://github.com/eegyudt/spinner