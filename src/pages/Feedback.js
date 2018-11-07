import React from 'react'
import ProductsPageLayout from "./ProductsPageLayout";
import { composeValidators } from "./validators/utils";
import { required } from "./validators";
import FormGenerator from "../components/admin/FormGenerator";

const onSubmit = values => console.log('onSubmit', values);


const LoginInputMetadata = [
    {
        name: 'comment',
        validate: composeValidators(required),
        placeholder: 'Write your feedback here',
        type: 'textarea',
    },
];

const Feedback = () => (
        <ProductsPageLayout>
            <FormGenerator
                formInputMetadata={LoginInputMetadata}
                handleSubmit={onSubmit}
                formTitle='Give Us Feedback'
            />
        </ProductsPageLayout>
    )
;

export default Feedback