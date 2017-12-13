import {
  createGame,
  updateCustomerOrders,
  updateCustomerSatisfaction,
  serveOrder
} from './GameEngine';
import { INITIAL_START_TIME } from '../config/data';

export const TIME_TICK = 'game/TIME_TICK'
export const ADD_INGREDIENT = 'game/ADD_INGREDIENT'
export const MATCH_INGREDIENTS = 'game/MATCH_INGREDIENTS'
export const CLEAR_PREP = 'game/CLEAR_PREP';

const initialState = createGame({ timer: INITIAL_START_TIME, numberOfOrders: 4 });

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
    dispatch({
      type: ADD_INGREDIENT,
      ingredient
    })
  }
}

export const smearIngredients = (ingredients) => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log('==> currentState:', currentState)
    const currentOrders = currentState.game.currentOrders;
    const servedOrders = serveOrder(ingredients, currentOrders, currentState.game.timer);

    if (servedOrders) {
      dispatch({
        type: MATCH_INGREDIENTS,
        currentOrders: servedOrders,
        prepingOrder: [],
        score: currentState.game.score + 10
      })
    }
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

export function clearPrep() {
  return (dispatch, getState) => {
    const currentState = getState();

    if (currentState.game.timer) {
      dispatch({
        type: CLEAR_PREP,
        prepingOrder: []
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
    case CLEAR_PREP:
      return {
        ...state,
        prepingOrder: action.prepingOrder
      }
    case MATCH_INGREDIENTS:
      return {
        ...state,
        currentOrders: action.currentOrders,
        prepingOrder: action.prepingOrder,
        score: action.score
      }
    default:
      return state;
  }
};