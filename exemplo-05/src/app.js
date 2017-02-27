var React = require('react');
var Hello = require('./hello');
var MyButton = require('./button');

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Hello />
                <MyButton name="Meu botão" />
            </div>
        );
    }
});

module.exports = App;
