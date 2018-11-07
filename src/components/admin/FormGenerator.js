import { Container, Divider, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React from "react";

const InputSelect = ({input, label, options}) => {
    return (
        <Form.Select
            {...input}
            value={input.value}
            onChange={(param, data) => input.onChange(data.value)}
            placeholder={label}
            options={options}
            label={label}
        />
    )
};

const InpuTextArea = ({input, label}) => (
    <Form.TextArea
        {...input}
        value={input.value}
        onChange={(param, data) => input.onChange(data.value)}
        placeholder={label}
        label={label}
    />
);

const FormInput = (props) => {
    if (props.group) {
        const options = props.options;
        return (
            <Form.Group widths='equal'>
                {props.group.map(props => {
                    props['options'] = options;
                    return (
                        <RenderInputFields {...props} key={props.name}/>
                    )
                })}
            </Form.Group>
        )
    } else {
        return (<RenderInputFields {...props}/>)
    }
};

const handleChange = (handler) => ({target: {files}}) =>
    handler(files.length ? {file: files[0], name: files[0].name} : {});

const FileInput = ({
                       input: {onChange, onBlur, value: omitValue, ...inputProps},
                       meta: omitMeta,
                       ...props
                   }) => {
    return (
        <Form.Input
            onChange={handleChange(onChange)} onBlur={handleChange(onBlur)}
            {...inputProps} {...props} />
    );
};

const RenderInputFields = ({name, validate, type, placeholder, options}) => {
    switch (type) {
        case 'select':
            return (
                <Field
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    label={placeholder}
                    component={InputSelect}
                    options={options}
                />);
        case 'textarea':
            return (
                <Field
                    name={name}
                    placeholder={placeholder}
                    label={placeholder}
                    component={InpuTextArea}
                />);
        case 'file':
            return (
                <Field
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    label={placeholder}
                    component={FileInput}
                />);
        default:
            return (
                <Field
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    label={placeholder}
                    component={Form.Input}
                />)
    }

};

const AddPizzaForm = ({handleSubmit, pristine, submitting, invalid, formInputMetadata, options, loading}) => {
    return (
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
            {formInputMetadata.map(props => (
                <FormInput
                    key={props.name || Math.random()}
                    {...props}
                    options={options}
                />
            ))}

            <Form.Group>
                <Form.Group>
                    <Form.Button type='submit' disabled={pristine || invalid} loading={loading}
                                 primary>Submit</Form.Button>
                    <Form.Button>Cancel</Form.Button>
                </Form.Group>
            </Form.Group>
        </Form>
    )
};

const AddPizzaFormMain = reduxForm({form: 'addPizza'})(AddPizzaForm);

const FormGenerator = ({formInputMetadata, handleSubmit, formTitle, options, loading}) => (
    <Grid textAlign='center' style={{
        fontSize: '4em',
        marginBottom: '3.5em',
        marginTop: '3.5em',
        height: '100%'
    }} verticalAlign='middle'>
        <Segment>
            <Grid.Column style={{maxWidth: 850}}>
                <Container textAlign='justified'>
                    <Header as='h2' color='teal' textAlign='center'>
                        {formTitle}
                    </Header>
                    <Divider section/>
                    <AddPizzaFormMain
                        formInputMetadata={formInputMetadata}
                        onSubmit={handleSubmit}
                        options={options}
                        loading={loading}
                    />
                </Container>
            </Grid.Column>
        </Segment>
    </Grid>
);

export default FormGenerator;