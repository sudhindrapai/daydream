import React, {Component,Fragment} from 'react';
import classes from './Agents.module.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/index';

import Moment from 'react-moment';

// import of other components

import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';

class Agents extends Component{

    componentDidMount() {
        this.props.loadAgentList();
    }

    render() {
        return(
            <Fragment>
                <div className={classes.Card}>
                    <div className={classes.DateRangePicker}>
                        <DateRangePicker calendarStartDate={this.props.startDate}
                                         calendarEndDate={this.props.endDate} />
                    </div>
                </div>
            <div className={classes.Container}>
                <div className={classes.ScheduleTableHeader}>
                    <div className={classes.ScheduleTableDate}>
                        Schedule for <Moment format={'dddd, DD MMMM YYYY'}>{new Date()}</Moment>
                    </div>
                    <div className={classes.AgentCount}>
                        10 agents
                    </div>
                </div>
                <div className={classes.AgentListHeader}>
                    <div className={classes.AgentsNames}>
                        Agents
                    </div>
                    <div className={classes.AgentsEvent}>
                        <Moment format={'Do MMMM YYYY'}>{new Date()}</Moment>
                    </div>
                </div>
                <div className={classes.AgentDetails}>
                    <div className={classes.AgentList}>
                        <div className={classes.AgentName}>
                            Agent-1
                        </div>
                        <div className={classes.AgentName}>
                            Agent-2
                        </div>
                        <div className={classes.AgentName}>
                            Agent-3
                        </div>
                        <div className={classes.AgentName}>
                            Agent-4
                        </div>
                        <div className={classes.AgentName}>
                            Agent-5
                        </div>
                        <div className={classes.AgentName}>
                            Agent-6
                        </div>
                        <div className={classes.AgentName}>
                            Agent-7
                        </div>
                        <div className={classes.AgentName}>
                            Agent-8
                        </div>
                        <div className={classes.AgentName}>
                            Agent-9
                        </div>
                        <div className={classes.AgentName}>
                            Agent-10
                        </div>
                    </div>
                    <div className={classes.AgentEventDetail}>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td colSpan={8}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td colSpan={9}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td colSpan={5}>
                                            <div className={classes.Event2}></div>
                                        </td>
                                        <td>
                                            <div className={classes.Event3}></div>
                                        </td>
                                        <td colSpan={5}>
                                            <div className={classes.Event2}></div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td colSpan={6}>
                                            <div className={classes.Event2}></div>
                                        </td>
                                        <td></td>
                                        <td colSpan={1}>
                                            <div className={classes.Event2}></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td colSpan={2}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                        <td></td>
                                        <td colSpan={2}>
                                            <div className={classes.Event2}></div>
                                        </td>
                                        <td></td>
                                        <td colSpan={2}>
                                            <div className={classes.Event3}></div>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className={classes.Event1}></div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td colSpan={4}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                        <td></td>
                                        <td colSpan={3}>
                                            <div className={classes.Event2}></div>
                                        </td>
                                        <td></td>
                                        <td colSpan={2}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td colSpan={6}>
                                            <div className={classes.Event2}></div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td colSpan={3}>
                                            <div className={classes.Event3}></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td colSpan={4}>
                                            <div className={classes.Event3}></div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td colSpan={4}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td colSpan={8}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                        <td></td>
                                        <td colSpan={3}>
                                            <div className={classes.Event3}></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={classes.AgentDetailContainer}>
                            <table className={classes.EventContainer}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <div className={classes.Events}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td colSpan={6}>
                                            <div className={classes.Event3}></div>
                                        </td>
                                        <td>
                                            <div className={classes.Event2}></div>
                                        </td>
                                        <td colSpan={2}>
                                            <div className={classes.Event1}></div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.AgentDetailFooter}>
                    <div className={classes.TimestampLabel}>
                        Time stamp
                    </div>
                    <div className={classes.TimestampContainer}>
                        <table>
                            <tbody>
                            <tr>
                                <td>5:15 <span className={[classes.Dot, classes.Success].join(" ")}></span></td>
                                <td>5:30 <span className={[classes.Dot, classes.Success].join(" ")}></span></td>
                                <td>5:45 <span className={[classes.Dot, classes.Warning].join(" ")}></span></td>
                                <td>6:00 <span className={[classes.Dot, classes.Danger].join(" ")}></span></td>
                                <td>6:15 <span className={[classes.Dot, classes.Danger].join(" ")}></span></td>
                                <td>6:30 <span className={[classes.Dot, classes.Warning].join(" ")}></span></td>
                                <td>6:45 <span className={[classes.Dot, classes.Success].join(" ")}></span></td>
                                <td>7:00 <span className={[classes.Dot, classes.Success].join(" ")}></span></td>
                                <td>7:15 <span className={[classes.Dot, classes.Success].join(" ")}></span></td>
                                <td>7:30 <span className={[classes.Dot, classes.Danger].join(" ")}></span></td>
                                <td>7:45 <span className={[classes.Dot, classes.Warning].join(" ")}></span></td>
                                <td>8:00 <span className={[classes.Dot, classes.Success].join(" ")}></span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        agentsList: state.agents.agentListArray
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadAgentList: () => dispatch(action.loadAgentList())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Agents);
