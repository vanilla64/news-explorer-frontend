import React, { useState } from 'react';
import Button from "../Button/Button";
import './SearchForm.css'


function SearchForm(props) {
  const [keyword, setKeyword] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handleChange(evt) {
    setKeyword(evt.target.value)
    setIsValid(evt.target.closest('.searchform').checkValidity())
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    if (!isValid || !keyword) {
      setIsValid(false)
      return
    } else {
      props.onNewsVisible(keyword)
      props.onSearchFormChange(keyword)
    }
  }

  return (
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className='searchform' noValidate>
      <label className="searchform__label">
        <p className={
          !isValid
            ? 'searchform__error searchform__error_visible'
            : 'searchform__error'
        }>Введите ключевое слово!</p>
        <input
          id="search-input"
          name="search"
          required
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
