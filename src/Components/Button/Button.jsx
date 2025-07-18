import "./Button.css";

export const Button = ({ href = null, children }) => {
  const link = () => {
    return (
      <a className="btn" href={href}>
        {children}
      </a>
    );
  };

  const button = () => {
    return <button className="btn">{children}</button>;
  };

  return href != null ? link() : button();
};
