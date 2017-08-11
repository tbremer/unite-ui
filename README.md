# Unite UI

Unite UI responds to your syntax for a more unified feel that is based off of [Flexible UI](https://github.com/cdonohue/flexible-ui)

# Features
- Monospaced or System fonts everywhere.
- Good contrast with Light and Dark Syntaxes.
- Adapts your Syntax colors.

# Installation
Go to settings within Atom, select Install and search for `unite` under themes.

Or install directly from the console:

`apm install united-ui`

# Settings
- `closeButtonPosition`
  - description: _Change tab close buttons to left or right._
  - default: `right`
  - type: `enum`
    - options: `right`, `left`
- `condensedTabs`
  - description: _Enable a smaller font and less padding on tabs._
  - type: `boolean`
  - default: `false`
- `condensedTreeView`
  - description: _Enable a smaller font and less padding on the tree._
  - type: `boolean`
  - default: `false`
- `fontStack`
  - description: _Change UI Font Stack._
  - type: `enum`
  - default: `monospace`
    - options: `monospace`, `system`

# Screenshots

_font in the screenshots is: `Monaco`_

_syntax featured are in the screenshots are: [ocean-dark-syntax](https://atom.io/themes/ocean-dark-syntax) & [ocean-light-syntax](https://atom.io/themes/ocean-light-syntax)_

### Light
![ocean-dark](https://raw.githubusercontent.com/tbremer/unite-ui/master/screenshots/ocean-light.png)

### Dark
![ocean-light](https://raw.githubusercontent.com/tbremer/unite-ui/master/screenshots/ocean-dark.png)

# Font Stack
```less
@font-family: "Operator Mono for Powerline", "Operator Mono", "Monaco", "Consolas", "Inconsolata", "Droid Sans Mono", "Deja Vu Sans Mono", monospace;
```
