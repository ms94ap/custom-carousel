import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Carousel from '../components/Carousel'
import ButtonControl from "../components/ButtonControl"
import blocks from '../icons.json'

Enzyme.configure({ adapter: new Adapter() })

describe("Carousel", () => {
	const nonRandomFetchedImages = blocks.map(block => block.images)

	describe("rendering", () => {
		it('renders Carousel and children properly', () => {
			const component = shallow(<Carousel images={nonRandomFetchedImages}/>)
			expect(toJSON(component)).toMatchSnapshot()
		})
	})

	describe("ButtonControl", () => {
		const mockFn = jest.fn()
		const buttonControlProps = {
			onClick: mockFn,
			direction: 'test',
			disable: false,
			title: 'Test'
		}

		it("triggers on click handler correctly", () => {
			const component = mount(<ButtonControl {...buttonControlProps}/>)
			component.simulate('click')
			expect(mockFn).toHaveBeenCalled()
		})
	})
})