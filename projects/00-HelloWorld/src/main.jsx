import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <button>Hello button</button>
    <button>Hello button</button>
    <button>Hello button</button>
  </React.Fragment>
)
