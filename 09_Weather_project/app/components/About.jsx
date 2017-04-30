var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
    return (
      <div >
        <h1 className="text-center">About</h1>
        <p>This is my first React application. I develop this application for learning React.</p>
        <p>Here are some tools i use.</p>
        <ul>
          <li>React.</li>
          <li>Open weather maps.</li>
        </ul>
      </div>
    );
  };

module.exports = About;
