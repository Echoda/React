import React, { Component } from 'react'
import PropTypes from 'prop-types';
import commomTypes from '../../../utils/commonPropTypes'
import DataListWrapper from '../../hoc/withDatasList'

// datas = 
//     {
//         text: '排球',
//         value: 'volleyball',
//     }
// checkedDate: 默认选中的数据
// name: 

class RadioBox extends Component {

    static propTypes = {
        data: commomTypes.singleDate.isRequired,
        checkedDate: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    getRadioBox = () => {
        const { data, checkedDate } = this.props;

        return (
            <>
                <label>{data.text}</label>
                <input 
                    type="radio" 
                    checked={checkedDate === data.value}
                    onChange={this.handleChange} 
                    value={data.value}/>
            </>
        )
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.props.onChange && this.props.onChange(this.props.name, value, e);
    }

    render() {
        return (
            <div name={this.props.name}>
                {this.getRadioBox()}
            </div>
        )
    }
}

export default DataListWrapper(RadioBox);