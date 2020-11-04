import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Carousel from '../components/Carousel'
// import ButtonControl from '../components/ButtonControl'
// import Card from '../components/Card'

Enzyme.configure({ adapter: new Adapter() })

describe("Carousel", () => {

	describe("rendering components", () =>{
		it('renders Carousel properly', () => {
			const component = shallow(<Carousel/>)
			expect(toJSON(component)).toMatchSnapshot()
		})
		// it('renders Card properly', () => {
		// 	const component = mount(<Card/>)
		// 	expect(component).toMatchSnapshot()
		// })
		// it('renders ButtonControl properly', () => {
		// 	const component = mount(<ButtonControl/>)
		// 	expect(component).toMatchSnapshot()
		// })
	})

})