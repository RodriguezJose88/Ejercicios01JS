new Promise(function(resolve, reject) {
    const number = Math.floor(Math.random() * 100);
    setTimeout(() => resolve(number), 2000);
  
  }).then(function(number) {
  
    alert(number); // random
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(Math.pow(number,2)), 3000);
    });
  
  }).then(function(number) { // (**)
  
    alert(number); // cuadrado
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Math.sqrt(number)), 1000);
    });
  
  }).then(function(number) {
  
    alert(number); // raiz
  
  });



