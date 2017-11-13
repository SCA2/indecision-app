class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(state => { return { visible: !state.visible }});
  }

  render() {
    return(
      <div>
        <h2>Visibility Toggle</h2>
        <button onClick={this.handleToggle}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        <p>
          {this.state.visible && 'Details'}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));