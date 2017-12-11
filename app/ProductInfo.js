var React = require('react');
var ButtonAddToCart = require('./ButtonAddToCart');
var Expandor = require('./Expandor');
var productData = require('./productData');
var QuantityWidget = require('./QuantityWidget');

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productPrice: 19.95,
            index: props.index,
            info: props.info
        };
    }

    // This method is needed to update the index as the index on the parent component changes.
    componentWillReceiveProps(newProps) {
        this.setState({ index: newProps.index });
    }


    render() {

        return (
            <div id="product-info">
                <div id="product-name">
                    Williams Sonoma Classic Apron, {productData[this.state.index].title}

                </div>
                <div>
                    <p>
                        {this.state.info[this.state.index].detail}

                    </p>
                    <ul>
                        <li>{productData[this.state.index].bullet1}</li>
                        <li>{productData[this.state.index].bullet2}</li>
                        <li>{productData[this.state.index].bullet3}</li>
                        <li>{productData[this.state.index].bullet4}</li>
                    </ul>
                </div>
                <div id="product-quantity"><QuantityWidget></QuantityWidget></div>
                <div id="product-price">${productData[this.state.index].price}</div>
                <div>
                
                    <ButtonAddToCart index={this.state.index}></ButtonAddToCart>
                </div>
                <div className="expanded-info">
                    <Expandor label="DIMENSIONS" detail={productData[this.state.index].dimensions}></Expandor>
                    <Expandor label="OPTIONS" detail={productData[this.state.index].options}></Expandor>
                    <Expandor label="SHIPPING" detail={productData[this.state.index].shipping}></Expandor>
                </div>
            </div>
        )
    }
}

module.exports = ProductInfo;
