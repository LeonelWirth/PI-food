export function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Mira un componente y si es el mayor lo va desplazando hacia la derecha hasta el final o hasta que encuentre otra componente aun mas grande, luego repite

  function swap(array, i, j) {
    let auxiliar = array[i];
    array[i] = array[j];
    array[j] = auxiliar;
    return array;
  }
  var mayor = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (mayor < array[j]) {
        mayor = array[j];
      } else {
        array = swap(array, j, j - 1);
      }
    }
    mayor = 0;
  }
  return array;
}
