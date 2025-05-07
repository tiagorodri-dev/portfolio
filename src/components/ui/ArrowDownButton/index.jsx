import { BsChevronDoubleDown } from "react-icons/bs";
import "./style.css";

function ArrowButton() {
  const smoothScrollTo = (target, duration) => {
    const targetElement = document.getElementById(target);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="button-container">
      <button
        className="arrow-down"
        onClick={() => smoothScrollTo("sobre", 800)}
      >
        <BsChevronDoubleDown size={30} strokeWidth={1} title="Veja mais" />
      </button>
    </div>
  );
}

export default ArrowButton;
