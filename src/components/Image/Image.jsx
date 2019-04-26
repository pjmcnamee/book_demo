import React, { Component } from 'react'
import { withController } from 'react-scroll-parallax';

export class Image extends Component {

    componentDidMount(){
        this.handleLoad()
    }

	handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };
 
    render() {
        return <img style={{width: '100%'}} src={this.props.src} onLoad={this.handleLoad} />;
    }
}

export default withController(Image)

