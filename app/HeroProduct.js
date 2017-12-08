var React = require('react');

class HeroProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: props.HeroImage

        };
    }


    render() {
 
        return (
            <div className="hero">
          
                <img src={this.props.heroImage} height='355'
                    alt="hero-image"  />              

            </div>

        )
    }
}

module.exports = HeroProduct;
