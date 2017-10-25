// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    // ordinary page types
    {
      name: 'home',
      label: 'Home'
    },

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
    {
      name: 'default',
      label: 'Default'
    },
    // Our new page for displaying people
    {
      name: 'people-page',
      label: 'People'
    }
  ]
};
