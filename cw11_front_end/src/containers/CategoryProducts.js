import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ImgThumbnail from "../components/UI/ImgThumbnail";
import {createComment, getCategories, getProducts, getProductsByCategory} from "../store/actions/productActions";
import ProductThumbnail from "../components/UI/ProductThumbnail";
import {NavLink} from "react-router-dom";

class CategoryProducts extends Component {

    state = {
        comment: '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getProducts(id);
        this.props.getCategories();
    }

    getProducts = () => {
        const id = this.props.match.params.id;
        this.props.getProducts(id);
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (
            <div className="App">
                <div className="categories_div">
                    <p>Categories</p>
                    {this.props.categories ? this.props.categories.map(item => <NavLink to={"/category/" + item._id}
                                                                                        key={item._id} onClick={this.getProducts}>{item.title}</NavLink>
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
    products: state.products.products,
    categories: state.products.categories,
});

const mapDispatchToProps = dispatch => ({
    getProducts: categoryId => dispatch(getProductsByCategory(categoryId)),
    getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);