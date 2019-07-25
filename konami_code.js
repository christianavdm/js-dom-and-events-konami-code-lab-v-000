const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0; 

/* const main = document.getElementById('main');

main.addEventListener('keydown', function init(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}); */

function init() {
  let index = 0; 

  document.addEventListener('keydown', function init(e) {
    const key = parseInt(e.detail || e.which);
   
    if (key === code[index]) {
      index++;
   
      if (index === code.length) {
        alert("Congratulations");
   
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}