import React from 'react';

import {Route, Switch} from 'react-router-dom'

import Analytics from './containers/Analytics/Analytics';
import Forecasting from './containers/Forecast/Forecasting';
import Intraday from './containers/Realtime/Realtime';
import Layout from "./hoc/Layout/Layout";
import Schedule from './containers/Schedule/Schedule';
import Anomalies from './containers/Anomalies/Anomalies';
import Planner from './containers/Planner/Planner';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={"/analytics"} component={Analytics}/>
                <Route path={"/forecast"} component={Forecasting}/>
                <Route path={"/intraday"} component={Intraday}/>
                <Route path={"/schedule"} component= {Schedule}/>
                <Route path={"/anomalies"} component={Anomalies}/>
                <Route path={"/planner"} component={Planner} />
                <Route path={"/"} component={Analytics}/>
            </Switch>
        </Layout>
    );
}

export default App;
