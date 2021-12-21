import { Outlet, Link } from 'remix'

export default function Pages() {
  return (
    <div>
      <h1>Pages</h1>
      <ul>
        <li>
          <Link to="/pages/hello">Go to /pages/hello</Link>
        </li>
        <li>
          <Link to="/pages/goodbye">Go to /pages/goodbye</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
