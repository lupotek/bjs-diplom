"use strict";

const userForm = new UserForm ();

userForm.loginFormCallback = data => {
    ApiConnector.login(data, (response) => {
<<<<<<< HEAD
=======
        console.log (response);
>>>>>>> f26005a4cf52c7f548e88ecefe067a9114eb7c73
        if (response.success) {
            location.reload();
        } else {
            userForm.setLoginErrorMessage(response.error)
        }
    })
}

userForm.registerFormCallback = data => {
    ApiConnector.register(data, (response) => {
<<<<<<< HEAD
=======
        console.log(response)
>>>>>>> f26005a4cf52c7f548e88ecefe067a9114eb7c73
        if (response.success) {
            location.reload();
        } else {
            userForm.setRegisterErrorMessage(response.error)
        }
    })
}