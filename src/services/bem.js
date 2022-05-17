function bem(argBlock) {
  let resultString = '';

  return function (...args) {
    let argElement = '';
    let argMod = '';

    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === 'string') {
        argElement = '__' + args[i];
      } else if (typeof args[i] === 'object') {
        argMod = args[i];
      }
    }

    let mod = '';

    Object.keys(argMod).forEach((modValue) => {
      if (argMod[modValue]) {
        mod += ' ' + argBlock + argElement + '_' + modValue;
      }

      if (typeof argMod[modValue] === 'string') {
        mod += '_' + argMod[modValue];
      }
    });

    resultString = argBlock + argElement + mod;

    return resultString;
  };
}

const block = bem('block');

console.log(block()); // block
console.log(block({ main: true, size: 'view' }));
console.log(block({ modA: true, modB: false, modC: 'value' })); // block block_modA block_modC_value
console.log(block('element')); // block__element
console.log(block('element', { modA: true })); // block__element block__element_modA
console.log(block('element', { modA: false, modB: 'value' })); // block__element block__element_modB_value
console.log(block('element', { modA: false, modB: false })); // block__element
