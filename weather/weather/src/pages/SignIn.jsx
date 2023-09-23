import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPass = (e) => {
    setPass(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  };
  return (
    <div className="form">
      <form>
        <p>Email:</p>
        <input
          type="text"
          id="email"
          onChange={handelEmail}
          name="email"
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          onChange={handelPass}
          name="password"
          required
        />
        <br />
       <button class="btn" type="button">
  <strong>SPACE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>

      </form>
    </div>
  );
};

export default SignIn;
