import React, {Component} from 'react';
import '../App.css'
import {getPosts} from "../store/actions/postActions";
import connect from "react-redux/es/connect/connect";
import ImgThumbnail from "../components/UI/ImgThumbnail";
import {NavLink} from "react-router-dom";


class Main extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    getAlbums = e => {
      console.log(e.target);
    };

    selectChangeHandler = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {
        return (
            <div className="App">
                {this.props.posts ? this.props.posts.map(item=><div className="post_thumbnail" key={item._id}>
                    <ImgThumbnail image={item.image}/>
                    <div>
                        {new Date(item.datetime).toLocaleString()}
                    </div>
                    <div>
                        {item.user.username}
                    </div>
                    <div className="post_text_div"><NavLink to={"/post_info/" + item._id} id={item._id}>{item.title}</NavLink></div>
                </div>) : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);