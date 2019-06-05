import React, {Component} from 'react';
import axios from '../../../axios-orders';


import Btn from '../../../components/UI/Btn/Btn';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };
    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Victor',
                age: 25,
                address: {
                    street: 'some street',
                    country: 'Ukraine'
                },
                email: 'some@email'
            },
            method: 'fast'
        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');

            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false});
            });
        console.log(this.props.ingredients);
    };


    render() {
        let form = (<form>
            <input className={classes.Input} type='text' name='name' placeholder='your name'/>
            <input className={classes.Input} type='email' name='email' placeholder='email'/>
            <input className={classes.Input} type='text' name='street' placeholder='street'/>
            <input className={classes.Input} type='text' name='postalCode' placeholder='postalCode'/>
            <Btn btnType='Success' clicked={this.orderHandler}>Order</Btn>
        </form>);
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                {form}
            </div>
        );
    }
}

export default ContactData;
