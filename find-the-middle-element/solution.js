var gimme = function (arr) {
    var newarr = [...arr];
    newarr.sort((a,b) => (a-b));
    return arr.indexOf(newarr[1]);
  };