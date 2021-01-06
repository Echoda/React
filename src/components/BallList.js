import React, { Component } from 'react';
import Ball from './Ball';
import { getRandom } from '../util';

export default class BallList extends Component {

    constructor(props){
        super(props);
        this.state = {
            ballArr: []
        };

        const timer = setInterval(() => {
            this.setState({
                ballArr: [...this.state.ballArr,
                    {
                        key: this.state.ballArr.length,
                        left: getRandom(0, document.documentElement.clientWidth - 100),
                        top: getRandom(0, document.documentElement.clientHeight - 100),
                        xSpeed: getRandom(200, 400),
                        ySpeed: getRandom(200, 400),
                        bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
                    }
            ]
            })
            this.state.ballArr.length >= 8 && clearInterval(timer);
        }, 1000);
    }

    render() {
        return (
            <div>
                { this.state.ballArr.map((it, i) => {
                    return <Ball key={i} {...it} />
                }) }
            </div>
        )
    }
}
