"use strict";

function setSession(correo) {
  document.cookie = "sxs=".concat(correo);
}

function isSession() {
  var data = document.cookie;
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

function deleteSession() {
  document.cookie = "sxs=";
}

module.exports = {
  setSession: setSession,
  isSession: isSession,
  deleteSession: deleteSession
};