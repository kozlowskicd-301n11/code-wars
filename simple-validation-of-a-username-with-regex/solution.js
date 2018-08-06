function validateUsr(username) {
    let digits = username.length;
    let res = /[a-z0-9_]/.test(username);
    let caps = /[A-Z]/.test(username);
    let spaces = /[\s]/.test(username);
    if (4 <= digits && digits <= 16 && caps == false && spaces == false) { 
    return res;
    }
    else {
    return false; 
    }
  }