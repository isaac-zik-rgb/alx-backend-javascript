function getPaymentTokenAPI(success) {
    if (success) {
        return new Promise((resolve) => {
            resolve({data: 'Successful response from payment API' });
        });
    }
}

module.exports = getPaymentTokenAPI;