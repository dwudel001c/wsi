var React = require('react');
var productData = require('./productData');

class ButtonAddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
     toggle: false

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var value = this.state.toggle;
    if (value) {
      value = false;
    } else {
      value = true;
    }

    this.setState(function () {
      return {
        toggle: value
      }
    });
  }

  // This method is needed to update the index as the index on the parent component changes.
  componentWillReceiveProps(newProps) {
    this.setState({ index: newProps.index , toggle:false});

  }

  render() {
    return (
      <div>
        {!this.state.toggle &&
          <button
            className='button'
            type='submit'
            onClick={this.handleClick}
          >
            Add To Cart &#9658;
        </button>
        }

        {this.state.toggle &&
          <div className="confirm-purchase">
            <span className="closebtn" onClick={this.handleClick}>&times;</span>
            A {productData[this.state.index].item} has been added to your Cart.
          </div>}
      </div>
    )
  }
}


module.exports = ButtonAddToCart;