import PropTypes from "prop-types";
import "./style.css";

function Text({ title, subtitle }) {
  const words = title.split(" ");
  const firstWord = words[0];
  const secondWord = words.slice(1).join(" ");

  return (
    <div className="sessao-title">
      <h1>
        <span className="first-word">{firstWord}</span>{" "}
        <span className="second-word">{secondWord}</span>
      </h1>
      {subtitle && <h5 className="subtitle">{subtitle}</h5>}
    </div>
  );
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Text;
