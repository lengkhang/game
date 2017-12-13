import {
  createGame,
  updateCustomerOrders,
  updateCustomerSatisfaction,
  serveOrder
} from './GameEngine';

export const TIME_TICK = 'game/TIME_TICK'
export const ADD_INGREDIENT = 'game/ADD_INGREDIENT'
export const MATCH_INGREDIENTS = 'game/MATCH_INGREDIENTS'

const initialState = createGame({ timer: 300, numberOfOrders: 4 });

export const tickAction = (remainingSeconds) => {
  return (dispatch, getState) => {
    const currentState = getState();

    const currentOrders = updateCustomerOrders(currentState.game.currentOrders, remainingSeconds)

    dispatch({
      type: TIME_TICK,
      currentOrders,
      remainingSeconds
    })
  }
}

export const addIngredient = (ingredient) => {
  return (dispatch, getState) => {
    const currentState = getState();

    dispatch({
      type: ADD_INGREDIENT,
      ingredient
    })
  }
}

export const smearIngredients = (ingredients) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const currentOrders = currentState.game.currentOrders;
    const servedOrders = serveOrder(ingredients, currentOrders, currentState.game.timer);

    dispatch({
      type: MATCH_INGREDIENTS,
      currentOrders: servedOrders,
      prepingOrder: []
    })
  }
}

export function giveCompliment() {
  return (dispatch, getState) => {
    const currentState = getState();

    if (currentState.game.timer) {
      const currentOrders = updateCustomerSatisfaction(currentState.game.currentOrders, currentState.game.timer)

      dispatch({
        type: TIME_TICK,
        currentOrders
      })
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TIME_TICK:
      return {
        ...state,
        currentOrders: action.currentOrders,
        timer: action.remainingSeconds
      }
    case ADD_INGREDIENT:
      return {
        ...state,
        prepingOrder: [
          ...state.prepingOrder,
          action.ingredient
        ]
      }
    case MATCH_INGREDIENTS: 
      return {
        ...state,
        currentOrders: action.currentOrders,
        prepingOrder: action.prepingOrder
      }
    default:
      return state;
  }
};