import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { list } = useSelector((state: any) => state.categories)

  return (
    <section className={styles.sidebar}>
       <div className={styles.title}>Categories</div>
       <nav>
        <ul className={styles.menu}>
            {list.map(({name, id}: {name: string, id: number}) => (
              <li key={id}>
                <NavLink 
                className={({isActive}) => `${styles.link} ? ${isActive ? styles.active : ''}`}
                to={`/categories/${id}`}>{name}</NavLink>
              </li>
            ))}
        </ul>
       </nav>
    </section>
  )
}

export default Sidebar
