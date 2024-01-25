function isRequiredSumPossible(nums, requiredSum) {

  //Creo un objeto para almacenar cuantas veces aparece un numero; 
  const map = {};

  //iterar sobre cada elemento del array "nums"
  for (const num of nums) {
   
    //Calcular el valor necesario para alcanzar la suma requerida
    const requiredValue = requiredSum - num

    //Si en el objeto map existe una clave con el nombre de requiredValue sumarle 1 a su valor, si no existe crear una clave con el nombre de "num" y asignarle un valor de 1. En el caso de que para alguno de los valores(num) existiera en el objeto map un clave con el nombre del valor requerido para lograr la suma requerida se le sumaria 1 a su valor.
    map[ requiredValue ] ? map[ requiredValue ]++ : map[ num ] = 1;
   
    //Si en el objeto map hay un valor mayor a 1, eso significaría que existe un valor requerido para llegar a la suma requerida.
    //Si existe un valor mayor a 1 devolver true, de lo contrario devolver false.
    const sumCompleted = Object.values(map).some(e => e > 1)

    //En caso de que se cumpla la condición de que sumCompleted es true la función devolverá true, caso contrario devolverá false.
    if (sumCompleted) {
  
      return true
    }

  }
  return false
}

//Para el punto numero 2 elegiría este algoritmo que solo realiza el conjunto de operaciones dentro del bucle "for" una vez por cada elemento en arreglo "nums", maximizando asi el tiempo de ejecución y la utilización de recursos.
