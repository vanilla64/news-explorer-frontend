import React from 'react';
import Button from "../Button/Button";
import './SearchForm.css'


function SearchForm(props) {

  function handleSubmit(evt) {
    evt.preventDefault()
    props.onNewsVisible()
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
        >
          <>
            <p className="button__text">Искать</p>
          </>
        </Button>
      </label>
    </form>
  );
}

export default SearchForm;