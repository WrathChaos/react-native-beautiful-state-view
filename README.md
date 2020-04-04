<img alt="React Native Beautiful State View" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-beautiful-state-view)

[![Fully customizable & Beautiful State View for React Native](https://img.shields.io/badge/-Fully%20customizable%20%26%20Beautiful%20State%20View%20for%20React%20Native.-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-beautiful-state-view)

[![npm version](https://img.shields.io/npm/v/react-native-beautiful-state-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-beautiful-state-view)
[![npm](https://img.shields.io/npm/dt/react-native-beautiful-state-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-beautiful-state-view)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Beautiful State View"
        src="assets/Screenshots/example.png" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-beautiful-state-view
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

# Usage

## Import

```js
import BeautifulStateView from "./lib/BeautifulStateView";
```

## Usage

```jsx
<BeautifulStateView
  resizeMode="contain"
  image={require("./assets/marketing_.png")}
/>
```

# Configuration - Props

| Property                     |   Type   |                              Default                               | Description                                                   |
| ---------------------------- | :------: | :----------------------------------------------------------------: | ------------------------------------------------------------- |
| title                        |  string  |                  Get free your unlimited space !                   | change the title of the component                             |
| description                  |  string  | Get free unlimited space for your document just one subscription ! | change the description of the component                       |
| primaryButtonText            |  string  |                         I wanna subscribe                          | change the primary button's text                              |
| secondaryButtonText          |  string  |                         Not now, Thanks !                          | change the secondary button's text                            |
| primaryButtonOnPress         | function |                             undefined                              | set the function for primary button's onPress functionality   |
| secondaryButtonOnPress       | function |                             undefined                              | set the function for secondary button's onPress functionality |
| primaryButtonTextColor       |  color   |                              #fdfdfd                               | change the primary button's text color                        |
| primaryButtonShadowColor     |  color   |                              #725dff                               | change the primary button's shadow color                      |
| primaryButtonBackgroundColor |  color   |                              #725dff                               | change the primary button's background color                  |
| primaryButtonTextColor       |  color   |                             undefined                              | change the primary button's text color                        |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Credits

Thank you so much for this awesome design [George Karry](https://www.uplabs.com/posts/cloud-document-app-ui-kit)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Beautiful State View is available under the MIT license. See the LICENSE file for more info.
