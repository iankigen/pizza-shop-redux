import React from 'react'
import { Grid } from 'semantic-ui-react'
import ResponsiveContainer from "./Layout";
import { composeValidators } from "./validators/utils";
import { required } from "./validators";
import FormGen from "../components/FormGen";
import { LOGIN } from "../constants/url-list";

const onSubmit = values => console.log('onSubmit', values);

const SignUpInputMetadata = [
    {
        name: 'fName',
        validate: composeValidators(required),
        placeholder: 'Full Name',
        icon: 'user',
        iconPosition: 'left',
        type: 'text',
    },
    {
        name: 'email',
        validate: composeValidators(required),
        placeholder: 'Email Address',
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
    },
    {
        name: 'cPassword',
        validate: composeValidators(required),
        placeholder: 'Confirm Password',
        icon: 'lock',
        iconPosition: 'left',
        type: 'password',
    }
];
const SignUp = () => (
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
                    formInputMetadata={SignUpInputMetadata}
                    formTitle='SIGN UP PAGE'
                    formFooter='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                            odio.'
                    primaryButton='Sign Up'
                    secondaryButton='Login Now'
                    secondaryLink={LOGIN}
                    onClickSubmit={onSubmit}
                />
            </Grid.Column>
        </Grid>
    </ResponsiveContainer>
);

export default SignUp