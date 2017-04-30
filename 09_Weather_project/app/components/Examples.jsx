var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>{
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Raipur'>Raipur, CG</Link>
        </li>
        <li>
          <Link to='/?location=Durg'>Durg, CG</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
