import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Divider, Header, Form, Container } from "semantic-ui-react";

const options = [
    {key: 'n', text: 'Veg', value: 'Veg'},
    {key: 'nv', text: 'Non Veg', value: 'Non Veg'},
];

const FormInput = ({name, validate, type, icon, iconPosition, placeholder, group}) => {
    if (group) {
        return (
            <Form.Group widths='equal'>
                {group.map((props) => (
                    <Field
                        key={props.name}
                        name={props.name}
                        validate={props.validate}
                        render={({input, meta}) => {
                            switch (props.type) {
                                case 'select':
                                    return (
                                        <Form.Select
                                            label={props.placeholder}
                                            options={options}
                                            placeholder={props.placeholder}
                                        />
                                    );
                                default:
                                    return (
                                        <Form.Input
                                            type={props.type}
                                            placeholder={props.placeholder}
                                            label={props.placeholder}
                                            error={Boolean(meta.touched && meta.error)}
                                            {...input}
                                        />
                                    )

                            }
                        }}
                    />
                ))}
            </Form.Group>
        )
    }
    if(type === 'textarea'){
        return (
            <Field
                name={name}
                validate={validate}
                render={({input, meta}) => (
                    <Form.TextArea
                        placeholder={placeholder}
                        label={placeholder}
                        error={Boolean(meta.touched && meta.error)}
                        {...input}
                    />)}
            />)
    }
    return (
        <Field
            name={name}
            validate={validate}
            render={({input, meta}) => (
                <Form.Input
                    type={type}
                    icon={icon}
                    iconPosition={iconPosition}
                    placeholder={placeholder}
                    label={placeholder}
                    error={Boolean(meta.touched && meta.error)}
                    {...input}
                />)}
        />)
};


class AdminFormGen extends React.Component {
    onSubmit = (values) => {
        const {onClickSubmit} = this.props;
        onClickSubmit(values);
    };

    render() {
        const {
            formInputMetadata, formTitle, primaryButton, initialValues
        } = this.props;
        return (
            <Container textAlign='justified'>
                <Header as='h2' color='teal' textAlign='center'>
                    {formTitle}
                </Header>
                <Divider section/>
                <FinalForm
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}
                    render={({handleSubmit, pristine, invalid}) => (
                        <Form onSubmit={handleSubmit}>
                            {formInputMetadata.map(props => (
                                <FormInput
                                    key={props.name || Math.random()}
                                    {...props}
                                />
                            ))}
                            <Form.Group>
                                <Form.Button type='submit' disabled={pristine || invalid}>{primaryButton}</Form.Button>
                                <Form.Button>Cancel</Form.Button>
                            </Form.Group>
                        </Form>
                    )}/>
            </Container>

        );
    }
}

export default AdminFormGen;
