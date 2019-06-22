import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
  error: '',
  fetchingData: false,
  loggingIn: false,
  someData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ''
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        someData: action.payload
          .filter(x => x.someFilteringIfNecessary)
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;


