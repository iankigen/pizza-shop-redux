import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from "../actions/user";
import ResponsiveContainer from "./Layout";

class Logout extends Component {

    componentDidMount() {
        this.props.logout(this.props.history);
    }

    render() {
        return (
            <ResponsiveContainer>
            </ResponsiveContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: (history) => dispatch(userActions.logout(history))
});

export default connect((state) => ({...state}), mapDispatchToProps)(Logout)