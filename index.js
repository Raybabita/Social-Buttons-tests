const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={` btn ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-media-button-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button text="Like" className="Like-btn" />
      <Button text="Share" className="Share-btn" />
      <Button text="Comment" className="Comment-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
