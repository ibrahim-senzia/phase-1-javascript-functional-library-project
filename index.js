function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    collection.forEach(callback);
  } else {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  myEach(collection, (value, key, collection) => {
    result.push(callback(value, key, collection));
  });
  return result;
}

function myReduce(collection, callback, acc) {
  myEach(collection, (value, key, collection) => {
    if (acc === undefined) {
      acc = value;
    } else {
      acc = callback(acc, value, key, collection);
    }
  });
  return acc;
}

function myFind(collection, predicate) {
  let result;
  myEach(collection, (value, key, collection) => {
    if (predicate(value, key, collection)) {
      result = value;
      return false; // stop iteration
    }
  });
  return result;
}

function myFilter(collection, predicate) {
  let result = [];
  myEach(collection, (value, key, collection) => {
    if (predicate(value, key, collection)) {
      result.push(value);
    }
  });
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

// BONUS: mySortBy
function mySortBy(array, callback) {
  return array.sort((a, b) => {
    let valueA = callback(a);
    let valueB = callback(b);
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
}

// BONUS: myFlatten
function myFlatten(array, shallow, newArr = []) {
  myEach(array, (value) => {
    if (Array.isArray(value) && !shallow) {
      myFlatten(value, shallow, newArr);
    } else {
      newArr.push(value);
    }
  });
  return newArr;
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
