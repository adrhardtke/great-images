import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import Images from './components/Images'
import { searchPhotos } from './components/AppApi'

class App extends Component {

  state = {images:[]}

  onSearchSubmit = async text => {
    const response = await searchPhotos(text);
    this.setState({images: response.data.hits})
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <div className="images-container">
          <Images images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
