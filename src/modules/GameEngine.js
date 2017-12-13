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
    return orders.findIndex(item => {
        if (item.served) {
            return false;
        }

        if (!item.menuItem) {
            return false;
        }

        const requiredIngredients = item.menuItem.ingredients.sort();
        const prepIngredients = ingredients.sort();

        return isEqual(requiredIngredients, prepIngredients);
    });
}

export function serveOrder(ingredients, orders, currentTime) {
    const matchedOrderIndex = matchOrder(ingredients, orders);
    let hasMatchedOrder = false;

    const updateOrders = orders.map((item, index) => {
        if (index === matchedOrderIndex) {
            hasMatchedOrder = true;
            const customerSatisfaction = item.customer.satisfaction;
            const increasedSatisfaction = makeCustomerHappy(customerSatisfaction);

            const customerData = {
                ...item.customer,
                satisfaction: increasedSatisfaction,
                lastSatisfactionChangedTime: currentTime
            };

            return {
                ...item,
                customer: customerData,
                served: true
            };
        }

        return item;
    });

    if (hasMatchedOrder) {
        return updateOrders;
    }

    return null;
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

function makeCustomerHappy(satisfactionLevel) {
    const maxSatisfactionLevel = CUSTOMER_SATISFACTION.HAPPY;

    return (satisfactionLevel < maxSatisfactionLevel) ? maxSatisfactionLevel : satisfactionLevel;
}

export function updateCustomerOrders(currentOrders, currentTime) {
    return currentOrders.map(item => {
        if (!item.customer) {
            //If empty for 3 seconds, generate new order
            if (item.emptyStartTime - currentTime >= 3) {
                return createOrder(currentTime);
            }

            return item;
        }

        const customerSatisfaction = item.customer.satisfaction;
        const customerStartTime = item.customer.lastSatisfactionChangedTime;
        const timeForChangeState = 5;

        let value = item;
        const customerDuration = customerStartTime - currentTime;

        //Customer left when they are angry for 10 seconds
        if (customerSatisfaction === CUSTOMER_SATISFACTION.ANGRY &&
            customerDuration >= 10) {
            value = { emptyStartTime: currentTime };
        }
        else if (item.served && customerDuration >= 3) {
            //If eat for 3 seconds, then leave
            value = { emptyStartTime: currentTime };
        }
        else if (customerDuration >= timeForChangeState) {          //Customer change satisfaction every 5 seconds
            const loweredSatisfaction = decreaseCustomerSatisfaction(customerSatisfaction);

            const customerData = {
                ...item.customer,
                satisfaction: loweredSatisfaction,
                lastSatisfactionChangedTime: currentTime
            };

            const isSatisfactionChanged = loweredSatisfaction !== customerSatisfaction;

            value = { ...item, customer: isSatisfactionChanged ? customerData : item.customer }
        }
        return value;
    });
}

function getMostUnsatisfiedCustomer(currentOrders) {
    let customerIndex = 0;
    let minSatisfactionLevel = 100;

    currentOrders.map((order, index) => {
        if (!order.customer) {
            return;
        }

        if (order.customer.satisfaction < minSatisfactionLevel) {
            minSatisfactionLevel = order.customer.satisfaction;
            customerIndex = index;
        }
    });

    return customerIndex;
}

export function updateCustomerSatisfaction(currentOrders, currentTime) {
    const maxSatisfactionLevel = CUSTOMER_SATISFACTION.HAPPY;
    const firstCustomerIndex = getMostUnsatisfiedCustomer(currentOrders);

    return currentOrders.map((item, index) => {
        const customer = item.customer;
        let value = item;

        if (index === firstCustomerIndex) {
            const customerSatisfaction = item.customer.satisfaction;
            const customerStartTime = item.customer.lastSatisfactionChangedTime;
            const increasedSatisfaction = makeCustomerHappy(customerSatisfaction);
            const customerData = {
                ...item.customer,
                satisfaction: increasedSatisfaction,
                lastSatisfactionChangedTime: currentTime
            };

            value = { ...item, customer: customerData }
        }

        return value;
    })
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




