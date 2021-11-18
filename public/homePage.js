const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout ( (data) => {
        if (data.success) {
            location.reload();
        }
    })
}