const obtenerResultado = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout( ()=>{
        const resultado = Math.random() > 0.5 ? 'Exito' : 'Fracaso';
        resolve(resultado);
        }, 3000);
    })
}

obtenerResultado()
  .then((resultado) => {
    console.log(`La tarea se completó con ${resultado}`);
  })
  .catch((error) => {
    console.error(error);
  });