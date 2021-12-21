import { Link, useParams } from 'remix'

export default function Hello() {
  const { id } = useParams()

  return (
    <div>
      <h3>Pages {id}</h3>
      <ul>
        <li>
          <Link to="/">Go to home</Link>
        </li>
        <li>
          <Link to="/pages">Go to /pages</Link>
        </li>
      </ul>
    </div>
  )
}
