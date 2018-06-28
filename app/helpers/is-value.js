import { helper } from '@ember/component/helper';

export function isValue(params/*, hash*/) {
  return params[0] === params[1];
}

export default helper(isValue);
