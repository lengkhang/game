import { createGame, updateCustomerOrders } from './GameEngine';

export const INIT_GAME_REQUESTED = 'game/INIT_GAME_REQUESTED'
export const INIT_GAME = 'counter/INIT_GAME'
export const SERVE_ORDER = 'counter/SERVE_ORDER'
export const DECREMENT = 'counter/DECREMENT'
export const TIME_TICK = 'game/TIME_TICK'

const initialState = createGame({ timer: 300, numberOfOrders: 4 });

export const tickAction = (remainingSeconds) => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log('==> currentState:', currentState)

    //If customer satisfaction changed, update customer obj?
    const currentOrders = updateCustomerOrders(currentState.game.currentOrders, remainingSeconds)

    dispatch({
      type: TIME_TICK,
      currentOrders
    })
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TIME_TICK:
    console.log('==> action:', action)
      return {
        ...state,
        currentOrders: action.currentOrders
      }
    default:
      return state;
  }
};