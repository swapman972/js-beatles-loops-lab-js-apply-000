// add solution here

function theBeatlesPlay(array1, array2){
  var array = []
  for (let i= 0; i <array.length; i++){
    var string = array1[i]+ " plays " + array2[i]
    array.push(string)
  }
  return array
}

