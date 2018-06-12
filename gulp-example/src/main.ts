// import { sayHello } from "./greet";
import { sayHello } from "./var";

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello("greeting", "Koooooo");
