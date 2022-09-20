import poo from "../assets/poo.png";

function Title() {
  return (
    <h1 className="app-title">
      <img className="app-title--poo" src={poo} alt="poo" /> Shido Shit Diary
      <img className="app-title--poo" src={poo} alt="poo" />
    </h1>
  );
}

export default Title;
