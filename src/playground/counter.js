class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    try {
      const countString = localStorage.getItem('count');
      const count = parseInt(countString, 10);
      if(!isNaN(count)) { this.setState( () => ({count}) ); }
    } catch(e) {
      this.setState(() => ({count: 0}));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count != this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handlePlusOne() {
    this.setState(state => { return { count: state.count + 1 }});
  }

  handleMinusOne() {
    this.setState(state => { return { count: state.count - 1 }});
  }

  handleReset() {
    this.setState(() => { return { count: 0 }});
  }

  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));