import React from 'react'

const Home = () => {
  const doSomething = () => {
    return 'something'
  }
  return (
    <>
      <div>This is a div</div>
      <h1>This is a header</h1>
      <div>{doSomething()}</div>
    </>
  )
}

export default Home
