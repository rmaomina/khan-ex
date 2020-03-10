var displayArray = function(array) {
    // textFont(createFont("monospace"), 12);
    // var xpos = 50;
    // var ypos = 50;
    for(var i = 0; i < array.length; i++) {
        document.write("idx : "+i);
        document.write("array : "+array);
        document.write(" \n");
        // xpos = xpos + 10;
    }
    
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var aaa;

    for(var f = 0; f < array.length; f++) {
        aaa = indexOfMinimum(array, f);
        swap(array, f, aaa);
        displayArray(array);
    }
};

var array = [2, 1, 5, 10, 15];
array = selectionSort(array);

console.log(array);