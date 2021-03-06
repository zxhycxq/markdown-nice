import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import "../common.css";

@inject("dialog")
@observer
class Document extends Component {
  handleClick = () => {
    const w = window.open("about:blank");
    w.location.href = "https://docs.mdnice.com";
  };

  render() {
    return (
      <div className="nice-menu-item" onClick={this.handleClick}>
        <span>
          <span className="nice-menu-flag" />
          <span className="nice-menu-name">更多文档</span>
        </span>
      </div>
    );
  }
}

export default Document;
