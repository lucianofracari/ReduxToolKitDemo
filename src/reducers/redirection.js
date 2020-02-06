const SET_REDIRECTION_DATA = "SET_REDIRECTION_DATA";

export const SetRedirection = newData => {
  return { type: SET_REDIRECTION_DATA, newData };
};

const initialState = {};

export const RedirectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECTION_DATA: {
      return Object.assign({}, state, {
        ...action.newData
      });
    }
    default:
      return state;
  }
};
