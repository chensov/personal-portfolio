"use strict";

const btn = document.getElementById("button");
const paperPlane = document.getElementById("paper-plane");

// retrieve the element

// reset the transition by...
btn.addEventListener(
  "click",
  function (e) {
    e.preventDefault;

    // -> removing the class
    paperPlane.classList.remove("run-animation-plane");

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
    // element.offsetWidth = element.offsetWidth;

    void paperPlane.offsetWidth;

    // -> and re-adding the class
    paperPlane.classList.add("run-animation-plane");
  },
  false
);
