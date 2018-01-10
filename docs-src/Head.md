# Page Head

The page head allows to modify the `<head>` of each page.

You can :

- set the page `title`, present in the browser tab
- add meta attributes (like `viewport`)
- add scripts

## Page title

You only have to change the Title attribute of the `Page Head` contentful component.

## Meta attribute

On the `Page Head` component, the *Meta* attribute only accept a JSON that starts with an array.

For example :

```
[
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' }
]
```

## Script attribute

On the `Page Head` component, the *Script* attribute only accept a JSON that starts with an array.

```
[
  {
    "type": "text/javascript",
    "id": "hs-analytics",
    "src": "//js.hs-analytics.net/analytics/1511448000000/3477463.js"
  },
  {
    "type": "text/javascript",
    "src": "https://cdn.optimizely.com/js/8524284229.js"
  }
]
```

[Here](https://github.com/declandewet/vue-meta#recognized-metainfo-properties) you have a complete documentation.
