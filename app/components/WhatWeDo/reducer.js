import { fromJS } from 'immutable';
import { curry } from 'ramda';

import whatWeDo from './whatWeDo.json';

const initialState = fromJS({
  isWhatWeDoOpen: false,
  whatWeDo,
});

const WHAT_WE_DO_OPEN = 'WHAT_WE_DO_OPEN';
const WHAT_WE_DO_CLOSE = 'WHAT_WE_DO_CLOSE';

const whatWeDoClose = curry((dispatch, event) => {
  event.preventDefault();
  // if (typeof dispatch !== 'function') { return false; }
  return dispatch({ type: WHAT_WE_DO_CLOSE });
});

const whatWeDoOpen = curry((dispatch, event) => {
  event.preventDefault();
  return dispatch({ type: WHAT_WE_DO_OPEN });
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case WHAT_WE_DO_OPEN:
      return state.set('isWhatWeDoOpen', true);
    case WHAT_WE_DO_CLOSE:
      return state.set('isWhatWeDoOpen', false);
    default:
      return state;
  }
}

export default reducer;

export {
  initialState,
  whatWeDoClose,
  whatWeDoOpen,
};