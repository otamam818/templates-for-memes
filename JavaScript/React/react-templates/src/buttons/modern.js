/** @fileoverview
 *  Minimal React component for a modern-styled button
 */
import React from 'react';

function ModernButton(props) {
    return (
        <button
          className="modern-button"
          onClick={props.onClick}
        >Hi there</button>
    )
}

export default ModernButton;

