import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn23109146Reducer from '../features/SignIn23109146/redux/reducers'
import CalendarView6109143Reducer from '../features/CalendarView6109143/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn23109146: SignIn23109146Reducer,
CalendarView6109143: CalendarView6109143Reducer,

});