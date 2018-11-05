import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import ProductsPageLayout from "./../ProductsPageLayout";
import { composeValidators } from "./../validators/utils";
import { required } from "./../validators";
import AdminFormGen from "../../components/admin/AdminFormGen";

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

const AddPizza = () => (
        <ProductsPageLayout>
            <Grid textAlign='center' style={{
                fontSize: '4em',
                marginBottom: '3.5em',
                marginTop: '3.5em',
                height: '100%'
            }} verticalAlign='middle'>
                <Segment>
                    <Grid.Column style={{maxWidth: 850}}>
                        <AdminFormGen
                            formInputMetadata={LoginInputMetadata}
                            formTitle='Add Pizza Details'
                            primaryButton='Submit'
                            onClickSubmit={onSubmit}
                        />
                    </Grid.Column>
                </Segment>
            </Grid>
        </ProductsPageLayout>
    )
;

export default AddPizza