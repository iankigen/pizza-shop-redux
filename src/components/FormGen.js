import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Button, Divider, Grid, Header, Segment, Form } from "semantic-ui-react";


const FormInput = ({name, validate, type, icon, iconPosition, placeholder}) => (
    <Field
        name={name}
        validate={validate}
        render={({input, meta}) => (
            <Form.Input
                type={type}
                icon={icon}
                iconPosition={iconPosition}
                placeholder={placeholder}
                error={Boolean(meta.touched && meta.error)}
                {...input}
            />
        )}
    />
);

class FormGen extends React.Component {
    onSubmit = (values) => {
        const {onClickSubmit} = this.props;
        onClickSubmit(values);
    };

    render() {
        const {
            formInputMetadata, formTitle, formFooter, primaryButton, secondaryButton, secondaryLink
        } = this.props;
        return (
            <FinalForm
                onSubmit={this.onSubmit}
                render={({handleSubmit, pristine, invalid}) => (
                    <Form size='large' onSubmit={handleSubmit}>
                        <Segment raised>
                            <Header as='h2' textAlign='center'>
                                {formTitle}
                            </Header>
                            <Divider/>
                            {formInputMetadata.map(props => (
                                <FormInput
                                    key={props.name}
                                    {...props}
                                />
                            ))}

                            <Button color='green' fluid type='submit' disabled={pristine || invalid}>
                                {primaryButton}
                            </Button>
                            <Divider horizontal>Or</Divider>
                            <Button as='a' primary fluid href={secondaryLink}>
                                {secondaryButton}
                            </Button>
                            <Grid columns={1} relaxed>
                                <Grid.Column>
                                    <Segment basic>
                                        {formFooter}
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Form>
                )}/>
        );
    }
}

export default FormGen;