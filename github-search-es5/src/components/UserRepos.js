var React = require('react');

var UserRepos = React.createClass({
  getInitialState: function() {
    return {
      reposCount: 0,
      repos: []
    }
  },
  filterList: function(event) {
      var updatedList = this.props.repos;

      updatedList = updatedList.filter(function(item) {
        return item.description.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });

      this.setState({
          repos : updatedList,
          reposCount: updatedList.length
      });
  },
  componentWillReceiveProps: function(props) {
    this.setState({
        reposCount: props.repos.length,
        repos: props.repos
    });
  },
  render: function() {
    var repos = this.state.repos.map(function(repo, key) {
      return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h3>{repo.name}
              <span className="badge">{repo.stargazers_count} STARS</span>
            </h3>
            <p>{repo.description}</p>
            <p>
              <a
                 href={repo.html_url}
                 className="btn btn-primary"
                 role="button">
                 Repository
              </a>
              <a
                 href={repo.html_url + '/issues'}
                 className="btn btn-default"
                 role="button">
                 Issues ({repo.open_issues})
              </a>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2>{this.state.reposCount} repositories</h2>
        <div className="filter-list">
             <input
                 className="form-control"
                 type="text"
                 placeholder="Search repo"
                 onChange={this.filterList}
             />
             <br />
        </div>
        {repos}
      </div>
    );

  }
});

module.exports = UserRepos;
