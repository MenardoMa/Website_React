import "./Button.css";

export const Button = ({ href = null, className = null, children }) => {
  const link = () => {
    return (
      <a className={`btn ${className != null ? className : ""}`} href={href}>
        {children}
      </a>
    );
  };

  const button = () => {
    return (
      <button className={`btn ${className != null ? className : ""}`}>
        {children}
      </button>
    );
  };

  return href != null ? link() : button();
};
