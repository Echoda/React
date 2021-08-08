import React, { Component } from 'react'
import PropTypes from 'prop-types';
import commomTypes from '../../../utils/commonPropTypes'
import DataListWrapper from '../../hoc/withDatasList'

// data = {
//         text: '排球',
//         value: 'volleyball',
// }
// checkedDate:  默认选中的数据
// name: 

class Option extends Component {
    
    static propTypes = {
        data: commomTypes.singleDate.isRequired,
        checkedDate: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    getOption = () => {
        const { data } = this.props;

        return (
            <option
                value={data.value} 
                key={data.value} 
                >
                {data.text}
            </option>
        )
    }

    render() {
        return (
            <>
                {this.getOption()}
            </>
        )
    }
}


const Options = DataListWrapper(Option);

export default class Select extends Component {
    render() {
        return (
            <select 
                name={this.props.name}
                onChange={this.props.onChange}
                value={this.props.checkedDate}
            >
                <Options {...this.props} />
            </select>
        )
    }
}


