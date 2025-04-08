import PropTypes from "prop-types";
import "./style.css";

function Title({ name }) {
  const words = name.split(" ");
  const firstWord = words[0];
  const secondWord = words.slice(1).join(" ");

  return (
    <div className="sessao-title">
      <h1>
        <span className="first-word">{firstWord}</span>{" "}
        <span className="second-word">{secondWord}</span>
      </h1>
    </div>
  );
}

Title.propTypes = {
  name: PropTypes.string,
};

export default Title;
