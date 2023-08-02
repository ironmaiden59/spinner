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
//   process.stdout.write('\r\|   \n'); 
// }, 900);

let spinner = ['\r|   ','\r/   ', '\r-   ', '\r\\   ', '\r\|   \n'];

let delay = 100;

for (const char of spinner) {
  
  setTimeout(() => {
    process.stdout.write(char);
    
  }, delay)
  delay += 200
}