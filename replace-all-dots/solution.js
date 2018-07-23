var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

// Code below is from before learning of the global modifier

//var replaceDots = function(str) {
//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt[i] === '\.') {
//       return str.charAt[i].replace(/\./, '-');
//     }
//     else {
//       return str.charAt[i];
//     }
//   }
// }