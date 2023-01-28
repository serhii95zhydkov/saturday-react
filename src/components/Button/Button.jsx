const Button = ({ text, clickHeandler }) => {
  return <button onClick={clickHeandler}>{text}</button>;
};

export default Button;
