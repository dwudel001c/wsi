var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.js');
var Apron = require('./Apron.js');
var ProductRegion = require('./ProductRegion.js');
var Menu = require('./Menu.js');

require('./index.css');

class App extends React.Component {

    render() {
       return ( <div>
        <Header></Header>
        <Menu></Menu>
        <ProductRegion></ProductRegion>
        </div>
               
       )
    }
}

ReactDOM.render (
<App />, document.getElementById('app')
);