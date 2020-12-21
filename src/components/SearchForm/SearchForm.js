import React from 'react';
import Button from "../Button/Button";
import './SearchForm.css'


function SearchForm(props) {

  function handleSubmit(evt) {
    evt.preventDefault()
    console.log('Submit')
    props.handleSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='searchform' noValidate>
      <label className="searchform__label">
        <input
          id="search-input"
          name="search"
          placeholder="Введите тему новости"
          className="searchform__input" />
        <Button
          type="submit"
          classType={'search'}
          text={'Искать'}
        />
      </label>
    </form>
  );
}

export default SearchForm;