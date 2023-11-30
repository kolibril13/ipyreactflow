// widget.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export function render({ model, el }) {
  let root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  return () => root.unmount();
}
