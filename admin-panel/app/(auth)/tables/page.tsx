import React from 'react'
import AuthorsTable from './AuthorsTable/page'
import ProjectsTable from './ProjectsTable/page'

export default function page() {
  return (
    <div>
      <div className='mt-10'><AuthorsTable /></div>
      <div className='mt-10'><ProjectsTable /></div>
    </div>
  )
}
