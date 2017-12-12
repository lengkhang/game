import sample from 'lodash.sample';
import find from 'lodash.find';
import isEqual from 'lodash.isEqual';

import data from '../config/data';

function getRandomMenuItem() {
    return sample(data.menu);
}

function getRandomCutomer() {
    return sample(data.customer);;
}

function getIngredients() {
    return data.ingredients;
}

function createOrder(timeCreated) {
    const menuItem = getRandomMenuItem();
    const customer = getRandomCutomer();
    const served = false;

    return {
        timeCreated,
        menuItem,
        customer,
        served
    };
}

function matchOrder (ingredients, orders) {
    return orders.find(item => {
        return isEqual(item.menuItem, ingredients);
    });
}

function serveOrder(ingredients, orders) {
    const matchedOrder = matchOrder(ingredients, orders);

    return {
        ...matchedOrder,
        served: !!matchedOrder
    };
}

function updateOrder(currentOrders, timer) {
    return currentOrders.map(item => item.served ? createOrder(timer) : item);
}



