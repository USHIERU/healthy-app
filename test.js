function isSession() {
    const data = 'sxs=;data=uziel;'
    let find = false;

    let array = data.split(';');
    let array2 = array.map(e => e.split('='));

    array2.forEach(e => e[0] === 'sxs' ? find = e[1] !== '' : null);

    return find;
}

console.log(isSession());