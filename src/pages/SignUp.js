import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import ResponsiveContainer from "./Layout";
import { composeValidators } from "./validators/utils";
import { required } from "./validators";
import FormGen from "../components/FormGen";
import { LOGIN } from "../constants/url-list";
import { userActions } from "../actions/user";

const SignUpInputMetadata = [
    {
        name: 'username',
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

class SignUp extends Component {
    onSubmit = values => this.props.register(values, this.props.history);
    render() {
        const { loading } = this.props.authentication;
        return (
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
                            loading={loading}
                            secondaryLink={LOGIN}
                            onClickSubmit={this.onSubmit}
                        />
                    </Grid.Column>
                </Grid>
            </ResponsiveContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    register: (data, history) => dispatch(userActions.register(data, history))
});
const mapStateToProps = state => ({...state});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);