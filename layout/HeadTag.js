import React from 'react'
import { Fragment } from 'react'
import Head from 'next/head'

const HeadTag = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.name} | Company</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
    </Fragment>
  )
}

export default HeadTag
