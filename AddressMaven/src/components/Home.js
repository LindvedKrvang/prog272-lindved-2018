import React, { Component } from 'react';
import AtSignImg from '../assets/atSign.png';

export default class Home extends Component {

    render(){
        return (
            <div align="center">
                <h1>Address Maven</h1>
                <h3>Welcome</h3>
                <p>This WebApp allows you to keep track of the addresses of senators in the United States.</p>
                <p>To get started - Please sync your database by going to 'Init Database' through the menu in the upper left corner.</p>
                <img src={AtSignImg} alt="At logo"/>
            </div>
        )
    }
}