var React = require('react');

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: 'COOKWARE',
            counter: 0
        };
    }

    render() {
        var menuitems = ['COOKWARE', 'COOKS\' TOOLS', 'CUTLERY', 'ELECTRICS', 'BAKE WARE', 'FOOD', 'TABLETOP & BAR', 'HOMEKEEPING','OUTDOOR', '|', 'SALE'];

        return (
            <ul className='menuitems'>
                {menuitems.map(function (menu) {
                    return (
                        <li
                            key={menu}>
                            {menu}
                        </li>
                    )
                })}
            </ul>
         )
    }
}

module.exports = Menu;
