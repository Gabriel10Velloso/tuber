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
                    <div className="col-md-1 navbar-brand hidden-xs hidden-sm">
                        <a href="#">
                            <img src="/public/img/logo.png" className="img-responsive"/>
                        </a>
                    </div>
                    <div className="container">
                        <div className="search-bar-padding padding-left-right">
                            <SearchBar />
                        </div>
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
