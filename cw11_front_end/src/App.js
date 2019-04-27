import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Main from "./containers/Main";
import AddProduct from "./containers/AddProduct";
import CategoryProducts from "./containers/CategoryProducts";
import Layout from "./components/Layout";
import Register from "./containers/Register";
import Login from "./containers/Login";
import {connect} from "react-redux";
import {logoutUser} from "./store/actions/usersActions";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Layout user={this.props.user} logout={this.props.logoutUser}/>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/category/:id" exact component={CategoryProducts} />
                        <Route path="/add_product" exact component={AddProduct} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));