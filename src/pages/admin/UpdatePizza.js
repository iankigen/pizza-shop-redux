import React from 'react'
import ProductsPageLayout from "./../ProductsPageLayout";
import { composeValidators } from "./../validators/utils";
import { required } from "./../validators";
import FormGenerator from "../../components/admin/FormGenerator";

const onSubmit = values => console.log('onSubmit', values);

const options = [
    {key: 'n', text: 'Veg', value: 'Veg'},
    {key: 'nv', text: 'Non Veg', value: 'Non Veg'},
];

const LoginInputMetadata = [
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
                options: options
            },
        ]
    },
    {
        name: 'ingredients',
        validate: composeValidators(required),
        placeholder: 'Ingredients',
        type: 'textarea',
    },
];

const UpdatePizza = () => (
        <ProductsPageLayout>
            <FormGenerator
                formInputMetadata={LoginInputMetadata}
                handleSubmit={onSubmit}
                formTitle='Update Pizza Details'
                options={options}
            />
        </ProductsPageLayout>
    )
;

export default UpdatePizza