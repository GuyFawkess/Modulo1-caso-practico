function telefono (id) {
    const element = document.getElementById(id),
      text = element.innerText.split("");
    element.innerText = "";

    text.forEach((letter) => {
      const span = document.createElement("span");

      span.className = "num";

      span.innerText = letter;

      element.appendChild(span);
    });
  };

telefono("number");