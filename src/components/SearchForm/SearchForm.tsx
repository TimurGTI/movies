import React, { useState, useCallback, useEffect } from 'react'

import { Input } from 'antd'
import { SearchFormProps } from '../Types/types'

const SearchForm: React.FC<SearchFormProps> = ({ onSearchProgress, onSearchChange, query }) => {
  const [searchValue, setSearchValue] = useState<string>(query || '')

  useEffect(() => {
    setSearchValue(query || '')
  }, [query])

  const onUpdateValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      setSearchValue(newValue)
      onSearchProgress()
      onSearchChange(newValue)
    },
    [onSearchProgress, onSearchChange]
  )

  return (
    <form className="app__search-form search-form" onSubmit={(event) => event.preventDefault()}>
      <label>
        <Input
          className="search-form__input"
          placeholder="Type to search..."
          onChange={onUpdateValue}
          value={searchValue}
        />
      </label>
    </form>
  )
}

export default SearchForm
