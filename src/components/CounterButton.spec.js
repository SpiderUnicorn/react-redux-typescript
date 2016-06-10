import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithTag,
    Simulate
} from 'react-addons-test-utils';
import assert from 'assert';
import CounterButton from './CounterButton';
describe('CounterButton', function() {
    it('triggers onEdit through the DOM', function() {
        let triggered = false;
        const newValue = 'value';
        const onClick = (e) => {
            console.log('click');
        };
        const component = renderIntoDocument(
            <Wrapper>
            <CounterButton text={'text'} onClick={onClick} />
            </Wrapper>
        );
        expect(component).toExist();
    });
});


class Wrapper extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
};
