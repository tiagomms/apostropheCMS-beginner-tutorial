/*
 * For a better app development in apostrophe check:
 *  - apostutorial (http://apostrophecms.org/docs/tutorials/getting-started/)
 *  - moog (https://www.npmjs.com/package/moog)
 *  - moog require (https://www.npmjs.com/package/moog-require)
 *  - apostrophe headless (https://github.com/punkave/apostrophe-headless)
 */

var apos = require('apostrophe')({
  shortName: 'congresso-GER-app',
  title: 'congresso-GER-app',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // This configures the apostrophe-assets module to push a 'site.less'
    'apostrophe-assets': {
      scripts: [
        {
          name: 'site'
        }
      ],
      stylesheets: [
        {
          name: 'site'
        }
      ]
    },
    'apostrophe-pages': {},

    // Add custom apostrophe-modules and their respective configuration here!
    // ...,
    'link-widgets': {},
    'page-link-widgets': {},
    'drawer-widgets': {},
    'people': {},
    'people-widgets': {
      extend: 'apostrophe-pieces-widgets',
      filters: {
        projection: {
          slug: 1,
          title: 1,
          type: 1,
          tags: 1
        }
      }
    },
    'people-pages': {
      extend: 'apostrophe-pieces-pages'
    }
  }
});
