import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TodoWrapper from 'src/components/TodoWrapper'

import './TodoPage.css'

const TodoPage = () => {
  return (
    <>
      <MetaTags title="Todo" description="Todo page" />

      <div className="flex flex-col items-center w-full bg-red-500">
        <h1>TodoPage</h1>
        <TodoWrapper />
      </div>
    </>
  )
}

export default TodoPage
