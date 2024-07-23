import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
          <h1>custom</h1>
        </div>
    )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to get to google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'clickme',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
