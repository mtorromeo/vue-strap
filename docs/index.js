/* global Vue */
/* eslint no-new: off, require-jsdoc: off */

require('./assets/docs.css');
require('./assets/style.css');
require('prismjs');
require('./js/showLanguage');

import gettingStarted from './example/gettingStarted.vue';
import container from './example/container.vue';
import headerDocs from './example/headerDocs.vue';
import alertDocs from './example/alertDocs.vue';
import accordionDocs from './example/accordionDocs.vue';
import affixDocs from './example/affixDocs.vue';
import asideDocs from './example/asideDocs.vue';
import carouselDocs from './example/carouselDocs.vue';
import buttonsDocs from './example/buttonsDocs.vue';
import datepickerDocs from './example/datepickerDocs.vue';
import dropdownDocs from './example/dropdownDocs.vue';
import modalDocs from './example/modalDocs.vue';
import popoverDocs from './example/popoverDocs.vue';
import progressbarDocs from './example/progressbar-docs.vue';
import selectDocs from './example/selectDocs.vue';
import tabsDocs from './example/tabsDocs.vue';
import tooltipDocs from './example/tooltipDocs.vue';
// import typeaheadDocs from './example/typeaheadDocs.vue';
import spinnerDocs from './example/spinnerDocs.vue';
import VueStrap from '../src';

Vue.use(VueStrap);

new Vue({
  el: '#wrapper',
  components: {
    gettingStarted,
    container,
    alertDocs,
    headerDocs,
    accordionDocs,
    affixDocs,
    asideDocs,
    carouselDocs,
    buttonsDocs,
    datepickerDocs,
    dropdownDocs,
    modalDocs,
    popoverDocs,
    progressbarDocs,
    selectDocs,
    tabsDocs,
    tooltipDocs,
    // typeaheadDocs,
    spinnerDocs,
    list: {
      inherit: true,
      template: '',
    },
  },
  data() {
    return {
      anchor: [],
    };
  },
  filters: {
    space: val => val.replace('-', ' '),
  },
  mounted() {
    // add h1.anchor.innerHTML to sidebar list
    const anchor = document.querySelectorAll('.anchor');
    this.anchor = [...anchor].map(el => el.innerHTML.replace(' ', '-'));
    // Scrollspy
    const section = document.querySelectorAll('.bs-docs-section');
    const sections = {};

    window.addEventListener('load', function() {
      for (const e of section) {
        sections[e.id] = e.offsetTop;
      }
    });

    window.addEventListener('scroll', function() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

      const navbar = document.querySelector('#sidenav');

      if (!navbar) {
        return;
      }

      for (const i of Object.keys(sections)) {
        if (sections[i] + 420 <= scrollPosition) {
          if (navbar.querySelector('.active')) {
            navbar.querySelector('.active').className = '';
          }
          const a = navbar.querySelector(`a[href*=${i}]`);
          if (!a) {
            return;
          }
          a.parentNode.className = 'active';
        }
      }
    });
  },
});
