import poop from "../assets/dog_shit1.png";
import noPoop from "../assets/dog_noshit.png";

function WeekDay(props) {
  const { hasShit, index, handleChange } = props;

  const poopImage = hasShit ? (
    <img src={poop} className="poop-img" />
  ) : (
    <img src={noPoop} className="nopoop-img" />
  );
  const today = new Date().getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function cardColor() {
    if (today == index) {
      if (hasShit) return "#66d450";
      else return "#b92222";
    } else if (hasShit) return "#aec5b5";
    else return "#ffffff4d";
  }

  const style = {
    backgroundColor: cardColor(),
  };

  return (
    <div className="weekday-card" style={style} onClick={handleChange}>
      {poopImage}
      <div className="weekday--content">
        <h2 className="weekday--name">{days[index]}</h2>
        {today == index && <h2 className="weekday--today">(Today)</h2>}
      </div>
    </div>
  );
}

export default WeekDay;
