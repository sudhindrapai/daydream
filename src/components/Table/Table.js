import React from 'react';
import classes from './Table.css';

const table = (props) => {
    let tableLineItemsArray = [];

    for (let i=0; i<props.tableLength; i++) {
        let tableBodyObj = {};
        for(let j=0;j<(props.tableHeader).length; j++){
            let bodyObjKey = props.tableHeader[j];
            let bodyArray = (props.tableBody)[bodyObjKey];
            tableBodyObj[bodyObjKey] = bodyArray[i];
        }
        tableLineItemsArray.push(tableBodyObj);
    }

    let tableHeader = (props.tableHeader).map((headerLabel,index) => {
        let label = headerLabel.split("_").join(" ");
       return(<th className={classes.TableHeaderTag} key={index}>{label}</th>)
    });

    let tableBody = tableLineItemsArray.map((lineItemObj,index) => {
        let rows = (props.tableHeader).map((key,index)=>{
            return (<td className={classes.TableBodyTag}  key={index}>{lineItemObj[key]}</td>)
        });
        return(<tr key={index}>{rows}</tr>)
    });

    return(
        <div className={classes.Container}>
            <table className={props.tableClassName} >
                <thead>
                <tr>{tableHeader}</tr>
                </thead>
                <tbody>{tableBody}</tbody>
            </table>
        </div>
    )
};

export default table;
