function myKeyPress(e){
  let altKey
  if (e.which === 32) {
    altKey = 'Spacebar'
  }
  document.getElementById("heading").innerHTML = altKey || e.key;
};

window.addEventListener('keydown', event => myKeyPress(event));
