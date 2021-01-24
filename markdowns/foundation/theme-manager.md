---
index: 7
path: "/foundation/theme-manager"
title: "Theme Manager"
---
Use the `ThemeManager` to set default global behaviour for your app.

**setComponentTheme**

Set default props for a component by passing an object or a callback (for dynamic, runtime default props)

- `ThemeManager.setComponentTheme(componentName, defaultPropsObject);`
- `ThemeManager.setComponentTheme(componentName, componentProps => newDefaultPropsObject);`

example

```
import {ThemeManager} from 'react-native-ui-lib';

ThemeManager.setComponentTheme('Text', {
    text70: true, // will set the text70 typography modifier prop to be true by default
    grey10: true, // will set the grey10 color modifier prop to be true by default
});


ThemeManager.setComponentTheme('Button', (props, context) => {

  return {
    // this will apply a different backgroundColor
    // depends if the Button is an outline or not
    backgroundColor: props.outline ? 'black' : 'green',
  };
});
```

