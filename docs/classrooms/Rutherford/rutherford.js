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
      await typeWriter("Hey, I’m Sir Edmar, one of the math teachers here at LaSci. I am also the adviser of Grade - 9 Rutherford", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 2) {
      isTyping = true;
      await typeWriter("You’ve probably heard this before, but our school is  known for producing UPCAT passers year after year.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 3) {
      isTyping = true;
      await typeWriter("It’s something we’re proud of because it shows how much effort our students put into reaching their goals.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 4) {
      isTyping = true;
      await typeWriter("Even though LaSci was established on September 8, 2008, we just inaugurated on November 21, 2023", textEl, 15);
      isTyping = false;
    }

    else if (clickCount === 5) {
      isTyping = true;
      await typeWriter("It was led by the former governor of Laguna, Ramil Hernandez, together with his wife, Ruth Hernandez.", textEl, 15);
      isTyping = false;
    }


    else if (clickCount === 6) {
      isTyping = true;
      await typeWriter("And of course, it’s not just about academics here.", textEl, 15);
      isTyping = false;
    }


    else if (clickCount === 7) {
      isTyping = true;
      await typeWriter("LaSci’s also pretty active in extracurriculars. We’ve got journalism, radio broadcasting, and sports like volleyball, futsal, basketball, table tennis, and a lot more.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 8) {
      isTyping = true;
      await typeWriter("So yeah, whether you’re into studying, competing, or creating, there’s always something for you here at LaSci.", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 9) {
        isTyping = true;
        await typeWriter("That's probably all for now, goodbye.", textEl, 25);
        isTyping = false;
    }

    else if (clickCount === 10) {
        box.style.display = "none";
        textEl.textContent = "";
    }
    else if (clickCount === 11) {
      box.style.display = "block";
      isTyping = true;
      await typeWriter("Di baga?", textEl, 25);
      isTyping = false;
    }

    else if (clickCount === 12) {
      box.style.display = "none";
      textEl.textContent = "";
    }
});
});
