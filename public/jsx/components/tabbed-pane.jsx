import React from 'react';
import TabbedPaneItem from './tabbed-pane-item.jsx';

export default React.createClass({
  displayName: 'TabbedPane',
  getInitialState: function () {
    return {
      activeIndex: 0
    };
  },
  handleSelectTab: function (i) {
    this.setState({
      activeIndex: i
    });
  },
  render: function () {
    const activeIndex = this.state.activeIndex;
    let children, tabList;

    // todo: should be using this.props.children instead???

    tabList = React.Children.map(this.props.children, function (child, i) {
      const activeClassPath = i === activeIndex ? 'active' : '',
        className = child.props.icon && 'fa fa-' + child.props.icon;

      return (
        <li className={activeClassPath} key={i}>
          <a data-toggle="tab" onClick={this.handleSelectTab.bind(this, i)}>
            <span className={className}/>{child.props.label}
          </a>
        </li>
      );
    }.bind(this));

    children = React.Children.map(this.props.children, function (child, i) {
      if (child.type === TabbedPaneItem) {
        return React.cloneElement(child, { active: i === activeIndex });
      } else {
        return child;
      }
    });

    return (
      <div className="tabbed-pane">
        <ul className="nav nav-tabs">{tabList}</ul>
        <div className="tab-content">{children}</div>
      </div>
    );
  }
});