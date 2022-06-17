import useSound from "use-sound";
import { useState } from "react";
import { useFormik } from "formik";

export default function Home() {
  const [noise, setNoise] = useState();
  //const [volume, setVolume] = useState(0.5);
  const [bank, setBank] = useState();

  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const formik = useFormik({
    initialValues: {
      power: false,
      bank: false,
      volume: 1,
    },
  });

  const [play] = useSound(noise, { volume: formik.values.volume });

  const handleClick = (url) => {
    console.log("url", url);
    setNoise(url);
    play();
  };

  console.log("formik", formik.values);

  return (
    <div>
      <div id="drum-machine" className="container">
        <div className="drum-container">
          {formik.values.bank
            ? bankOne.map((btn) => (
                <button key={btn.id} onClick={(e) => handleClick(btn.url)}>
                  {btn.keyTrigger}
                </button>
              ))
            : bankTwo.map((btnn) => (
                <button key={btnn.id} onClick={(e) => handleClick(btnn.url)}>
                  {btnn.keyTrigger}
                </button>
              ))}
        </div>
        <div className="control-container">
          <div className="bank-container">
            Bank
            <label className="switch">
              <input
                type="checkbox"
                id="bank"
                name="bank"
                onChange={formik.handleChange}
                className="switch"
                value={formik.values.bank}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="power-container">
            Power
            <label className="switch">
              <input
                type="checkbox"
                id="power"
                name="power"
                onChange={formik.handleChange}
                className="switch"
                value={formik.values.power}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div>
            <input
              type="range"
              id="volume"
              name="volume"
              min={0}
              max={1}
              step={0.02}
              value={formik.values.volume}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
