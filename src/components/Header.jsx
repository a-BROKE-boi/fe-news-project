import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="headerBox">
        <h1>News</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">All Articles</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
