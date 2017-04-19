var Greeter = React.createClass({
  getDefaultProps:function(){
    return {
      name:'React',
      message:'This is default message'
    };
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
      </div>
    );
  }
});
var firstname = 'Shailesh';
var message = 'I am a student';
ReactDOM.render(
  <Greeter name={firstname} message={message}/>,
  document.getElementById('app')
);
