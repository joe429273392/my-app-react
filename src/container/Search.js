import React from 'react'
import { connect } from 'react-redux'
import { searchArticle } from '../actions'

let Search = ({ dispatch }) => {
  let input;

  return (
    <div className="search">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(searchArticle(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          placeholder="Search..."
        />
      </form>
    </div>
  )
}
Search = connect()(Search)

export default Search