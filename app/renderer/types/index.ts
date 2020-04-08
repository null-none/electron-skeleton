import { RouterState } from 'connected-react-router';

export interface RouterState {
  router: RouterState;
}

export interface DashboardState {
}

export interface StoreState {
  dashboard: DashboardState;
}
