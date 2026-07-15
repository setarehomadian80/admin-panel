import React from 'react'
import AuthorsTable from './authorsTable'
import ProjectsTable from './projectsTable'

export default function page() {
  return (
    <div>
      <div><AuthorsTable /></div>
      <div className='mt-5'><ProjectsTable /></div>
    </div>
  )
}
