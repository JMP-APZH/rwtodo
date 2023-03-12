import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TodoWrapper from 'src/components/TodoWrapper'

const TodoPage = () => {
  return (
    <>
      <MetaTags title="Todo" description="Todo page" />

      <div>
        <h1>TodoPage</h1>
        <TodoWrapper />
      </div>

    </>
  )
}

export default TodoPage
