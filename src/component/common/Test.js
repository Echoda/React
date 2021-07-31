import React, { Component } from 'react'
import Modal from './Modal'

// 控制朦层的展示和隐藏
export default class Test extends Component {
    state = {
        show: false
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                {this.state.show && 
                <Modal onClickModal={this.hideModal}> 
                    <div  style={{
                            background: '#fff'
                        }}>
                        <h1 style={{
                            margin: 0
                        }}>test modal content</h1>
                        <button onClick={this.hideModal}>隐藏朦层</button>
                    </div>
                </Modal>}
                <button onClick={this.showModal}>显示朦层</button>
            </div>
        )
    }
}
