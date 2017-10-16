import { EMPLOYEE_EDIT } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  uid: ''  
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_EDIT:        
      return action.payload;      
    default:
      return state;            
  }
};
