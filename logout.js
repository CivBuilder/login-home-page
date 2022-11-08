// query selectors
const logOutBtn = document.querySelector('#logOutBtn');
const userLabel = document.querySelector('#usernameLabel');

const user = document.cookie;

homeInit = () => {
    // clean cookie and string
    let user = document.cookie.split("=")[2];
    if (user === '') {
        redirect();
    }
    user = user.split(';')[0];
    userLabel.innerHTML = `Currently logged in: ${user}`;
    logOutBtn.addEventListener('click', logout);
};

logout = () => {
    document.cookie = 'username=; expires Sun, 31 May 2015 12:00:00 UTC; path=/;';
    location.href = 'login.html';
}

redirect = () => {
    alert('No user is currently logged in. Redirecting to login...');
    location.href = 'login.html';
}

homeInit();