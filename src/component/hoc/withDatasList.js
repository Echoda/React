import commonTypes from '../../utils/commonPropTypes'
import React, { Component } from 'react'

// 通过一组数据生成一组相同结构的元素
export default function withDatasList(Comp) {
    return class DatasListWrapper extends Component {

        static defaultProps = { // prop来自Test
            datas: []
        }

        static propTypes = {
            datas: commonTypes.groupDatas
        }

        render() {
            return (this.props.datas.map((it) => {
                    return <Comp key={it.value} data={it} {...this.props} />
                })
            )
        }
    }
    
}

