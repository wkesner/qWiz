import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { activeQuestion } from './App';

const assert = require('chai').assert;


describe('Question', () => {
  it('displays the correct question', () => {
    const expectation = 'Do girls just wanna have fun?';
    const actual = activeQuestion;

    assert.equal(actual, expectation);
  })
})
