import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import IncrementButton from '../IncrementButton'

describe('<IncrementButton />', () => {
    it('renders a <button>', () => {
        const wrapper = shallow(<IncrementButton />)
        expect(wrapper.find('button')).to.have.length(1)
    })
})
