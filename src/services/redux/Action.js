export const SET_GRID_VIEW = 'SET_GRID_VIEW';
export const FETCH_LABELS = 'FETCH_LABELS';

export const setGridView = gridView => dispatch => {
  dispatch({
    type: SET_GRID_VIEW,
    payload: gridView,
  });
};

export const fetchLabels = labelArray => dispatch => {
  dispatch({
    type: FETCH_LABELS,
    payload: labelArray,
  });
};

