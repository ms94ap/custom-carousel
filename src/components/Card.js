import React from 'react'

const Card = (props) => {
	const { image } = props

	return(
		<div className="img_wrapper">
			<a href={image} className="img_link">
				<img src={image} alt="img"/>
			</a>
		</div>
	)		
}

export default Card