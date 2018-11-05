import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ResponsiveContainer from "./Layout";
import FormGen from "../components/FormGen";
import { SIGNUP } from "../constants/url-list";
import { composeValidators } from "./validators/utils";
import { required } from "./validators";
import { userActions } from "./../actions/user"


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

class LoginPage extends Component {

    onSubmit = values => this.props.login(values, this.props.history);

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
                            formInputMetadata={LoginInputMetadata}
                            formTitle='LOGIN PAGE'
                            formFooter='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                            odio.'
                            primaryButton='Login'
                            secondaryButton='Sign Up Now'
                            secondaryLink={SIGNUP}
                            loading={loading}
                            onClickSubmit={this.onSubmit}
                        />
                    </Grid.Column>
                </Grid>
            </ResponsiveContainer>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    login: (data, history) => dispatch(userActions.login(data, history))
});
const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);