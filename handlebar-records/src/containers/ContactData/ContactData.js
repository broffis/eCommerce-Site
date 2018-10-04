import React, { Component } from 'react';

import classes from './ContactData.css';
import Input from '../../components/Contact/Input/Input';

class ContactData extends Component {
    state = {
        ContactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street Address',
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: ''
            },
            // deliveryMethod: {
            //     elementType: 'select',
            //     elementConfig: {
            //         options: [
            //             {value: 'express', displayValue: 'Express'},
            //             {value: 'standard', displayValue: 'Standard'}
            //         ]
            //     },
            //     value: ''
            // },
            // loading: false
        }
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.ContactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.ContactForm[key]
            });
        } 
        let form = (
            <form>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                    />
                ))}
            </form>
        );
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;