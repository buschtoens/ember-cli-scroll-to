# ember-cli-scroll-to

```
ember install ember-cli-scroll-to
```

This addon allows you to target specific elements in your links again. Just like
you could with anchors: `<a href="/test#some-id">Link</a>`.

```handlebars
{{#link-to 'some-route' (scroll-to '#some-css-selector')}}
  Go to #some-css-selector
{{/link-to}}
```

More detailed documentation will follow soon, but basically this is the API:

```handlebars
{{#link-to 'some-route' (scroll-to target duration padding)}}
  Go to #some-css-selector
{{/link-to}}
```

`duration` and `padding` are optional and fall back to the default values below.

If `target` is missing, the scroller will be reset upon clicking the link.
This is useful when switiching between overflowing routes, [as Ember does not
reset the scroller automatically](http://guides.emberjs.com/v1.10.0/cookbook/user_interface_and_interaction/resetting_scroll_on_route_changes/).
```js
// config/environment.js

ENV['scroll-to'] = {
  duration: 700, // default value
  padding:    0  // default value
};
```

## Collaborating

You're welcome to submit Pull Requests! Please commit all changes to a fresh
branch with a descriptive name like `fix-this-weird-bug-xx` or
`feature-teleportation-machine-xx`, where `xx` is the issue ID, if there is one.

Please squash unnecessary commits that were made during development and do not
add any meaningful / important entries to the git log.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
