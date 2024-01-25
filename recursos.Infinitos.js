function isRequiredSumPossible(nums, requiredSum) {

  //Iterar sobre cada elemento del array "nums" en el indice i
  for (let i = 0; i < nums.length; i++) {
 
    //Iterar sobre cada elemento del array "nums" en el indice j por cada elemento en indice i
    for (let j = i + 1; j < nums.length; j++) {

    //sumar los valores de los elementos en las posiciones i y j, y compararlos de manera estricta con el valor de la suma requerida. El bucle evaluara todas las combinaciones posibles. Si la condición se cumple la función devolverá true y termina la operación.  
      if (nums[ i ] + nums[ j ] === requiredSum) {
        return true;
      }
    }
  }
  //Si no existen dos valores dentro del array que cumplan la condición, es decir que al sumarlos el resultado sea el valor de la suma requerida, la función devolverá false.
  return false;
}

//Para el punto numero uno utilizaría este algoritmo ya que considerando que lo mas importante es desarrollarlo en el menor tiempo posible, este es menos sofisticado y requiere menos análisis. En cuanto a la utilización de recursos y el tiempo de ejecución este algoritmo tiene la desventaja de que por cada elemento iterado del arreglo en el primer bucle , las operaciones en el segundo bucle se realizaran una cantidad de veces igual a la longitud del arreglo menos el valor de j. A medida que el arreglo crece en tamaño también lo hará el consumo de recursos y el tiempo de ejecución.
