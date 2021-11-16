"use strict";

const userForm = new UserForm ();

userForm.loginFormCallback = data => {
    ApiConnector.login(data, (response) => {
        console.log(response);
    })

    if (response) {
        location.reload();
    } else {
        userForm.setLoginErrorMessage(message)
    }
}

userForm.registerFormCallback = data => {
    ApiConnector.register(data, (response) => {
        console.log(response)
    })

    if (response) {
        location.reload();
    } else {
        userForm.setRegisterErrorMessage(message)
    }
}