const input = document.querySelector('#input');
const output = document.querySelector('#convertedunit');
const unit = document.querySelector('#unitconverter');
const button = document.querySelector('#submit-button');

button.addEventListener('click', function (event){
  event.preventDefault();
  if (unit.value === 'meters') {
    output.textContent = input.value * 1 + " Meters";
  } else if (unit.value === 'centi-meters') {
    output.textContent = input.value * 100 + " Centi-meters";
  } else if (unit.value === 'inches') {
    output.textContent = input.value * 39.3700787 + " Inches";
  } else if (unit.value === 'feet') {
    output.textContent = input.value * 3.2808399 + " Feet";
  } else if (unit.value === 'footballfield') {
    output.textContent = input.value * 0.010936132983377079 + " Football fields";
}
});
