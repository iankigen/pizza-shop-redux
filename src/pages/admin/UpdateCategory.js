import React from 'react'
import ProductsPageLayout from "./../ProductsPageLayout";
import { composeValidators } from "./../validators/utils";
import { required } from "./../validators";
import FormGenerator from "../../components/admin/FormGenerator";

const onSubmit = values => console.log('onSubmit', values);


const pizzaDetailsInputMetadata = [
    {
        name: 'category',
        validate: composeValidators(required),
        placeholder: 'Category',
        type: 'text',
    },
];

const UpdateCategory = () => (
        <ProductsPageLayout>
            <FormGenerator
                formInputMetadata={pizzaDetailsInputMetadata}
                handleSubmit={onSubmit}
                formTitle='Update Category'
            />
        </ProductsPageLayout>
    )
;

export default UpdateCategory;