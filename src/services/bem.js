function joinArgs(...argBem) {
  return argBem.join('-');
}

function bem() {
  let resultString = '';
  let argBem = [];

  argBem = joinArgs(...arguments);

  return function () {
    let argElement = '';
    let argMod = '';

    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'string') {
        argElement = '__' + arguments[i];
      } else if (typeof arguments[i] === 'object') {
        argMod = arguments[i];
      }
    }

    let mod = '';

    Object.keys(argMod).forEach((modValue) => {
      if (argMod[modValue]) {
        mod += ' ' + argBem + argElement + '_' + modValue;
      }

      if (typeof argMod[modValue] === 'string') {
        mod += '_' + argMod[modValue];
      }
    });

    resultString = argBem + argElement + mod;

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
