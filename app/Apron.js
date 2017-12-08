var React = require('react');
var HeroProduct = require('./HeroProduct');
var productData = require('./productData');

class Apron extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroImage: productData[0].image,
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
    }

    doParentToggleFromChild() {
        this.props.parentToggle(this.state.counter)
    }

    handleClick(event) {

        var number = parseInt( event, 10 ) 
        var image = productData[number].image; 

        this.setState(function () {
            var newState = {
                heroImage:image,
                counter:number
            };
           
            return newState;
          })
          this.props.parentToggle(number);
    }

    render() {
        var count = this.state.counter;

        return (
            <div>
                <HeroProduct heroImage={this.state.heroImage} ></HeroProduct>
                <ul className='apron-thumbnail'>
                    {productData.map(function (productData) {
                        return (
                            <li key={productData.productId}>
                                <img src={productData.imageThumbnail} alt='pick me' onClick={() => this.handleClick(productData.productId)} />
                            </li>

                        )
                    }, this)}
                </ul>

            </div>

        )
    }
}

module.exports = Apron;
