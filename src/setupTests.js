import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.localStorage = {
  setItem(key, string) {
    global.localStorage[key] = string;
  },
  getItem(key) {
    return global.localStorage[key] || null;
  },
  removeItem(key) {
    delete global.localStorage[key];
  },
  clear() {
    global.localStorage = {};
  }
};

// const localStorageMock = (function() {
//   let store = {};
//   return {
//     getItem: function(key) {
//       return store[key] || null;
//     },
//     setItem: function(key, value) {
//       store[key] = value;
//     },
//     removeItem: function(key) {
//       delete store[key];
//     },
//     clear: function() {
//       store = {};
//     }
//   };
// })();

// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock
// });
