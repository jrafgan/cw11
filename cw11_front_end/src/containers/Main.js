import React, {Component} from 'react';
import '../App.css'
import {getCategories, getPosts, getProducts} from "../store/actions/productActions";
import connect from "react-redux/es/connect/connect";
import ImgThumbnail from "../components/UI/ImgThumbnail";
import {NavLink} from "react-router-dom";
import ProductThumbnail from "../components/UI/ProductThumbnail";


class Main extends Component {

    componentDidMount() {
        this.props.getCategories();
        this.props.getProducts();
    }

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
                <div className="categories_div">
                    <p>Categories</p>
                    {this.props.categories ? this.props.categories.map(item => <NavLink to={"/category/" + item._id}
                                                                                        key={item._id}>{item.title}</NavLink>
                    ) : null}
                </div>
                <div className="product_thumbnail_div">
                    {this.props.products ? this.props.products.map(item => <ProductThumbnail
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        alt={item.title}
                        title={item.title}
                        price={item.price}
                    />) : null}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.products.categories,
    products: state.products.products,
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);