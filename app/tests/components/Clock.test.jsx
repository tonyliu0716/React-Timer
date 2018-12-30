// store all the tests for Clock.jsx component

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');

// need to run: npm install react-addons-test-utils@0.14.6 --save-dev
var TestUtils = require('react-addons-test-utils');

// include the Clock component
var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            // here is how we call the function inside the Clock component
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);

            // use jQuery selector to get the text
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });

    });


    describe('formatSeconds', () => {

        it('should format seconds', () => {

            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            // here is how we call the function inside the Clock component
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec are less than 10', () => {

            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            // here is how we call the function inside the Clock component
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });

    });


});