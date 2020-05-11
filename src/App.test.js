import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { activeQuestion } from './App';
import { activeResponses } from './App';
import { setScore} from './App';


const assert = require('chai').assert;


describe('Question', () => {
  it('displays the correct question', () => {

    let expectation = '';
    let i=0;

    if (i===0) {
      expectation = 'Do girls just wanna have fun?';
    } else if(i===1) {
      expectation = 'Is it raining men?'
    }

    const actual = activeQuestion;
    assert.equal(actual, expectation);
  })
})

describe('Responses', () => {
  it("displays the correct 'a' response", () => {
    const expectation = 'yes';
    const actual = activeResponses.responseA;

    assert.equal(actual, expectation);
  })

  it('adds points to user score upon submitting the correct response', () => {
    const expectation = 2;
    const actual = count;

    assert.equal(actual, expectation);
  })
})
