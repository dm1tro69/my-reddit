/**
 * @jest-environment jsdom
 */

import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()})

import Dropdown from "../Dropdown";

describe('Dropdown', ()=> {
    test('should render', ()=> {
        const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>)
        expect(wrapper).toBeDefined()
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
    })
    test('should render (snapshot)', ()=> {
        const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>)

        expect(wrapper).toMatchSnapshot()
    })
})
