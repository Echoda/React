import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import commonTypes from '../../../utils/commonPropTypes';

export default class ThreeLayout extends Component {
    static defaultProps = {
        leftWidth: 200,
        rightWight: 200,
        minWidth: 600, //main区域最小宽度
        gap: 0 //间隙
    }

    static propTypes = {
        leftWidth: PropTypes.number,
        rightWight: PropTypes.number,
        minWidth: PropTypes.number,
        gap: PropTypes.number,
        children: commonTypes.children,
        leftContent: commonTypes.children,
        rightContent: commonTypes.children,
        
    }

    render() {
        return (
            <div className="threelayout">
                <div className="main" style={{
                    minWidth: this.props.minWidth,
                    marginLeft: this.props.gap,
                    marginRight: this.props.gap,
                }}>
                    {this.props.children}
                </div>
                <div className="left" style={{
                    width: this.props.leftWidth,
                }}>
                    {this.props.leftContent}
                </div>
                <div className="right" style={{
                    width: this.props.rightWight,
                }}>
                    {this.props.rightContent}
                </div>
            </div>
        )
    }
}
