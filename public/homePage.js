const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout ( (response) => {
        if (response.success) {
            location.reload();
        }
    })
}

ApiConnector.current( (response) => {
    if (response.success) {
       ProfileWidget.showProfile (response.data)
    }
})

const ratesBoard = new RatesBoard();

const rates = () => {
    ApiConnector.getStocks((response) => {
        if (response.success) {
            ratesBoard.clearTable ()
            ratesBoard.fillTable(response.data)
        }
    })
}
rates()
setInterval(rates, 60000)

const moneyManager = new MoneyManager()

moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney (data, (response) => {
        if (response.success) {
            ProfileWidget.showProfile (response.data);
            moneyManager.setMessage(response.success)
        } else {
            moneyManager.setMessage(response.error) 
        }
    })
}

moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney (data, (response) => {
        if (response.success) {
            ProfileWidget.showProfile (response.data);
            moneyManager.setMessage(response.success)
        } else {
            moneyManager.setMessage(response.error) 
        }
    })
}

moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney (data, (response) => {
        if (response.success) {
            ProfileWidget.showProfile (response.data);
            moneyManager.setMessage(response.success)
        } else {
            moneyManager.setMessage(response.error) 
        }
    })
}