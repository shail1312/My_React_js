var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    var that = this;
    openWeatherMap.getTemp(location).then(function(){
      that.setState({
        location:location,
        temp:temp
      })
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },

  handleSearch: function (location) {
    this.setState({
      location:location,
      temp:23
    });
  },
  render: function () {
    var {temp, location} = this.state;
    return (
        <div>
          <h3>Weather Component</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          <WeatherMessage temp={temp} location={location} />
        </div>
    );
  }
});

module.exports = Weather;
