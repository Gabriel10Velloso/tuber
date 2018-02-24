var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var SearchBar = require("./SearchBar/SearchBar");
var TableContainer = require("./Table/TableContainer");

var Main = React.createClass({

    render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-md-1 hidden-xs hidden-sm">
                      <img src="/public/img/logo.png" className="img-responsive logo-md"/>
                    </div>
                    <div className="col-md-offset-1 col-md-7 search-bar-padding">
                        <SearchBar />
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = Main;
