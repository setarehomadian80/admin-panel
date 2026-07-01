import React from 'react'
import AuthorsTable from './AuthorsTable/page'
import ProjectsTable from './ProjectsTable/page'

export default function page() {
  return (
    <div>
      <div><AuthorsTable /></div>
      <div className='mt-5'><ProjectsTable /></div>
    </div>
  )
}
