import PocketBase from "pocketbase";
import { useRef, useState } from "react";

export default function LoginPage() {
  const [loginpage, setLoginpage] = useState(true);
  const pb = new PocketBase("http://127.0.0.1:8090");
  const email = useRef(0);
  const password = useRef(0);

  async function userLogin() {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email.current.value, password.current.value);
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model.id);
    } catch (err) {
      console.log(err);
    }
  }

  async function userCreate() {
    const data = {
      username: "test_username",
      email: email.current.value,
      emailVisibility: true,
      password: password.current.value,
      passwordConfirm: password.current.value,
      name: "test",
    };
    const record = await pb.collection("users").create(data);
  }
  return (
    <div>
      <div className="grid justify-center">
        <div className="grid grid-cols-2 text-center">
          <button onClick={() => setLoginpage(true)}>Login</button>
          <button onClick={() => setLoginpage(false)}>Register</button>
        </div>
        {loginpage ? (
          <div>
            <div>
              <input
                type="text"
                ref={email}
                className="border-2"
                placeholder="Email"
              ></input>
            </div>
            <div>
              <input
                type="password"
                ref={password}
                className="border-2"
                placeholder="Password"
              ></input>
            </div>
            <div className="grid place-content-center">
              <button onClick={userLogin}>Login</button>
            </div>
          </div>
        ) : (
          <div>
            <div>ok</div>
          </div>
        )}
      </div>
    </div>
  );
}
