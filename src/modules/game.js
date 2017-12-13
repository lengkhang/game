import { createGame, updateCustomerOrders } from './GameEngine';

export const TIME_TICK = 'game/TIME_TICK'
export const ADD_INGREDIENT = 'game/ADD_INGREDIENT'

const initialState = createGame({ timer: 300, numberOfOrders: 4 });

export const tickAction = (remainingSeconds) => {
  return (dispatch, getState) => {
    const currentState = getState();

    const currentOrders = updateCustomerOrders(currentState.game.currentOrders, remainingSeconds)

    dispatch({
      type: TIME_TICK,
      currentOrders
    })
  }
}

export const addIngredient = (ingredient ) => {
    return (dispatch, getState) => {
      const currentState = getState();
      
      dispatch({
        type: ADD_INGREDIENT,
        ingredient
      })
    }
  }

export default (state = initialState, action) => {
  switch (action.type) {
    case TIME_TICK:
      return {
        ...state,
        currentOrders: action.currentOrders
      }
    case ADD_INGREDIENT:
      return {
        ...state,
        prepingOrder: [
            ...state.prepingOrder,
            action.ingredient
        ]
      }
    default:
      return state;
  }
};