import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="pageNotFound flexAux">
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing!</p>
      <p>
        <Link className="toHome" to="/">
          Visit Our Homepage
        </Link>
      </p>
    </main>
  );
};

export default Missing;
