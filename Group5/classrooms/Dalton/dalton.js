document.addEventListener("DOMContentLoaded", () => {
  const sir = document.getElementById("sir");
  const box = document.getElementById("box");
  const textEl = document.getElementById("text");
  let clickCount = 0;
  let isTyping = false;

  // typewriter effect function
  function typeWriter(message, el, speed = 30) {
    return new Promise((resolve) => {
      el.textContent = "";
      let i = 0;

      function step() {
        if (i < message.length) {
          el.textContent += message.charAt(i);
          i++;
          setTimeout(step, speed);
        } else {
          resolve();
        }
      }

      step();
    });
  }

  sir.addEventListener("click", async () => {
    if (isTyping) return; // prevent click while typing
    clickCount++;

    if (clickCount === 1) {
      box.style.display = "block"; 
      isTyping = true;
      await typeWriter("Welcome to Grade 9 - Dalton.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 2) {
      isTyping = true;
      await typeWriter("I am Ma'am Dechitan, your AP teacher and adviser of Dalton.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 3) {
      isTyping = true;
      await typeWriter("Do you want to know a fact about LaSci?", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 4) {
      isTyping = true;
      await typeWriter("Many LaSci alumni graduate from top universities and go on to become engineers, doctors, and other professionals.", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 5) {
      isTyping = true;
      await typeWriter(" This shows the quality of education that LaSci provides.", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 6) {
      isTyping = true;
      await typeWriter("And did you know?", textEl, 15);
      isTyping = false;
    }


    else if (clickCount === 7) {
      isTyping = true;
      await typeWriter("Since Sir Rogelio Yu have retired this year, I am the last remaining pioneer of this school", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 8) {
      isTyping = true;
      await typeWriter("I have been a teacher at this school ever since it was established.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 9) {
        isTyping = true;
        await typeWriter("LaSci just had another achievement this year!", textEl, 25);
        isTyping = false;
    }

    else if (clickCount === 10) {
        isTyping = true;
        await typeWriter("In this year's district meet, our school was 2nd place in the district meet of the whole Bay", textEl, 25);
        isTyping = false;
    }

    else if (clickCount === 11) {
        isTyping = true;
        await typeWriter("That's it for now. See you when I see you", textEl, 25);
        isTyping = false;
    }

  else if (clickCount === 12) {
        box.style.display = "none";
        textEl.textContent = "";
    }

});
});
