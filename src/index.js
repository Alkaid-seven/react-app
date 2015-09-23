import store from 'store2'

document.write(JSON.stringify(store.get('key')));

store.set('key', {
  a: 1,
  b: 1
})




