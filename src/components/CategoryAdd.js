import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CategoryAdd = ( { setCategories } ) => {

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    // console.log(e.target.value)    
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2){
      setCategories(cats =>[inputValue, ...cats]);
      setinputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        id='inputAdd'
        value={ inputValue }
        onChange={(e) => handleInputChange(e)}
      />
    </form>
    )
  }
  
  CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default CategoryAdd;