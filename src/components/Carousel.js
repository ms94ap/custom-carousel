import React, { useState } from 'react'
import './../css/carousel.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ButtonControl from './ButtonControl';
import Card from './Card'


const Carousel = (props) =>  {
	const {images} = props
	const chunkSize = 4
	const imagesArr=[]
	
	for(let i=0; i <images.length; i += chunkSize){
		imagesArr.push(images.slice(i, chunkSize + i))
	}

	const [ isNext, setIsNext ] = useState(true)
	const [ currentBlock, setCurrentBlock] = useState(0)

	const handleNext = () => {
		setIsNext(true)
		setTimeout(() => setCurrentBlock(currentBlock + 1 ), 100)
	}

	const handlePrev = () => {
		setIsNext(false)
		setTimeout(() => setCurrentBlock(currentBlock - 1), 100)
	}

	return (
		<div className="container">
			<div className="carousel">
				<TransitionGroup>
					<CSSTransition
						key={currentBlock}
						appear={true}
						classNames={{
							enter: isNext ? 'animation-enter-next': 'animation-enter-prev',
            				enterActive: 'animation-enter-active',
							exit: 'animation-exit',
            				exitActive: isNext ? 'animation-exit-active-next' : 'animation-exit-active-prev',
						}}
						timeout={1000}
					>
						<div className="carousel_slide" key={currentBlock}>
							{imagesArr[currentBlock].map((image, index) => (<Card image={image} key={index}/>) )}
						</div>
						
					</CSSTransition>
					</TransitionGroup>
			</div>
			<ButtonControl
				disabled={ currentBlock === 0 }
				title="Prev"
				onClick={handlePrev}
				direction="prev"
			/>
			<ButtonControl
				disabled = { currentBlock === imagesArr.length - 1 }
				title="Next"
				onClick={handleNext}
				direction="next"
			/>	
		</div>
	)
}

export default Carousel