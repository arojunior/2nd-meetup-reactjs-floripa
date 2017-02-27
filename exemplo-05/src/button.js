var React = require('react');

var MyButton = React.createClass({
    getInitialState: function() {
        return {
            counter : 0
        };
    },
    handleClick: function() {
        this.setState({
            counter : this.state.counter + 1
        });
    },
    render: function() {
        return (
            <div className="MyButton">
                <h3>{this.state.counter}</h3>
                <button className="btn btn-primary" onClick={this.handleClick}> {this.props.name} </button>
            </div>
        );
    }
});

module.exports = MyButton;
