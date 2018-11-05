import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import ProductsPageLayout from "./ProductsPageLayout";
import { composeValidators } from "./validators/utils";
import { required } from "./validators";
import AdminFormGen from "../components/admin/AdminFormGen";

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
                            formTitle='Give Feedback'
                            primaryButton='Submit'
                            onClickSubmit={onSubmit}
                        />
                    </Grid.Column>
                </Segment>
            </Grid>
        </ProductsPageLayout>
    )
;

export default Feedback