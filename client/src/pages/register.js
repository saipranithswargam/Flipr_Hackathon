import { FaGoogle, FaGithub } from 'react-icons/fa';
import classes from '../styles/register.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    fetch('https://flipr-2e7c.onrender.com/register', {
      method: 'POST',
      body: { username: email, password },
      headers: {
        'Content-type': 'x-www-form-urlencoded'
      },
    }).then((response) => response.json());

    router.push(`/dashboard/${email}`);
  };

  return (
    <div className={classes.loginSection}>
      <div className={classes.loginParentContainer}>
        <div className={classes.loginChildContainer}>
          <h2 className={classes.welcomeMessage}>Create an account</h2>
          <form>
            <label>Email</label>
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
            <button type="submit" onClick={submitHandler}>
              Continue
            </button>
            <Link href="/login">
              <p className={classes.alreadyAccount}>Already have an account?</p>
            </Link>
            <p>
              By registering, you agree to our <span>Terms of Service</span> and{' '}
              <span>Privacy Policy</span>.
            </p>
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
};

export default Register;
