import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsPageLayout from "./../ProductsPageLayout";
import { composeValidators } from "./../validators/utils";
import { required } from "./../validators";
import FormGenerator from "../../components/admin/FormGenerator";
import { categoryActions } from "../../actions/category";
import { category } from "../../reducers/category";
import { pizzaActions } from "../../actions/pizza";

const pizzaDetailsInputMetadata = [
    {
        name: 'name',
        validate: composeValidators(required),
        placeholder: 'Name',
        type: 'text',
    },
    {
        group: [
            {
                name: 'price',
                validate: composeValidators(required),
                placeholder: 'Price',
                type: 'number',
            },
            {
                name: 'category',
                placeholder: 'Category',
                type: 'select',
            },
        ]
    },
    {
        name: 'ingredients',
        validate: composeValidators(required),
        placeholder: 'Ingredients',
        type: 'textarea',
    },
    {
        name: 'image',
        placeholder: 'Image',
        type: 'file',
    },
];

class AddPizza extends Component {
    componentDidMount(){
        this.props.categories()
    }

    onSubmit = values => this.props.postPizza(values, this.props.history);

    serializeCategories = ({categories}) => {
        const all_cat = [];
        categories.map((category) => {
            category['text'] = category.name;
            category['value'] = category.id;
            all_cat.push(category)
        });
        return all_cat
    };

    render() {
        const { loading } = this.props.pizza;
        const categories = this.serializeCategories(this.props.category);
        return (
            <ProductsPageLayout>
                <FormGenerator
                    formInputMetadata={pizzaDetailsInputMetadata}
                    handleSubmit={this.onSubmit}
                    formTitle='Add Pizza Details'
                    options={categories}
                    loading={loading}
                />
            </ProductsPageLayout>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    categories: () => dispatch(categoryActions.getCategory()),
    postPizza: (data, history) => dispatch(pizzaActions.postPizza(data, history))
});

const mapStateToProps = state => ({
    category: state.category,
    pizza: state.pizza
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPizza);