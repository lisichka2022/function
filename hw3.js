'use strict'
const  ownBind = (fn, context, ...rest) => (...args) => {
      const uniq=Date.now().toString();
      context[uniq]=fn;
      const result=context[uniq](...rest.concat(args));
      delete context[uniq];
      return result;
    };
  