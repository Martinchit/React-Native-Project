import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchDashboard } from '../redux/dashboard/actions';

interface DashboardScreenProps {
    record:any[];
    reloadDashboard:() => void
}

export default class Dashboard extends React.Component <DashboardScreenProps>{
componentWillUnmount() {
    this.props.reloadDashboard();
}
   public render (){
        return (
            <div>
                {/* to do */}
            </div>
        )
    }
}

export const Group = connect(
    (state: RootState) => ({
      groups: state.group.groups
    }),
    (dispatch) => ({
      reloadGroup: () => dispatch(fetchDashboard())
    })
  )(Dashboard);