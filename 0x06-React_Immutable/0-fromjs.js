import { fromJS } from 'immutable';

/**
 * Converts a JavaScript object to an Immutable Map
 * @param {Object} object - The JavaScript object to convert
 * @returns {Map} The Immutable Map
 */
function getImmutableObject(object) {
  return fromJS(object);
}

export { getImmutableObject };
