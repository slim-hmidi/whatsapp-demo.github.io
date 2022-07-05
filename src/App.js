import React from "react";
export default function App() {
  const [value, setValue] = React.useState("");
  const handleClick = () => {
    if (value) {
      const text = value;
      return window.open(
        `https://api.whatsapp.com/send?text=${text}`,
        "_blank"
      );
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{margin: '0 auto'}}>
      <h3>Share your message on whatsapp</h3>
      <input type="text" name="message" onChange={handleChange} style={{marginRight: 10}}/>
      <button onClick={handleClick} className="mobileShow">
        Share to whatsapp
      </button>
    </div>
  );
}
