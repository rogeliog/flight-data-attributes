# flight-data-attributes

[![Build Status](https://secure.travis-ci.org/<username>/flight-data-attributes.png)](http://travis-ci.org/rogeliog/flight-data-attributes)

A [Flight](https://github.com/flightjs/flight) component for setting the component defaultAttrs from the attached element data attributes.

## Installation

```bash
bower install --save flight-data-attributes
```

## Example

```html
  <div class="tweet" data-user-id="1" data-tweet-id="2" data-screen-name="John"></div>
```

```javascript
var withDataAttributes = require('path/to/with_data_attributes');

var MyComponent = defineComponent(withDataAttributes);

MyComponent.attachTo(".tweet");
```

So now we have all these data attributes set in the component.

```javascript
  this.attr.userId == 1
  this.attr.tweetId == 2
  this.attr.screenName == "John"
```

## Development

Development of this component requires [Bower](http://bower.io) to be globally
installed:

```bash
npm install -g bower
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install & bower install
```

To continuously run the tests in Chrome during development, just run:

```bash
npm run watch-test
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
