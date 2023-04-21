import PocketBase from "pocketbase";
import { useRef, useState } from "react";

export default function LoginPage() {
  const [loginpage, setLoginpage] = useState(true);
  const pb = new PocketBase("http://127.0.0.1:8090");
  const email = useRef(0);
  const password = useRef(0);
  const passwordConfirm = useRef(0);
  const username = useRef(0);
  const name = useRef(0);

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
      username: username.current.value,
      email: email.current.value,
      emailVisibility: true,
      password: password.current.value,
      passwordConfirm: passwordConfirm.current.value,
      name: name.current.value,
    };
    const record = await pb.collection("users").create(data);
  }
  return (
    <div className="bg-gradient-to-tr from-[#141413] to-[#2A2B2A] h-screen justify-center text-white">
      <div className="grid justify-center border rounded-2xl p-11 w-96">
        <div className="grid grid-cols-2 text-center">
          <button onClick={() => setLoginpage(true)}>Login</button>
          <button onClick={() => setLoginpage(false)}>Register</button>
        </div>
        {loginpage ? (
          <div className="">
            <div className="m-5">
              <input
                type="text"
                className="p-2 text-black rounded-2xl opacity-75 "
                placeholder="email"
                ref={email}
              ></input>
            </div>
            <div className="m-5">
              <input
                type="password"
                className="p-2 text-black rounded-2xl opacity-75 "
                placeholder="password"
                ref={password}
              ></input>
            </div>
            <div className="grid place-content-center">
              <button onClick={userLogin}>Login</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="m-5">
              <input
                type="text"
                className="p-2 text-black rounded-2xl opacity-75 "
                placeholder="username"
                ref={username}
              ></input>
            </div>
            <div className="m-5">
              <input
                type="text"
                className="p-2 text-black rounded-2xl opacity-75 "
                placeholder="Name"
                ref={name}
              ></input>
            </div>
            <div className="m-5">
              <input
                type="text"
                className="p-2 text-black rounded-2xl opacity-75 "
                placeholder="email"
                ref={email}
              ></input>
            </div>
            <div className="m-5">
              <input
                type="password"
                className="p-2 text-black rounded-2xl opacity-75 "
                placeholder="password"
                ref={password}
              ></input>
            </div>
            <div className="m-5">
              <input
                type="password"
                className="p-2 text-black rounded-2xl opacity-75 "
                placeholder="confirm passwoord"
                ref={passwordConfirm}
              ></input>
            </div>
            <div className="grid justify-center">
                <button type="submit" className="bg-slate-700 px-5 py-2 rounded-2xl" onClick={userCreate}>Register</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
