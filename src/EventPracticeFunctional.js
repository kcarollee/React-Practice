import { useState } from "react";

const EventPracticeFunctional = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  // assigning props
  const { username, message } = form;

  /*
  const onChangeUserName = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
 */

  const onChange = (e) => {
    const nextForm = {
      ...form, // copy the original content of form
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>
        ----------------EVENT PRACTICE, BUT WITH A FUNCTIONAL
        COMPONENT------------------
      </h1>
      <input
        type="text"
        name="username"
        placeholder="USERNAME"
        value={username}
        onChange={onChange}
      />

      <input
        type="text"
        name="message"
        placeholder="SAY ANYTHING"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <button onClick={onClick}>OKAY</button>
    </div>
  );
};

export default EventPracticeFunctional;
