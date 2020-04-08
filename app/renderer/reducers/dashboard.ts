import { STOP, START, LOADING } from '../actions/dashboard/action_type';
import { DashboardState } from '../types';

const INITIAL_STATE = {
};

export default function dashboard(state = INITIAL_STATE, action: any): DashboardState {

  switch (action.type) {
    case LOADING:
      break;
    case START:
      break;
    case STOP:
      break;
  }
  return state;
}
