var React = require("react");
var classNames = require("classnames");

var Id = React.createClass({

    render: function() {
        var classes = classNames({
            "glyph glyphicon": true,
            "glyphicon-triangle-bottom": this.props.orderByDesc,
            "glyphicon-triangle-top": !this.props.orderByDesc
        });
        return (
            <th>Download Url
            </th>
        );
    }
});

module.exports = Id;
