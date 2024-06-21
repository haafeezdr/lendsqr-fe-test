import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.login}>
        <Image src="/Group.png" alt="Lendsqr logo" width={173.76} height={36}/>
        <div>
          <Image src="/sign-in.png" alt="Lendsqr logo" width={400} height={237.57}/>
        </div>
      </div>
      <div className={styles.input}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <div>
           <input type="email" name="email" id="" placeholder="Email" />
           <input type="password" name="password" id="" placeholder="Password" />
          </div>
          <a href="http://forget-password">Forget Password?</a>
          <button>Login</button>
      </div>
    </main>
  );
}
