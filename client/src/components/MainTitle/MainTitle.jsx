import React from "react";

import './MainTitle.scss';

const MainTitle = ({title, description}) => {
	return (
		<div className="title">
			<div className="title__text">{title}</div>
			<div className="title__desc">{description}</div>
		</div>
	)
}

export default MainTitle;