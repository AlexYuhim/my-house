import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import bem from '../../services/bem';

const block = bem('select');

// const animatedComponents = makeAnimated();

const MySelect = ({ options, isMulti, closeMenuOnSelect, disabled }) => {
  return (
    <Select
      disabled={disabled}
      className={block()}
      closeMenuOnSelect={closeMenuOnSelect}
      components={makeAnimated()}
      isMulti={isMulti}
      options={options}
    />
  );
};

MySelect.propTypes = {
  /** Статус Select*/
  disabled: PropTypes.bool,
  /** Метод сварачивающий мнею  */
  closeMenuOnSelect: PropTypes.bool,
  /**метод удаляющий выбранный options */
  components: PropTypes.func,
  /** Мульти Список */
  isMulti: PropTypes.bool,
  /** Список передаваемый для выборки */
  options: PropTypes.array,
  /** */
};

export default MySelect;
