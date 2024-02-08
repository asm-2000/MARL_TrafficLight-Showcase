import React from "react";
import styles from "./Extras.module.css";
import { useState } from "react";

function Extras() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [postResult, setpostResult] = useState("");
  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }
  function messageChangeHandler(event) {
    setSuggestion(event.target.value);
  }
  function formSubmitHandler(event) {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      suggestion: suggestion,
    };
    function postData() {
      try {
        const response = fetch("http://localhost:8000/suggestion", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.status < 500) {
          setpostResult("Feedback submitted successfully !");
        } else setpostResult("Error submitting feedback !");
      } catch (e) {
        setpostResult("Error submitting feedback !");
        console.log(e);
      }
    }
    postData();
  }
  return (
    <div className={styles.Div1}>
      <form className={styles.form_box} onSubmit={formSubmitHandler}>
        <div className={styles.heading}>SEND US FEEDBACK !!</div>
        <div className={styles.input_field}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.text_input}
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Email (Your Email won't be shared or misused!)
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.text_input}
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles.input_field}>
          <label htmlFor="message_box" className={styles.label}>
            Message
          </label>
          <textarea
            name="message_box"
            id="mesage_box"
            className={styles.message_box}
            value={suggestion}
            placeholder="Your message"
            onChange={messageChangeHandler}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submit_button}>
          Submit
        </button>
        {postResult && (
          <div style={{ color: "red", fontSize: "11pt" }}>{postResult}</div>
        )}
      </form>
    </div>
  );
}
export default Extras;
