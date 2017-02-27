var Counter = React.createClass({
    getInitialState: function() {
        return {
            count: 1
        }
    },
    addToCount: function() {
        this.setState({
            count : this.state.count + 1
        });
    },
    render: function() {
        return (
            <div id="Counter">
                <h3> {this.state.count} </h3>
                <button
                    className="btn btn-primary"
                    onClick={this.addToCount}>Add
                </button>
            </div>
        );
    }
});

ReactDOM.render(
    <Counter />,
    document.getElementById('app')
);
