function setSession(correo) {
    document.cookie = `sxs=${correo}`;
}

function isSession() {
    const data = document.cookie;
    let find = false;

    const array = data.split(';');
    const array2 = array.map(e => e.split('='));
    array2.forEach(e => e[0] === 'sxs' ? find = e[1] !== '' : null);

    return find;
}

function deleteSession() {
    document.cookie = "sxs=";
}

module.exports = {
    setSession,
    isSession,
    deleteSession
}