import React from 'react'
import './index.css'

export default function Modal(props) {

    const onClose = (e) => {
        if(e.target.className === 'modal'){
            props?.onClickModal()
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
