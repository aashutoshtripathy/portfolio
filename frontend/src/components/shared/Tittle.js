import React from 'react'
import {Helmet} from 'react-helmet-async'

const Tittle = ({tittle = "Chat App",description = "This is a chat application"}) => {
  return (
    <>
        <Helmet>
            <title>{tittle}</title>
            <meta name='description' content={description}/>
        </Helmet>
    </>
  )
}

export default Tittle