"use strict";

var Link = require('react-router').Link;
var React = require('react');
var toastr = require('toastr');

var AuthorActions = require('../../actions/authorActions');

var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

	deleteAuthor: function(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    },

	render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td><Link activeClassName="active" to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.name}</td>
                </tr>
            );
        };

        return (
			<div>
            <table className="table">
                <thead>
                <th>&nbsp;</th>
                <th>ID</th>
                <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
			</div>
        );
    }
});

module.exports = AuthorList;