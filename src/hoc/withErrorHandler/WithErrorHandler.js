import React from 'react';
import Aux from "../Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends React.Component {
        state = {
            error: null
        };
        errorConfirmed = () => this.setState({error: null});

        constructor(props) {
            super(props);
          this.reqInterceptor =  axios.interceptors.request.use(null, req => this.setState({error: null}));
         this.resInterceptor  =  axios.interceptors.response.use(res => res, error => this.setState({error}))
        }
        // in functional component we need to do clean up work in return function
//this will help not to make to many this inceptors
        componentWillUnmount() {
            console.log('will  unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor)
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmed}
                    >{this.state.error && this.state.error.message}</Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
};
export default withErrorHandler;
