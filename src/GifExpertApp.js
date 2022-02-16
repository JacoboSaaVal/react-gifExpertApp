import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CategoryAdd from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

  // const categories = ['One punch man', 'Bleach', 'Rick & Morty', 'Dragon Ball'] ;
  const [categories, setCategories] = useState(['Dragon Ball'])

  // const handleAdd = () => {
  //   const serie = 'Walking Dead';
  //   setCategories([...categories, serie])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategories={ setCategories }/>
      <hr />
      
      <ol>
        { 
          categories.map(categ => (
          <GifGrid 
            key={ categ }
            category={ categ }/>))     
        }
      </ol>
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp