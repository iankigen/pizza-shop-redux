import React from 'react'
import { connect } from 'react-redux';
import ProductsPageLayout from "./../ProductsPageLayout";
import { composeValidators } from "./../validators/utils";
import { required } from "./../validators";
import FormGenerator from "../../components/admin/FormGenerator";
import { categoryActions} from './../../actions/category'

const onSubmit = (props, values) => {
    props.addCategory(values, props.history);
};

const pizzaDetailsInputMetadata = [
    {
        name: 'name',
        validate: composeValidators(required),
        placeholder: 'Category',
        type: 'text',
    },
];

const AddCategory = (props) => (
        <ProductsPageLayout>
            <FormGenerator
                formInputMetadata={pizzaDetailsInputMetadata}
                handleSubmit={(value) => onSubmit(props, value)}
                loading={props.category.loading}
                formTitle='Add Category'
            />
        </ProductsPageLayout>
    )
;


const mapDispatchToProps = dispatch => ({
    addCategory: (value, history) => dispatch(categoryActions.addCategory(value, history)),
    getCategory: (id, history) => dispatch(categoryActions.getCategory(id, history))
});

const mapStateToProps = ({category}) => ({
    category,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);