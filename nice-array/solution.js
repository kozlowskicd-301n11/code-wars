function isNice(arr){
  console.log(arr);
  let checkArr = [];
  for (var i = 0; i < arr.length; i++) {
  if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
    checkArr.push('true');
  } else if (arr.length <= 1) {
    return false
    } else {checkArr.push('false')}
  }console.log(checkArr);
  if (checkArr.includes('false') || checkArr.length === 0) {return false}
  else {return true} 
}