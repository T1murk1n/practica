const input = document.getElementById("phone");

input.addEventListener("input", onInput);
input.addEventListener("keydown", onKeyDown);

function getDigits(value) {
  return value.replace(/\D/g, "").replace(/^7/, ""); // удаляем все кроме цифр, и первую 7
}

function formatPhone(digits) {
  const template = "+7 (___) ___-__-__";
  let result = "";
  let digitIndex = 0;

  for (let i = 0; i < template.length; i++) {
    if (template[i] === "_") {
      if (digitIndex < digits.length) {
        result += digits[digitIndex++];
      } else {
        result += "_";
      }
    } else {
      result += template[i];
    }
  }

  return result;
}

function onInput(e) {
  const rawDigits = getDigits(input.value);
  input.value = formatPhone(rawDigits);
  setCursor();
}

function onKeyDown(e) {
  if (e.key === "Backspace") {
    e.preventDefault();
    const rawDigits = getDigits(input.value).slice(0, -1); // удаляем последнюю цифру
    input.value = formatPhone(rawDigits);
    setCursor();
  }
}

function setCursor() {
  setTimeout(() => {
    const pos = input.value.indexOf("_");
    input.setSelectionRange(pos === -1 ? input.value.length : pos, pos === -1 ? input.value.length : pos);
  });
}

// Начальная маска при загрузке
input.value = "+7 (___) ___-__-__";
setCursor();