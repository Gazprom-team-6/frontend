import './Loader.style.css';

export function Loader() {
  return (
    <div
      role="img"
      className="loader"
    >
      <div
        className="loader-indicator"
        aria-hidden="true"
      />
    </div>
  );
}
