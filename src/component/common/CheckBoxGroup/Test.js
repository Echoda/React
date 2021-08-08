import React, { Component } from 'react'
import CheckBoxGroup from './index'

export default class Test extends Component {
    state = {
        datas: [
            {
                text: '篮球',
                value: 'basketball',
            },
            {
                text: '足球',
                value: 'football',
            },
            {
                text: '排球',
                value: 'volleyball',
            }
        ],
        checkedDates: ['football']
    }

    handleChange = (name, datas, e) => {
        this.setState({
            checkedDates: datas
        })
    }

    render() {
        return (
            <CheckBoxGroup name='hoppy' onChange={this.handleChange} {...this.state} />
        )
    }
}