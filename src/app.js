import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Forecasting from './containers/Forecast/Forecasting'
import IntraDay from './containers/Realtime/Realtime';
import Layout from './hoc/Layout/Layout';
import Schedule from './containers/Schedule/Schedule';
import Anomalies from './containers/Anomalies/Anomalies';
import Planner from './containers/Planner/Planner';
import AnalyticsDetail from './containers/AnalyticsDetail/AnalyticsDetail';
import Analytics from './containers/Analytics/Analytics';
import Integration from './containers/Integration/Integration';

import Dashboard from './containers/Admin/Dashboard/Dashboard';
import Client from './containers/Admin/Clients/Clients';
import Forms from './containers/Admin/Onboarding/Onboarding';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={"/analytics/:title"} component={ AnalyticsDetail } />
                <Route path={"/analytics"} component={ Analytics }/>
                <Route path={"/forecast"} component={ Forecasting }/>
                <Route path={"/intraday"} component={ IntraDay }/>
                <Route path={"/schedule"} component= { Schedule }/>
                <Route path={"/anomalies"} component={ Anomalies }/>
                <Route path={"/planner"} component={ Planner } />
                <Route path={"/integration"} component={Integration} />
                <Route path={"/admin/dashboard"} component={Dashboard} />
                <Route path={"/admin/clients/all"} component={Client} />
                <Route path={"/admin/onboard"} component = {Forms} />

                <Route path={"/"} component={ Analytics }/>
            </Switch>
        </Layout>
    );
}

export default App;
