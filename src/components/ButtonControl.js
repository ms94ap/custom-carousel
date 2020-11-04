import React from 'react'

export default class ButtonControl extends React.Component {
	render(){
		const {title, direction, onClick, disabled } = this.props
		return(
			<>
				<button
					className={`carousel_control carousel_control__${direction}`}
					disabled={disabled}
					onClick={onClick}
				>	{title}
				</button>
			</>
		)
	}
}