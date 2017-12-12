import sample from 'lodash.sample';
import find from 'lodash.find';
import isEqual from 'lodash.isequal';

import data from '../config/data';

function getRandomMenuItem() {
    return sample(data.menu);
}

function getRandomCutomer() {
    return sample(data.customer);
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

function createOrders(count, timeCreated) {
    let orders = [];

    for (let i = 0; i < count; i++) {
        orders.push(createOrder(timeCreated))
    }

    return orders;
}

function matchOrder(ingredients, orders) {
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

export function updateCustomerOrders(currentOrders, currentTime) {
    return currentOrders.map(item => {
        const customerSatisfaction = item.customer.satisfaction;
        const customerStartTime = item.timeCreated;

        let value = item;
        if (customerStartTime - currentTime >= 5) {
            const customerData = { ...item.customer, satisfaction: 'happy' };
            value = { ...item, customer: customerData }

            console.log('==> value:', value)
        }

        return value;
    });
}

export function createGame({ timer, numberOfOrders }) {
    const currentOrders = createOrders(numberOfOrders, timer);
    const servedOrders = [];
    const perpingOrder = {};
    const score = 0;

    return {
        data: {
            customers: data.customers,
            menu: data.menu,
            ingredients: data.ingredients,
            compliments: data.compliments
        },
        numberOfOrders,
        servedOrders,
        currentOrders,
        perpingOrder,
        timer,
        score
    };
}




