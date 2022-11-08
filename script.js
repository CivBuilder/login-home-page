// query selectors
const loginBtn = document.querySelector('#loginBtn');
const username = document.querySelector('#username');
const pass = document.querySelector('#pass');
const errorsLabel = document.querySelector('#errorsLabel');

// global constants
const userBlankError = "Please enter a username";
const passBlankError = "Please enter a password";
const passWrongError = "Inputted password is incorrect"
const userWrongError = "Inputted user does not exist"

// global variables
let validLogin = true;

const chris = {
    user: 'Chris',
    password: 'bad_password',
};
const ian = {
    user: 'Ian',
    password: 'medium_password',
};
const shelby = {
    user: 'Shelby',
    password: 'good_password',
};

const users = [chris, ian, shelby];

loginInit = () => {
    loginBtn.addEventListener('click', checkLogin);
};

checkLogin = () => {
    checkBlank(username, pass);
    if (validLogin) {
        checkCredentials(username, pass);
    }
}

checkBlank = (user, password) => {
    if (user.value === "") {
        errorsLabel.innerHTML = userBlankError;
        validLogin = false;

    }
    else if (!password.value) {
        errorsLabel.innerHTML = passBlankError;
        validLogin = false;
    }
    else {
        errorsLabel.innerHTML = '';
        validLogin = true;
    }
};

checkCredentials = (user, password) => {
    // check username
    if (users.some(curr => curr.user === user.value)) {
        let copyUsers = users;
        copyUsers = copyUsers.filter(current => current.user === user.value);
        const chosenUser = copyUsers[0];

        // check password
        if (chosenUser.password === password.value) {
            // we're good, go home
            document.cookie = `username = ${user.value}; expires = Fri, 24 Jan 2025 00:00:00 UTC; path=/;`;
            location.href = 'home.html';
        }
        else {
            errorsLabel.innerHTML = passWrongError;
        }
    }
    else {
        errorsLabel.innerHTML = userWrongError;
    }
};

loginInit();

