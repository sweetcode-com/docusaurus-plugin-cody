# docusaurus-plugin-cody

Adds the Cody AI widget to your Docusaurus website.

## Add the plugin

To add the plugin to your Docusaurus v2 site, do this:

1. `yarn add docusaurus-plugin-cody` (alternatively:
   `npm install --save docusaurus-plugin-cody`)
2. Add the plugin to your `docusaurus.config.js` like this:

```js
module.exports = {
  plugins: [
    [
      require.resolve('docusaurus-plugin-cody'),
      {
        widget_id: '11a22b3c-123a-123a-1ab2-a12bcd3efg40' // replace with your widget ID
      }
    ]
  ],
  ...
};
```
