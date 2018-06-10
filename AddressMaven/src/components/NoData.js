import React, { Component } from 'react';
import NoDataImg from '../assets/sorry.png';

export default class NoData extends Component{

    render(){
        return (
            <div align="center">
                <h3>No data available</h3>
                <p>Please sync your database.</p>
                <img src={NoDataImg} alt="No data found"/>
            </div>
        );
    }
}