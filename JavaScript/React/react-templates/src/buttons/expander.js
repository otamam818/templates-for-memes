/** @fileoverview
 *  A button that expands to show other buttons in the DOM
 *  based on the data it carries
 */

import React from 'react';
import ModernButton from './modern.js';

class ExpanderButton extends React.Component {
    constructor(props) {
        super(props)
        this.childrenRef = React.createRef();
        this.state = {
            buttons: [],
        };
    }

    addButton() {
        const buttons = this.state.buttons.slice();
        buttons.push(<ModernButton key={buttons.length}>Hello World</ModernButton>);
        this.setState({ buttons: buttons });
    }

    render() {
        const buttons = this.state.buttons;
        return (
            // Where the button has a parent DIV followed by the ability to
            // create a list of children divs
            <div className="expanderButton">
              <ModernButton 
                onClick={() => this.addButton()}
              />
              <div className="children" ref={this.childrenRef}>
                {buttons}
              </div>
            </div>
        );
    }
}

export default ExpanderButton;

