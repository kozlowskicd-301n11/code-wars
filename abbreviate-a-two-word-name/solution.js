function abbrevName(name) {
    var nameArr = name.split(' ');
    var init = `${nameArr[0].charAt(0)}.${nameArr[1].charAt(0)}`;
    return init.toUpperCase();
}