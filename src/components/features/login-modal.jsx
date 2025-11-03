import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
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

class LoginModal extends Component {
    
    constructor( props ) {
        super( props );

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        document.getElementById("login-modal").classList.remove("ReactModal__Content--after-open");
        
        this.timer = setTimeout( () => {
            this.props.closeModal('login');
        }, 200);
    }

    componentWillUnmount() {
        if ( this.timer ) clearTimeout( this.timer );
    }

    render() {
        const { showModal, modal } = this.props;
        return (
            <Modal
                isOpen={ showModal && 'login' === modal }
                onRequestClose={ this.closeModal }
                style={ customStyles }
                contentLabel="Login Modal"
                className="modal-dialog modal-dialog-centered" 
                id="login-modal" >
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ this.closeModal  }>
                            <span aria-hidden="true"><i className="icon-close"></i></span>
                        </button> 
                        <div className="form-box">
                            <div className="form-tab">
                                <Tabs selectedTabClassName="show" defaultIndex = {0 }>
                                    <TabList className="nav nav-pills nav-fill">
                                        <Tab className="nav-item">
                                            <span className="nav-link">Sign In</span>
                                        </Tab>

                                        <Tab className="nav-item">
                                            <span className="nav-link">Register</span>
                                        </Tab>
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel style={ {paddingTop: "2rem"} }>
                                            <div>
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="singin-email-2">Username or email address *</label>
                                                    <input type="text" className="form-control" id="singin-email-2" name="singin-email" required/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="singin-password-2">Password *</label>
                                                    <input type="password" className="form-control" id="singin-password-2" name="singin-password" required/>
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember-2"/>
                                                        <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
                                                    </div>
                                                    
                                                    <a href="pages/login/#a" className="forgot-link">Forgot Your Password?</a>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="pages/login/#a" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="pages/login/#a" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </TabPanel>
                                        
                                        <TabPanel>
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="register-email-2">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email-2" name="register-email" required/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-password-2">Password *</label>
                                                    <input type="password" className="form-control" id="register-password-2" name="register-password" required/>
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required/>
                                                        <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="pages/login/#a">privacy policy</a> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="pages/login/#a" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="pages/login/#a" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export const mapStateToProps = ( state ) => ({
    showModal: state.demo.showModal,
    modal: state.demo.modal
})

export default connect( mapStateToProps, { closeModal } )(LoginModal);