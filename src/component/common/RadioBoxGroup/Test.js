import React, { Component } from 'react'
import RadioBoxGroup from './index'

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
        checkedDate: 'volleyball'
    }

    handleChange = (name, value, e) => {
        this.setState({
            checkedDate: value
        })
    }

    render() {
        return (
            <div>
                <RadioBoxGroup name='hoppy' onChange={this.handleChange} {...this.state} />
            </div>
        )
    }
}
