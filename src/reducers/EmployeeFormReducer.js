import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'Jane' }
      // if 'prop' === 'name', for example, 
      // the following statement translates to
      // { ...state, name: action.payload.value }
      // it's called 'key interpolation' in ES6
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};