import 'mocha'
import React from 'react'
import expect from 'expect'
import { mount, shallow, ShallowWrapper } from 'enzyme'

import NewRecipeForm, {IProps} from './NewRecipeForm'

let callCount = 0;
function setup(): ShallowWrapper<any, any> {
   const props: IProps = {
      submit: () => {callCount++}
   }

   return shallow(<NewRecipeForm {...props} />)
}

describe("NewRecipeForm", () => {
    let wrapper;
    let form;
  
    beforeEach(() => {
       wrapper = setup()
       form = wrapper.find('form')
    })

    it('renders the form', () => {
      expect(form.length).toEqual(1);
    })

    it('picks up title and description', () => {
      wrapper.find('#recipeTitle').simulate('change', {target: {value: 'Test title'}});
      wrapper.find('#recipeDescription').simulate('change', {target: {value: 'Test description'}});
      
      expect(wrapper.state()).toEqual({
        title: "Test title",
        description: "Test description"
      })
    })

    it('clears the form on submit', () => {
      wrapper.find('#recipeTitle').simulate('change', {target: {value: 'Test title'}});
      wrapper.find('#recipeDescription').simulate('change', {target: {value: 'Test description'}});
      
      wrapper.find('button').simulate('click', { preventDefault() {} });

      expect(wrapper.state()).toEqual({
        title: "",
        description: ""
      })
    })

    it('calls passed in submit function on submit', () => {
      callCount = 0;
    
      wrapper.find('#recipeTitle').simulate('change', {target: {value: 'Test title'}});
      wrapper.find('#recipeDescription').simulate('change', {target: {value: 'Test description'}});
      
      wrapper.find('button').simulate('click', { preventDefault() {} });

      expect(callCount).toBe(1);
    })
})