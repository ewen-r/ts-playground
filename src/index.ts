

const date = new Date();
console.log("Program running:", date.toLocaleDateString(), date.toLocaleTimeString());


/** Hello World function.
  * @param {string} name Your name.
*/
export function hello(name: string = 'World') {
  console.log(`Hello ${name}!`);
}


// Run hello..
hello('Ewen');
