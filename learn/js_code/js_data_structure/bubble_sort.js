function checkArray(array) {
    if (!array || array.length <= 2) return
}
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}

function bubble(array) {
    checkArray(array);
    for (let i = array.length - 1; i > 0; i--) {
      // ไป 0 ๅฐ `length - 1` ้ๅ
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) swap(array, j, j + 1)
      }
    }
    return array;
  }

var arr=[10,9,6,4,3,5,12];
console.log(bubble(arr));