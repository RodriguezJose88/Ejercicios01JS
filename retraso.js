function promesaRetraso(n) {
    return new Promise((resolve, reject) => {
      let contador = 0;
  
      function resolverPromesa() {
        if (contador < n) {
          const numeroActual = contador + 1;
          console.log(`Numero "${numeroActual}" de promesa`);
          setTimeout(() => {
            contador++;
            resolverPromesa();
          }, 2000); 
        } 
      }
      resolverPromesa();
    });
  }

  setTimeout(() => {
    const n = 4; 
    promesaRetraso(n)
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => {
        console.error(error);
      });
  }, 2000);