function promesaParalelo(funcionesPromesa) {
    return Promise.all(funcionesPromesa.map((func) => func()))
      .then((result1) => result1)
        // use result1, result2 and result3
  }

  const promesa1 = () => new Promise((resolve) => setTimeout(() => resolve('Promesa1'), 1000));
  const promesa2 = () => new Promise((resolve) => setTimeout(() => resolve('Promesa2'), 2000));
  const promesa3 = () => new Promise((resolve) => setTimeout(() => resolve('Promesa3'), 500));
  
  const funcionesPromesa = [promesa1, promesa2, promesa3];

  setTimeout(() => { promesaParalelo(funcionesPromesa).then((result1) => {
        console.log(result1);
      })
  }, 6300); 