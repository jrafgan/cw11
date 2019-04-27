import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ImgThumbnail from "../components/UI/ImgThumbnail";
import {createComment, getCommentsByPost} from "../store/actions/postActions";

class PostInfo extends Component {

    state = {
        comment: '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getComments(id);
    }

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitFormHandler = e => {
        e.preventDefault();
        console.log('this is comment submit');
        this.props.createComment({...this.state, post: this.props.comments[0].post._id});

    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (
            <div>
                {this.props.comments ? <div className="post_thumbnail">
                    <ImgThumbnail image={this.props.comments[0].post.image}/>
                    <div>
                        {this.props.comments[0].post.datetime}
                    </div>
                    <div>
                        {this.props.comments[0].user.username}
                    </div>
                    <div className="post_text_div">
                        {this.props.comments[0].post.title}
                    </div>
                    <div className="post_text_div">
                        {this.props.comments[0].post.description}
                    </div>
                </div> : null}
                <div>
                    <p>Comments</p>
                    {this.props.comments ? this.props.comments.map(item => <div className="comments_list_div"
                                                                                key={item._id}>
                        <span>{new Date(item.datetime).toLocaleString()}</span>
                        <span>{item.user.username}</span>
                        <p className="comments_list_p">{item.comment}</p>
                    </div>) : null}
                </div>
                {this.props.user ? <div className="comment_form_div">
                    <form onSubmit={this.submitFormHandler} className="comment_form">
                        <label htmlFor="description">Comment</label>
                        <textarea
                            className="textarea"
                            id="comment"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.inputChangeHandler}
                            style={this.props.error ? {"background": "red"} : null}/>
                        <button type="submit">Comment</button>
                    </form>
                </div> : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.posts.post,
    comments: state.posts.comments,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    getComments: postId => dispatch(getCommentsByPost(postId)),
    createComment: commentData => dispatch(createComment(commentData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);