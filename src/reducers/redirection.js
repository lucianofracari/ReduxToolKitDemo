const SET_REDIRECTION_DATA = "SET_REDIRECTION_DATA";

const initialState = { name: "Luciano" };

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
