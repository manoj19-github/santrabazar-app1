import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    fontSize: [{ unit: '%V', value: 0.625 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontFamily: '-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  '#root': {
    height: [{ unit: '%V', value: 1 }]
  },
  code: {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace'
  }
});
