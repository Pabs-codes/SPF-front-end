import { SET_STATUS } from "../actions/status";

const initialState = {
  status: {
    battery: 0,
    remainingRounds: 0,
    status: true,
    lastFeedTime: 0
  },
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        status: {
          battery: action.status.battery,
          remainingRounds: action.status.remainingRounds,
          status: action.status.status,
          lastFeedTime: action.status.lastFeedTime

        },
      };
  }
  return state;
};

export default stateReducer;
