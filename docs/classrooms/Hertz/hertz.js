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
      await typeWriter("Hello! Welcome to Hertz.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 2) {
      isTyping = true;
      await typeWriter("I'm Sir Joel, the adviser of this class.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 3) {
      isTyping = true;
      await typeWriter("Did you know?", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 4) {
      isTyping = true;
      await typeWriter("LaSci’s Foundation Day is on September 8!", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 5) {
      isTyping = true;
      await typeWriter("The school was established in 2008, and this day marks the start of its journey in providing quality education.", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 6) {
      isTyping = true;
      await typeWriter("It is a meaningful day that highlights LaSci’s growth and achievements over the years.", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 7) {
      isTyping = true;
      await typeWriter("And also...", textEl, 25);
      isTyping = false;
    }


    else if (clickCount === 8) {
      isTyping = true;
      await typeWriter("Did you know that Lasicans actually used to study in Barangay Maitim before moving to its current location in Barangay Puypuy?", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 9) {
      isTyping = true;
      await typeWriter("Isn't that interesting?", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 10) {
      isTyping = true;
      await typeWriter("Alright that's all for now! Feel free to explore this classroom.", textEl, 25);
      isTyping = false;
    }

        else if (clickCount === 11) {
      box.style.display = "none"; 
      textEl.textContent = "";
    }

    else if (clickCount === 12) {
       box.style.display = "block"; 
      isTyping = true;
      await typeWriter("If you want to go back just click the door over there.", textEl, 25);
      isTyping = false;
  }

  else if (clickCount === 13) {
        box.style.display = "none";
      textEl.textContent = "";
    }

});
});
