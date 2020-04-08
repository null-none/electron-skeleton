import { connect } from 'react-redux';

import { StoreState } from '../types';
import Dashboard from '../components/Dashboard';
import { loadingAction } from '../actions/dashboard';

function mapStateToProps(state: StoreState) {
  return {
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    loading: () => {
      loadingAction().then((result) => {
        dispatch(result);
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
