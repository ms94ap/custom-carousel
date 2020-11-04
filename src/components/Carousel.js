import React, { useState } from 'react'
import './../css/block.scss';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

import blocks from './../icons.json'
import Card from './Card';
import ButtonControl from './ButtonControl';


const Carousel = () =>  {
  
	const [ currentBlock, setCurrentBlock] = useState(1)
	const [ isNext, setIsNext ] = useState(false)
  const randomImages = blocks.map(block => (block.images[Math.floor(Math.random() * block.images.length)]))
  const picturesPerSlide = 4
  const indexOfLastPicture = currentBlock * picturesPerSlide
  const indexOfFirstPicture = indexOfLastPicture - picturesPerSlide
  const currentPictures = randomImages.slice(indexOfFirstPicture, indexOfLastPicture)

  const imageList = currentPictures.map((image, index) =>{
		return (
			<Card key={index} image={image}/>
		)
	})

  const handlerPrev = () => {
		let index = currentBlock
		// setIsNext(false)
		setCurrentBlock( index - 1 )		
		
  }
  
  const handlerNext = () => {
		let index = currentBlock
		// setIsNext(true)
		setCurrentBlock( index + 1 )
	}
	
	const totalBlocks = Math.ceil(randomImages.length / picturesPerSlide)

	let index = currentBlock
	let	isnext = isNext

	console.log("index", index)
	return (
		<div className="container">
			<div className="carousel">
				<TransitionGroup>
					<CSSTransition
						key={index}
						// appear={true}
						classNames={{
							enter: handlerNext ? 'enter-next' : 'enter-prev',
            	enterActive: 'enter-active',
            	exit: 'leave',
            	// exitActive: handlerNext ? 'leave-active-next' : 'leave-active-prev'
						}}
						timeout={5000}
						
					>
						<div className="carousel_slide" key={index}>
							{imageList}
						</div>
						
					</CSSTransition>
					</TransitionGroup>
			</div>
			<ButtonControl
					 		disabled={ currentBlock === 1 }
							title="Previous"
							onClick={handlerPrev}
							direction="prev"
					 />
					<ButtonControl
						disabled = { currentBlock === totalBlocks }
						title="Next"
						onClick={handlerNext}
						direction="next"
					/>	
		</div>
	)
}

export default Carousel