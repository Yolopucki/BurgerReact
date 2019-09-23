import React from "react";
import Aux from "../Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
		this.reqInterceptor = axios.interceptors.request.use(null,
			() => this.setState({ error: null }));
		this.resInterceptor = axios.interceptors.response.use((res) => res,
			(error) => this.setState({ error }));
	}


	componentWillUnmount() {
		axios.interceptors.request.eject(this.reqInterceptor);
		axios.interceptors.response.eject(this.resInterceptor);
	}

	errorConfirmed = () => this.setState({ error: null });

	/* in functional component we need to do clean up work in return function
  this will help not to make to many this inceptors */


	render() {
		const { error } = this.state;
		return (
			<Aux>
				<Modal
					show={ error }
					modalClosed={ this.errorConfirmed }
				>
					{ error && error.message }
				</Modal>
				<WrappedComponent { ...this.props } />
			</Aux>
		);
	}
};

export default withErrorHandler;
