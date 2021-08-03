import React, { Component } from 'react'

// datas = [
//     {
//         text: '篮球',
//         value: 'basketball',
//     },
//     {
//         text: '足球',
//         value: 'football',
//     },
//     {
//         text: '排球',
//         value: 'volleyball',
//     }
// ]
// checkedDate:  默认选中的数据
// name: 

export default class Select extends Component {


    getOptions = () => {
        const { datas } = this.props;

        return datas.map((it) => {
            return (
                <option
                    value={it.value} 
                    key={it.value} 
                    >
                    {it.text}
                </option>)
        })
    }

    handleChange = (e) => {
        const { onChange, name} = this.props;
        const {value} = e.target;
        onChange && onChange(name, value, e);
    }

    render() {
        return (
            <select 
                name={this.props.name}
                onChange={this.handleChange}
                value={this.props.checkedDate}
            >
                {this.getOptions()}
            </select>
        )
    }
}
