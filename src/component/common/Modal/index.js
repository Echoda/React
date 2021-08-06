import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
import commonTypes from '../../../utils/commonPropTypes';


Modal.propTypes = {
    children: commonTypes.children,
    onClickModal: PropTypes.func
}

// 朦层组件，只用于展示，不会控制自身显示/隐藏状态
export default function Modal(props) {

    const onClose = (e) => {
        if(e.target.className === 'modal'){
            props.onClickModal && props.onClickModal()
        }
    }

    return  (
        <div className='modal'onClick={(e) => {onClose(e)}}>
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    )
}
