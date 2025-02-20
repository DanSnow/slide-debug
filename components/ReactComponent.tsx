import { createElement, useState } from 'react'
import htm from 'htm'

const html = htm.bind(createElement)

export function ReactComponent() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(Math.random() < 0.3 ? -1 : count + 1)
  }

  return html`<div>
    <div class="p-2">Try to create a break point on \`setState\` when it set the \`count\` to -1</div>
    <button
      class="block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-100"
      onClick=${handleClick}
    >
      Increment
    </button>
    <p>Count: ${count}</p>
  </div>`
}
