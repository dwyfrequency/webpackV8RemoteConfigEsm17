import firebase from "firebase/app";
import firebaseConfig from "../hidden/firebaseConfig";
import "firebase/remote-config";

firebase.initializeApp(firebaseConfig);
const remoteConfig = firebase.remoteConfig();
console.log(remoteConfig.settings);

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    40K Apr 19 17:03 dist/main.js
// Run `yarn run build`
// Run `ls -lh dist/main.js` to get the above
