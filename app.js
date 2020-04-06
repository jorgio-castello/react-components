//Define a GroceryList JSX element
//This element return a UL, and maps over its props.list to generate LI items, passing value and key as props
let GroceryList = props => (
  <ul>
    {props.list.map((item, index) => <GroceryListItem key = {index} item = {item} />)}
  </ul>
);

//Define a GroceryItem JSX ES6 class
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    //State variables: done, hover
    this.state = {
      done: false,
      hover: false
    }
  }
  //Methods to Add: handleClicked, handleHover
  handleClicked(event) {
    this.setState({
      done: !this.state.done
    });
  }

  handleHover(event) {
    this.setState({
      hover: !this.state.hover
    });
  }

  //render LI element with style tag, key, value, and eventHandlers
  render() {
    //Include styles
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return (
      <li style = {style} onMouseEnter = {this.handleHover.bind(this)} onMouseLeave = {this.handleHover.bind(this)} onClick = {this.handleClicked.bind(this)} key = {this.props.key}>{this.props.item}</li>
    );
  }
};

ReactDOM.render(<GroceryList list = {['Coffee', 'Pasta', 'White Wine']} />, document.getElementById('app'));