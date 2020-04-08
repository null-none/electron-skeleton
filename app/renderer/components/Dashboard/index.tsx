
import React, { Component } from 'react';


interface DashboardProps {
  loading: () => void;
}

interface DashboardState {
}

export default class Dashboard extends Component<
  DashboardProps,
  DashboardState
> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
