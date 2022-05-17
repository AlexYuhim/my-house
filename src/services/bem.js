function bem(block) {
  let resultString = '';

  return function (elementOrMod, modif) {
    let element = '';
    let mod = '';

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
      Object.keys(elementOrMod).forEach((key) => {
        if (elementOrMod[key]) {
          mod += ' ' + block + '_' + key;
        }

        if (typeof elementOrMod[key] === 'string') {
          mod += '_' + elementOrMod[key];
        }
      });
    }

    // 4 есть блок есть елемент,есть модификатор
    if (typeof elementOrMod === 'string' && typeof modif === 'object') {
      element = '__' + elementOrMod;
      Object.keys(modif).forEach((key) => {
        if (modif[key]) {
          mod += ' ' + block + element + '_' + key;
        }

        if (typeof modif[key] === 'string') {
          mod += '_' + modif[key];
        }
      });
    }
    resultString = block + element + mod;

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
