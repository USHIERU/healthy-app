"use strict";

function isSession() {
  var data = 'sxs=;data=uziel;';
  var find = false;
  var array = data.split(';');
  var array2 = array.map(function (e) {
    return e.split('=');
  });
  array2.forEach(function (e) {
    return e[0] === 'sxs' ? find = e[1] !== '' : null;
  });
  return find;
}

console.log(isSession());