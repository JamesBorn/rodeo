import React from 'react';
import ReactDOM from 'react-dom';
import TourItem from './tour-item.jsx';
import $ from 'jquery';

export default React.createClass({
  displayName: 'Tour',
  propTypes: {
    onExitTour: React.PropTypes.func.isRequired,
    tourData: React.PropTypes.array.isRequired
  },
  componentDidMount: function () {
    $(ReactDOM.findDOMNode(this).querySelector('#tour')).owlCarousel({singleItem: true});
  },
  render: function () {
    let tourItems = this.props.tourData.map(function (item, i) {
      const props = item;

      return (
        <TourItem {...props}
          key={i}
        />
      );
    });

    return (
      <div className="text-center">
        <div id="tour">
          {tourItems}
        </div>
        <br />
        <button className="btn btn-primary"
          onClick={this.props.onExitTour}
        >
          {'Enough of this tour, let\'s start Rodeo!'}
        </button>
      </div>
    );
  }
});