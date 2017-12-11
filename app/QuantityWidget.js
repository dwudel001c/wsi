// <input type="number" name="quantity" min="1" max="5"><br>
var React = require('react');
//var productData = require('./productData');

class QuantityWidget extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: 1
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      var value = event.target.value;
  
      this.setState(function () {
        return {
            quantity: value
        }
      });
    }
    handleSubmit(event) {
      event.preventDefault();
  
      this.props.onSubmit(
        this.state.quantity
      );
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
         
         <input  type="number" name="quantity" min="1" max="5" onChange={this.handleChange}   value={this.state.quantity} />
         
        </form>
      )
    }
  }

  module.exports = QuantityWidget;
  