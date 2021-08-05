import React from "react";

import './MainTitle.scss';

const MainTitle = (props) => {
	return (
		<div className="title">
			<div className="title__text">{props.title}</div>
			<div className="title__desc">{props.description}</div>
		</div>
	)
}

export default MainTitle;