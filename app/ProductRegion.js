var React = require('react');
var Apron = require('./Apron');
var ProductInfo = require('./ProductInfo');
var productData = require('./productData');
require('./index.css');

class ProductRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.doParentToggle = this.doParentToggle.bind(this);
    }

    doParentToggle(_indexFromChild){
        this.setState({
          index: _indexFromChild
        })
      }

    render() {
        return (
            <div id="product-region">
        
                <div id="product-images">
                    <Apron parentToggle={this.doParentToggle}></Apron>
                </div>
                <div id="product-information">
                    <ProductInfo  info={productData} index={this.state.index} onUpdate={this.doParentToggle.bind(this)}></ProductInfo>
                </div>
            </div>
        )
    }
}

module.exports = ProductRegion;
