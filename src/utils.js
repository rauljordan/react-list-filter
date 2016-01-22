export const compose = () => {
  var fns = arguments;

  return function (result) {
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i].call(this, result);
    }
    return result;
  };
};
