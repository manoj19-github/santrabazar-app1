import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // layout
  'grid-container': {
    display: 'grid',
    gridTemplateAreas: ''header' 'main' 'footer'',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '3rem 1fr 3rem',
    height: [{ unit: '%V', value: 1 }]
  },
  header: {
    gridArea: 'header',
    backgroundColor: '#203040',
    color: '#ffffff',
    padding: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    fontSize: [{ unit: 'rem', value: 1.1 }]
  },
  main: {
    gridArea: 'main',
    padding: [{ unit: 'rem', value: 0.5 }, { unit: 'rem', value: 0.5 }, { unit: 'rem', value: 0.5 }, { unit: 'rem', value: 0.5 }]
  },
  footer: {
    gridArea: 'footer',
    backgroundColor: '#203040',
    color: '#ffffff'
  },
  // common
  'a': {
    textDecoration: 'none',
    color: '#ffffff'
  },
  atitle: {
    fontSize: [{ unit: 'rem', value: 1.9 }]
  },
  'a:hover': {
    color: '#ff8000'
  },
  h2: {
    padding: [{ unit: 'rem', value: 0.2 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 0.2 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: 'rem', value: 1.2 }],
    color: 'blue',
    textAlign: 'center'
  },
  abrand: {
    fontSize: [{ unit: 'rem', value: 3 }],
    fontWeight: 'bold'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  'product-card': {
    minWidth: [{ unit: '%H', value: 0.2 }]
  },
  'cart-btn': {
    marginRight: [{ unit: 'rem', value: 2.4 }]
  },
  'btn-class': {
    paddingRight: [{ unit: 'rem', value: 0.6 }]
  },
  'rating:hover': {
    color: '#000'
  },
  rowcenter: {
    justifyContent: 'center'
  },
  // images
  img: {
    borderRadius: '0.5rem',
    minWidth: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'rem', value: 15 }]
  },
  'i': {
    color: 'gold'
  },
  'imgmd-img': {
    maxWidth: [{ unit: 'rem', value: 29 }],
    width: [{ unit: '%H', value: 1 }]
  },
  card: {
    border: [{ unit: 'rem', value: 0.1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#c0c0c0' }],
    backgroundColor: '#f8f8f8',
    borderRadius: '0.5rem',
    margin: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  'card-body': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 0.3 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 0.3 }]
  },
  'card-body >*': {
    marginBottom: [{ unit: 'rem', value: 0.4 }]
  },
  price: {
    fontSize: [{ unit: 'rem', value: 1.3 }]
  }
});
