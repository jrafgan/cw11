import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Main from "./containers/Main";
import NewPost from "./containers/AddPost";
import PostInfo from "./containers/PostInfo";
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
                        <Route path="/add_post" exact component={NewPost} />
                        <Route path="/post_info/:id" exact component={PostInfo} />
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