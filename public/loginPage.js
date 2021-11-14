"use strict";

const userForm = new UserForm ();

userForm.loginFormCallback = function (data) {
    ApiConnector.login(data, (response) => {
        console.log(response);
    })
}

