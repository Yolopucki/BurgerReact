import React from "react";

import burgerLogo from "../../assets/images/burger.jpeg";
import styles from "./Logo.module.css";

const Logo = () => (
	<div className={ styles.Logo }>
		<img
			src={ burgerLogo }
			alt="burger"
		/>
	</div>
);

export default Logo;
