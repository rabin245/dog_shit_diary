function Body(props) {
  const { hasShit } = props;

  const bodyContent = hasShit ? (
    <h2>Shido has already shit today! Good Job my dawg!!</h2>
  ) : (
    <h2>Don't forget to wait for Shido to poop!!</h2>
  );

  return <div className="body-content">{bodyContent}</div>;
}

export default Body;
