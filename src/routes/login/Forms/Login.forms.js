import React from 'react';
import { createForm, formShape } from 'rc-form';
import { Grid, Input, Button } from '../../../components/flexibull';


class LoginForm extends React.Component {
    static propTypes = {
        form: formShape,
    };

    submit = () => {
        this.props.form.validateFields((error, value) => {
            if (!error) {
                this.props.signIn(value)
            }
        });
    }

    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <Input error={(errors = getFieldError('username')) ? errors.join(',') : null} type="text" required label="Username" forminput
                    id="username"
                    {...getFieldProps('username', {
                        initialValue: '',
                        rules: [{ required: true }],
                    })}
                    placeholder="Username"
                />
                <Input error={(errors = getFieldError('password')) ? errors.join(',') : null} type="password" required label="Password" forminput
                    id="password"
                    type="password"
                    {...getFieldProps('password', {
                        initialValue: '',
                        rules: [{ required: true }],
                    })}
                    placeholder="Password"
                />
                <Grid default="100%">
                    <Button id="signInButton" onClick={this.submit}>Sign in</Button>
                </Grid>
            </div>
        );
    }
}

export default createForm()(LoginForm);