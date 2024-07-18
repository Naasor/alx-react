import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  let current = fromJS(object);
  for (const key of array) {
    if (current && current.has(key)) {
      current = current.get(key);
    } else {
      return undefined;
    }
  }
  return current;
}

export default accessImmutableObject;
