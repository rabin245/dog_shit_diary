import WeekDay from "./WeekDay";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

function CarouselSlider(props) {
  const { shit, handleChange } = props;

  const weekDays = shit.map((day, index) => (
    <WeekDay
      key={index}
      index={index}
      hasShit={day}
      handleChange={() => handleChange(index)}
    />
  ));
  return (
    <ScrollingCarousel
      className="weekday-slider"
      leftIcon={<></>}
      rightIcon={<></>}
    >
      {weekDays}
    </ScrollingCarousel>
  );
}

export default CarouselSlider;
