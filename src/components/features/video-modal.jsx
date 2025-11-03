import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { closeModal } from '../../actions';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement('#root');

class VideoModal extends Component {
    
    render() {
        const { showModal, modal, closeModal } = this.props;
        return (
            <Modal
                isOpen={ showModal && 'video' === modal }
                onRequestClose={ () => closeModal('video') }
                style={ customStyles }
                contentLabel="Video Modal"
                className="video-modal" 
                id="video-modal" >
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ () => closeModal('video')  }>
                    <span aria-hidden="true"><i className="icon-close"></i></span>
                </button> 
                <iframe className="mfp-iframe" src="//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1" frameBorder="0" allowFullScreen="" title="youtube"></iframe>
            </Modal>
        )
    }
}

export const mapStateToProps = ( state ) => ({
    showModal: state.demo.showModal,
    modal: state.demo.modal
})

export default connect( mapStateToProps, { closeModal } )( VideoModal );