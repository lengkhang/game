import sample from 'lodash.sample';
import find from 'lodash.find';
import isEqual from 'lodash.isequal';

import data, { CUSTOMER_SATISFACTION } from '../config/data';

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

function decreaseCustomerSatisfaction(satisfactionLevel) {
    const minSatisfactionLevel = CUSTOMER_SATISFACTION.ANGRY;

    return (satisfactionLevel > minSatisfactionLevel) ? parseInt(satisfactionLevel) - 1 : satisfactionLevel;
}

function increaseCustomerSatisfaction(satisfactionLevel) {
    const maxSatisfactionLevel = CUSTOMER_SATISFACTION.HAPPY;

    return (satisfactionLevel < maxSatisfactionLevel) ? parseInt(satisfactionLevel) + 1 : satisfactionLevel;
}

export function updateCustomerOrders(currentOrders, currentTime) {
    return currentOrders.map(item => {
        const customerSatisfaction = item.customer.satisfaction;
        const customerStartTime = item.timeCreated;

        let value = item;
        if (customerStartTime - currentTime >= 5) {
            const loweredSatisfaction = decreaseCustomerSatisfaction(customerSatisfaction);

            const customerData = { ...item.customer, satisfaction: loweredSatisfaction };
            value = { ...item, customer: customerData }
        }

        return value;
    });
}

export function createGame({ timer, numberOfOrders }) {
    const currentOrders = createOrders(numberOfOrders, timer);
    const servedOrders = [];
    const prepingOrder = [];
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
        prepingOrder,
        timer,
        score
    };
}




