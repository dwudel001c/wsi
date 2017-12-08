var React = require('react');
require('./index.css');

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {

        var value = event.target.value;

        this.setState(function () {
            return {
                counter: this.state.counter + 1
            }
        });

    }

    render() {
       
        return (
            <div id="williams-sonoma">
            <img src="./app/assets/logo.png" />
        </div>
         )
    }
}

module.exports = Header;
