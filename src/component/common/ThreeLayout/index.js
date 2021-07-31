import React, { Component } from 'react'
import './index.css'

export default class ThreeLayout extends Component {
    defaultProps = {
        leftWidth: 200,
        rightWight: 200,
        minWidth: 600, //main区域最小宽度
        gap: 0 //间隙
    }

    data = Object.assign(this.defaultProps, this.props);

    render() {
        return (
            <div className="threelayout">
                <div className="main" style={{
                    minWidth: this.data.minWidth,
                    marginLeft: this.data.gap,
                    marginRight: this.data.gap,
                }}>
                    {this.props.children}
                </div>
                <div className="left" style={{
                    width: this.data.leftWidth,
                }}>
                    {this.props.leftContent}
                </div>
                <div className="right" style={{
                    width: this.data.rightWight,
                }}>
                    {this.props.rightContent}
                </div>
            </div>
        )
    }
}
