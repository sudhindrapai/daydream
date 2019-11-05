import React, {Component,Fragment} from 'react';
import classes from './Tooltip.module.css';

class tooltip extends Component{

    state={
        isTooltipVisible:true
    };

    containerClasses = [classes.Container, classes.Hide].join(" ");

    toggleTooltipVisibility = () => {
      this.setState({
          isTooltipVisible: !(this.state.isTooltipVisible)
      });

      if(this.state.isTooltipVisible){
          this.containerClasses = [classes.Container, classes.Show].join(" ");
      } else {
          this.containerClasses = [classes.Container, classes.Hide].join(" ");
      }

    };

    render() {
        return (
            <Fragment>
                <div className={this.containerClasses}>
                    <div className={[classes.Tooltip, classes.Left].join(" ")}>{this.props.description}</div>
                    <div className={[classes.Arrow, classes.ArrowLeft].join(" ")} />
                </div>
                <div onMouseEnter={this.toggleTooltipVisibility} onMouseLeave={this.toggleTooltipVisibility}
                     className={classes.TooltipValue}>{this.props.children}</div>
            </Fragment>
        )
    }
}

export default tooltip
