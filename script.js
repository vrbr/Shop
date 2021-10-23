function render() {

    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();

}

spinnerPage.render();

let CATALOG = [];

// 'https://api.jsonbin.io/b/61732cdd9548541c29c72433' - фейковый сервер
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000);
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });