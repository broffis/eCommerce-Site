import React, { Component } from 'react';
import request from 'superagent';

import classes from './ContactData.css';
import Input from '../../components/Contact/Input/Input';

// const apiURL = 'http://localhost:3000/users';

class ContactData extends Component {
    state = {
        ContactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                id: "Input_Name"
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street Address',
                },
                id: "Input_Street"
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Zip Code'
                },
                id: "Input_ZipCode"
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                id: "Input_Country"
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                id: "Input_Email"
            },
        }
    }


    formSubmitHandler = (event) => {
        let Name = document.getElementById('name').value;
        let Address = document.getElementById('street').value;
        let ZipCode = document.getElementById('zipCode').value;
        let Country = document.getElementById('country').value;
        let Email = document.getElementById('email').value;

        // event.preventDefault();
        // const data = new FormData(event.target);

        // fetch(apiURL, {
        //     method: 'POST',
        //     body: data
        // });
        // console.log(body);

        // console.log();

        // console.log(custName, streetAddress, zipCode, country, custEmail);

        request
            .post("http://localhost:3000/users")
            .send({
                Name, Address, ZipCode, Country, Email
            })
            .then((res) => {
                console.log('Values inserted')
            }); 
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
            <form onSubmit={this.formSubmitHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        id={formElement.id}
                    />
                ))}
                <button type="button" onClick={this.formSubmitHandler}>Submit</button>
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