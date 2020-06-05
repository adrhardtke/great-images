import React, { Component } from 'react';
import ImageCard from './ImageCard';
import './Images.css';

// import { Container } from './styles';

export default class Images extends Component {
  render() {
    return(
        <div className="images-list">
            {this.props.images.map(i => {return <ImageCard key={i.id} image={i} /> })}
        </div>    
    );
  }
}
