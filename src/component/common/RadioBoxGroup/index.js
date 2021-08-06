import React, { Component } from 'react'
import PropTypes from 'prop-types';
import commomTypes from '../../../utils/commonPropTypes'

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

export default class RadioBoxGroup extends Component {

    static propTypes = {
        datas: commomTypes.groupDatas.isRequired,
        checkedDate: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    getRadioBoxs = () => {
        const { datas, checkedDate } = this.props;

        return datas.map((it) => {
            return (
            <div key={it.value}>
                <label>{it.text}</label>
                <input 
                    type="radio" 
                    checked={checkedDate === it.value}
                    onChange={this.handleChange} 
                    value={it.value}/>
            </div>)
        })
    }

    handleChange = (e) => {
        const { onChange, name} = this.props;

        const {value} = e.target;
        onChange && onChange(name, value, e);
    }

    render() {
        return (
            <div name={this.props.name}>
                {this.getRadioBoxs()}
            </div>
        )
    }
}
