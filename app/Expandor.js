
var React = require('react');

var productData = require('./productData');

require('./index.css');

class Expandor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            label: props.label,
            index: 0,
            content: 'dimensions'
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

    render() {
        return (
            <div>

                {!this.state.toggle &&
                    <button
                        className='expandor-button'
                        type='submit'
                        onClick={this.handleClick}
                    >

                        <img src="./app/assets/arrow-collapsed.png" />
                        {this.state.label}

                    </button>
                }

                {this.state.toggle &&
                    <button
                        className='expandor-button'
                        type='submit'
                        onClick={this.handleClick}
                    >

                        <img src="./app/assets/arrow-expanded.png" />
                        {this.state.label}

                    </button>
                }

                {this.state.toggle &&
                    <p rows="4" cols="20">
                        {this.props.detail}
                    </p>}
            </div>
        )
    }
}


module.exports = Expandor;


