#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let nOccurences = 0;
  for (let k = 0; k < list.length; k++) {
    if (searchElement === list[k]) {
      nOccurences++;
    }
  }
  return nOccurences;
};
