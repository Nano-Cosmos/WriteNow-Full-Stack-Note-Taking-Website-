import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const HomePage = ({notes,isLoading,handleFilterText,filterText}) => {
  return (
    <>
    <Filter handleFilterText= {handleFilterText} filterText={filterText}/>
    <NoteCardContainer notes={notes} isLoading={isLoading}/>
    </>
  )
}

export default HomePage
