import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Digit from '../../src/components/Digit.vue'
import { isIterable } from 'core-js';

describe('Digit.vue', () => {
    it('set the source based on number passed in.', async () => {
        const digit = shallowMount(Digit, {
            propsData: {
                timeDigit: 9
            }
        })

        let assert = require('chai').assert

        assert.equal(digit.vm.timeDigit, 9)
    })
})