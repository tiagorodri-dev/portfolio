import PropTypes from "prop-types";
import "./style.css";

function Title({ name }) {
  return (
    <div className="sessao-title">
      <h1>{name}</h1>
    </div>
  );
}

Title.propTypes = {
  name: PropTypes.string,
};

export default Title;
