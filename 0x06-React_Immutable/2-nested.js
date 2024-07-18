import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);
  return mappedObj.getIn(array, undefined);
}

export default accessImmutableObject;
