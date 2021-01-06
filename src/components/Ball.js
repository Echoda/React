import React, { Component } from 'react'
import './ball.css';

export default class Ball extends Component {

    constructor(props) {
        super(props);
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed || 300,
            ySpeed: props.ySpeed || 300
        }

        const duration = 16;

        setInterval(() => {
            // 处理边界情况
            if(this.state.left > document.documentElement.clientWidth - 100 || this.state.left < 0){
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if(this.state.top > document.documentElement.clientHeight - 100 || this.state.top < 0){
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }

            this.setState({
                left: this.state.left + this.state.xSpeed * duration / 1000,
                top: this.state.top + this.state.ySpeed * duration / 1000,
            });
        }, duration);
    }

    render() {
        return (
            <div className='ball' style={{
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.props.bg
            }}> 
            </div>
        )
    }
}
