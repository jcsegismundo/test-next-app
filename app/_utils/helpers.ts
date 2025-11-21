import { upperFirst } from 'lodash';

export const capitalizeName = (str) => {
  const spaceSeparated: string[] = str.split(' ').map((s) => upperFirst(s));
  const newStr = spaceSeparated.join(' ');
  const dashSeparated: string[] = newStr.split('-').map((s) => upperFirst(s));
  return dashSeparated.join('-');
};
