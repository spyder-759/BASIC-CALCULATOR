const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      expression = "";
      display.textContent = "0";
    } else if (value === "=") {
      try {
        // Replace scientific symbols for eval
        let sanitized = expression
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/π/g, Math.PI)
          .replace(/e/g, Math.E);

        display.textContent = eval(sanitized);
        expression = display.textContent;
      } catch {
        display.textContent = "Error";
        expression = "";
      }
    } else if (value === "+/-") {
      if (expression.startsWith("-")) {
        expression = expression.slice(1);
      } else {
        expression = "-" + expression;
      }
      display.textContent = expression;
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});
