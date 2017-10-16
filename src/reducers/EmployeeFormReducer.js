import { 
  EMPLOYEE_UPDATE, 
  EMPLOYEE_SAVE,
  EMPLOYEE_CREATE, 
  EMPLOYEE_EDIT 
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'Jane' }
      // if 'prop' === 'name', for example, 
      // the following statement translates to
      // { ...state, name: action.payload.value }
      // it's called 'key interpolation' in ES6
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVE:
      return INITIAL_STATE;
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;      
    case EMPLOYEE_EDIT:
      return action.payload;      
    default:
      return state;
  }
};
