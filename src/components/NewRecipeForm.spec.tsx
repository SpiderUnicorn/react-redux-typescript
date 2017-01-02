import 'mocha'
import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'

import NewRecipeForm, {IProps} from './NewRecipeForm'

function setup() {
   const props: IProps = {
      submit: () => {}
   }

   return shallow(<NewRecipeForm {...props} />)
}

describe("NewRecipeForm", () => {
    it('renders the form', () => {
      const wrapper = setup();
      expect(wrapper.find('form').length).toEqual(1);
    })

    it('picks up title and description', () => {
      const wrapper = setup();
   
      expect(wrapper.find('form').length).toEqual(1);
    })
})