import { SET_GRID_VIEW,  FETCH_LABELS} from '../redux/Action';

const initialState = {
  gridView: false,
  labelData: [],
};
console.log(initialState.gridView)
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GRID_VIEW:
      return {
        ...state, gridView: !state.gridView

      };

      case FETCH_LABELS:
      return { ...state, labelData: action.payload };
    default:
      return state;
  }

};

export default userReducer;