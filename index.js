var customerName = 'bob';
const leastFavoriteCustomer =' ';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(name){
    bestCustomer = name;
}

function changeLeastFavoriteCustomer(name){
    leastFavoriteCustomer = name;
}