import React, { Component } from 'react';
import './SearchBar.css'

// import { Container } from './styles';

export default class SearchBar extends Component {
    
    state = {
        text: ''
    }

    onFormSubmit = evento => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }
  
    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="header">
                            <img src="https://img.icons8.com/pastel-glyph/2x/search.png" alt="search image"/>
                            <label htmlFor="">Search Great Images <span>(by adrhardtke)</span></label>
                        </div>
                        <input type="text" value={this.state.text} placeholder="Type something" onChange={e => this.setState({text: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}
