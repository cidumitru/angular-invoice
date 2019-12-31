import {actionMatcher} from '@ngxs/store';

export function isAction<T>(actionInstance: any, actionType: T): actionType is T {
  return actionMatcher(actionInstance)(actionType);
}
