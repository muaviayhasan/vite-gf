import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

export default class ProductLightBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phIndex: 0
        }
    }

    render() {
        const { product, isOpen } = this.props;
        const { phIndex } = this.state;
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;

        return (
            <React.Fragment>
                {isOpen && (
                    <Lightbox
                        mainSrc={ bigImages[phIndex] }
                        nextSrc={ bigImages[(phIndex + 1) % bigImages.length] }
                        prevSrc={ bigImages[(phIndex + bigImages.length - 1) % bigImages.length] }
                        onCloseRequest={ this.closeLightBox}
                        onMovePrevRequest={ () =>
                        this.setState({
                            phIndex: (phIndex + bigImages.length - 1) % bigImages.length,
                        })
                        }
                        onMoveNextRequest={ () =>
                            this.setState({
                                phIndex: (phIndex + 1) % bigImages.length,
                            })
                        }
                    />
                ) }
            </React.Fragment>
        )
    }
}
