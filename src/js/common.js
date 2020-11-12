'use strict';

import './../scss/common.scss';

import $ from 'jquery';

window.$ = window.jQuery = $;
import slick from 'slick-carousel';

import {secretsSlider} from './partials/secret_slider.js'
import {plyrPlayer} from './partials/plyr.js'

window.addEventListener('DOMContentLoaded', () => {
    secretsSlider()
    plyrPlayer()
})

