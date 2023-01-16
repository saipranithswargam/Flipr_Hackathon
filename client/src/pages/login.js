import { FaGoogle, FaGithub } from 'react-icons/fa';
import classes from '../styles/login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    fetch('https://flipr-2e7c.onrender.com/login', {
      method: 'POST',
      body: { email, password },
    })
      .then((response) => response.json())
      .then((data) => setVerified(data.verified));
    router.push(`/dashboard/${email}`);
    // if (verified == 1) {
    //   router.push(`/dashboard/${email}`);
    // } 
  };

  return (
    <div className={classes.loginSection}>
      <div className={classes.loginParentContainer}>
        <div className={classes.loginChildContainer}>
          <h2 className={classes.welcomeMessage}>Welcome back!</h2>
          <p className={classes.welcomeMessage}>We're so excited to see you again!</p>
          <form>
            <label>Email or phone number</label>
            <input
              type="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <label>password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button type="submit" onClick={submitHandler}>Log In</button>
            <Link href="/register">
              <p>
                Need an account? <span>Register</span>
              </p>
            </Link>
          </form>
          <div className={classes.footerContainer}>
            <p className={classes.orPara}>or</p>
            <Link href="https://flipr-2e7c.onrender.com/auth/google">
              <button className={classes.iconButton} style={{ backgroundColor: 'rgba(226, 8, 8, 0.76)' }}><FaGoogle />  Google</button>
            </Link>
            <Link href="https://flipr-2e7c.onrender.com/auth/github">
              <button className={classes.iconButton} style={{ backgroundColor: 'rgba(0, 0, 0, 0.637)' }}><FaGithub />  GitHub</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
