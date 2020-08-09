export function getSession(){
    return document.cookie.match('user');
}

export function setSession(user){
    document.cookie = 'user=' + user;
}