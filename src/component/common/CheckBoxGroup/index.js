import React, { Component } from 'react'
import PropTypes from 'prop-types';
import commomTypes from '../../../utils/commonPropTypes'
import DataListWrapper from '../../hoc/withDatasList'

// data = {
//         text: '篮球',
//         value: 'basketball',
// }
// checkedDates: [] 默认选中的数据
// name: 

class CheckBox extends Component {

    static propTypes = { // prop来自HOC转发自Test
        data: commomTypes.singleDate.isRequired,
        checkedDates: PropTypes.array,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }


    getCheckBox = () => {
        const { checkedDates = [], data} = this.props;

        return (
            <>
                <label>{data.text}</label>
                <input 
                    type="checkbox" 
                    checked={checkedDates?.includes(data.value)}
                    onChange={this.handleChange} 
                    value={data.value}/>
            </>
        )
    }

    handleChange = (e) => {
        const { onChange, checkedDates = [], name} = this.props;

        const {checked: isChecked, value} = e.target;
        const newCheckedDatas = isChecked ?  [...checkedDates, value] : checkedDates.filter((it) => it !== value);
        onChange && onChange(name, newCheckedDatas, e);
    }

    render() {
        return (
            <div name={this.props.name}>
                {this.getCheckBox()}
            </div>
        )
    }
}

export default DataListWrapper(CheckBox);

