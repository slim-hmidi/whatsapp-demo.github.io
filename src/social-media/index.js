import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
          <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/send-with-whatsapp'>Send with Whatsapp</Link>
              </li>
              <li>
                <Link to='/send-with-fb'>Send with fb</Link>
              </li>
              <li>
                <Link to='/send-with-linkedin'>Send with Linkedin</Link>
              </li>
          </ul>
      </nav>
    </div>
  );
}