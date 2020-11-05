import React, { useState } from 'react'
import './../css/carousel.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
	
	// function chunkArray(arr, val){
	// 	var finalArr = []

	// 	for(var i=0; i < arr.length; i += val){
	// 		finalArr.push(arr.slice(i, val + 1))
	// 	}
	// }

	// chunkArray([0, 1, 2, 3, 4,], 3)

  const imageList = currentPictures.map((image, index) =>{
		return (
			<Card key={index} image={image}/>
		)
	})

  const handlerPrev = () => {
		let index = currentBlock
		setIsNext(false)
		setCurrentBlock( index - 1 )		
		
  }
  
  const handlerNext = () => {
		let index = currentBlock
		setIsNext(true)
		setCurrentBlock( index + 1 )
	}

	// console.log("handlerPrev",handlerPrev)
	// console.log("handlerNext",handlerNext)
	// console.log("currentBlock",currentBlock)
	
	const totalBlocks = Math.ceil(randomImages.length / picturesPerSlide)

	let index = currentBlock
	let	isnext = isNext

	console.log("isnext", isnext)

	let enter
	if (isnext){
		enter = "enter-next"
	} else if( !isnext) {
		enter = 'enter-prev'
	} else if( index === totalBlocks ){
		enter = 'enter-next'
	}

	let leave
	if( index === 1 ){
		leave = 'leave-prev'
	} else if ( index === totalBlocks ){
		leave = 'leave-next'
	} else if( handlerNext && index ){
		leave = 'leave-prev'
	} else if ( handlerPrev && !isnext ){
		leave = 'leave-next'
	}

	

	let exitActive
	if (handlerNext){
		exitActive = 'leave-active-prev'
	} else if( handlerPrev) {
		exitActive = 'leave-active-next'
	} 

	return (
		<div className="container">
			<div className="carousel">
				<TransitionGroup>
					<CSSTransition
						key={index}
						appear={true}
						classNames={{
							enter: enter,
            	enterActive: 'enter-active',
            	exit: leave,
            	// exitActive: exitActive
						}}
						timeout={50000}
						
					>
						<div className="carousel_slide" key={index}>
							{imageList}
						</div>
						
					</CSSTransition>
					</TransitionGroup>
			</div>
			<ButtonControl
					 		disabled={ currentBlock === 1 }
							title="Prev"
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