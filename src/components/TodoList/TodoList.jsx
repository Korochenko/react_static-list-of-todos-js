export const TodoList = ({ todos }) => (
  <section className="TodoList">
        <article className={`TodoInfo ${todos[0].completed ? 'TodoInfo--completed' : ''}`}>
            <h2 className="TodoInfo__title">{todos[0].title}</h2>

            <a className="UserInfo" href={`mailto:${todos[0].user.email}`}>
                {todos[0].user.name}
            </a>
        </article>

        <article className={`TodoInfo ${todos[1].completed ? 'TodoInfo--completed' : ''}`}>
            <h2 className="TodoInfo__title">{todos[1].title}</h2>

            <a className="UserInfo" href={`mailto:${todos[1].user.email}`}>
                {todos[1].user.name}
            </a>
        </article>

        <article className={`TodoInfo ${todos[2].completed ? 'TodoInfo--completed' : ''}`}>
            <h2 className="TodoInfo__title">{todos[2].title}</h2>

            <a className="UserInfo" href={`mailto:${todos[2].user.email}`}>
                {todos[2].user.name}
            </a>
        </article>


        <article className={`TodoInfo ${todos[3].completed ? 'TodoInfo--completed' : ''}`}>
            <h2 className="TodoInfo__title">{todos[3].title}</h2>

            

        </article>
    </section>)
