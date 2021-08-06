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
// checkedDates: [] 默认选中的数据
// name: 

export default class CheckBoxGroup extends Component {

    static propTypes = {
        datas: commomTypes.groupDatas.isRequired,
        checkedDates: PropTypes.array,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }


    getCheckBoxs = () => {
        const { datas, checkedDates = []} = this.props;

        return datas.map((it) => {
            return (
            <div key={it.value}>
                <label>{it.text}</label>
                <input 
                    type="checkbox" 
                    checked={checkedDates?.includes(it.value)}
                    onChange={this.handleChange} 
                    value={it.value}/>
            </div>)
        })
    }

    handleChange = (e) => {
        const { onChange, checkedDates = [], name} = this.props;

        const {checked: isChecked, value} = e.target;
        let newCheckedDatas;
        if(isChecked) {
            newCheckedDatas = [...checkedDates, value]
            console.log(checkedDates, value, newCheckedDatas);
        } else {
            newCheckedDatas = checkedDates.filter((it) => it !== value)
        }
        // console.log(isChecked, value, newCheckedDatas);
        onChange && onChange(name, newCheckedDatas, e);
    }

    render() {
        return (
            <div name={this.props.name}>
                {this.getCheckBoxs()}
            </div>
        )
    }
}
