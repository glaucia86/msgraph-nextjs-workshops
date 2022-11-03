/**
 * file: pages/todos.js
 * description: file responsible for the todos page.
 * data: 07/24/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import styles from '../styles/Todo.module.css';

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');

  const todos = await data.json();

  return {
    props: {
      todos,
    },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <h1>Tasks TODO</h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
