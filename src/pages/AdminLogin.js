import React from 'react'
import { Grid } from 'semantic-ui-react'
import ResponsiveContainer from "./Layout";
import { SIGNUP } from "../constants/url-list";
import { composeValidators } from "./validators/utils";
import { required } from "./validators";
import FormGen from "../components/FormGen";

const onSubmit = values => console.log('onSubmit', values);

const LoginInputMetadata = [
    {
        name: 'email',
        validate: composeValidators(required),
        placeholder: 'Email address',
        icon: 'at',
        iconPosition: 'left',
        type: 'email',
    },
    {
        name: 'password',
        validate: composeValidators(required),
        placeholder: 'Password',
        icon: 'lock',
        iconPosition: 'left',
        type: 'password',
    }
];

const LoginForm = () => (
    <ResponsiveContainer>
        <Grid textAlign='center' style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
            height: '100%'
        }} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 450}}>
                <FormGen
                    formInputMetadata={LoginInputMetadata}
                    formTitle='ADMIN LOGIN PAGE'
                    formFooter='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                            odio.'
                    primaryButton='Login'
                    secondaryButton='Not an Admin? Sign Up Now'
                    secondaryLink={SIGNUP}
                    onClickSubmit={onSubmit}
            />
        </Grid.Column>
    </Grid>
</ResponsiveContainer>
)
;

export default LoginForm