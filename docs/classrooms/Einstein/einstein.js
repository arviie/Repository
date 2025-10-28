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
      await typeWriter("Hello and welcome to Grade 10 - Einstein!", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 2) {
      isTyping = true;
      await typeWriter("I am Ma'am Emeleen Ledesma, your English teacher and adviser of this class.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 3) {
      isTyping = true;
      await typeWriter("Here's a fact about this school.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 4) {
      isTyping = true;
      await typeWriter("After 17 years, LaSci now has its first official school hymn, created under the leadership of Dr. Myrene S. Aunario.", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 5) {
      isTyping = true;
      await typeWriter("Marking a meaningful step in building the school’s identity and spirit.", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 6) {
      isTyping = true;
      await typeWriter("Ano po?", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 7) {
      isTyping = true;
      await typeWriter("Here's another fact.", textEl, 15);
      isTyping = false;
    }


    else if (clickCount === 8) {
      isTyping = true;
      await typeWriter("After 15 years, LaSci finally has its own land and building—a big step in the school’s growth and progress.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 9) {
      isTyping = true;
      await typeWriter("Thank you for listening. See you around!", textEl, 25);
      isTyping = false;
    }


  else if (clickCount === 10) {
        box.style.display = "none";
      textEl.textContent = "";
    }

});
});
