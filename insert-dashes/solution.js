function insertDash(num) {
    num = num.toString().replace(/[13579](?=[13579])/g, "$&-");
    return num;
  }