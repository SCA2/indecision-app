import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import RemoveAll from './RemoveAll';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = { 
    options: [],
    title: "Indecision",
    subtitle: "Put your life in the hands of a computer",
    selectedOption: undefined
  };

  addOptionCB = (option) => {
    if(!option) {
      return 'Please enter a valid option';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'Option already exists';
    }

    this.setState(state => ({ options: state.options.concat(option) }) );
  };

  removeOptionCB = (option) => {
    this.setState(state => (
      { options: this.state.options.filter(o => o !== option) })
    );
  };

  removeOptionsCB = () => {
    this.setState(() => ({ options: [] }) );
  };

  handlePickCB = () => {
    const choice = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[choice] }));
  };

  closeModalCB = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  componentDidMount() {
    try {
      const optionString = localStorage.getItem('options');
      const options = JSON.parse(optionString);
      if(options) {
        this.setState( () => ({ options: options }) );
      }
    } catch(e) {
      // swallow this error
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length != this.state.options.length) {
      const options = JSON.stringify(this.state.options);
      localStorage.setItem('options', options);
    }
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <div className="container">
          {this.state.options.length > 0 && <Action cb={this.handlePickCB}/>}
          <div className="widget-header">
            {this.state.options.length == 0 && <h3 className="wh-message">Please add an option to get started</h3> }
            {this.state.options.length > 0 && <h3 className="wh-h3">Your options</h3> }
            {this.state.options.length > 0 && <RemoveAll cb={this.removeOptionsCB}/>}
          </div>
          <div className="widget">
            <Options
              options={this.state.options}
              cb={this.removeOptionCB}
            />
            <AddOption cb={this.addOptionCB}/>
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModalCB={this.closeModalCB}
          />
      </div>
    );
  }
}

export default IndecisionApp;