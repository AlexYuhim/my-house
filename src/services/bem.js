function bem(block) {
  let resultString = '';

  return function (elementOrMod, modif) {
    let element = '';
    let mod = '';

    function valueModFromObj(obj, element) {
      let valueFromObj = '';

      Object.keys(obj).forEach((key) => {
        if (obj[key]) {
          valueFromObj += ' ' + block + element + '_' + key;
        }

        if (typeof obj[key] === 'string') {
          valueFromObj += '_' + obj[key];
        }
      });

      return valueFromObj;
    }

    // 1 есть  блок нет элемента нет модификатора

    if (!elementOrMod && !modif) {
      return block;
    }
    // 2 есть  блок , есть элемент нет модификатор

    if (typeof elementOrMod === 'string') {
      element = '__' + elementOrMod;
    }

    // 3 есть блок  нет элемента, есть модификатор
    if (typeof elementOrMod === 'object') {
      mod = valueModFromObj(elementOrMod, '');
    }

    // 4 есть блок есть елемент,есть модификатор
    if (typeof elementOrMod === 'string' && typeof modif === 'object') {
      element = '__' + elementOrMod;

      mod = valueModFromObj(modif, element);
    }

    resultString = block + element + mod;

    return resultString;
  };
}

const block = bem('block');

console.log(block()); // block
console.log(block({ main: true, size: 'view' }));
console.log(block({ modA: true, modB: true, modC: 'value' })); // block block_modA block_modC_value
console.log(block('element')); // block__element
console.log(block('element', { modA: true })); // block__element block__element_modA
console.log(block('element', { modA: false, modB: 'value' })); // block__element block__element_modB_value
console.log(block('element', { modA: false, modB: false })); // block__element
