import { useState } from "react";

function Login() {
  const [state, setState] = useState("sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const submitForm = (e) => {
    e.PrevenDefault();
  };

  return (
    <div>
      <div className="border px-10 py-5 my-10   mx-auto w-96">
        <p className="font-medium text-2xl text-gray-700">
          {state === "sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-base font-medium text-gray-500 py-2">
          {state === "sign Up"
            ? "Please sign up to book appointment"
            : "Please login to book appointment"}
        </p>
        <form action="" onSubmit={() => submitForm()}>
          <div className="flex flex-col py-5">
            {state === "sign Up" ? (
              <>
                <label className="pb-2" htmlFor="">
                  Full Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border py-1 rounded-sm outline-none mb-4"
                  type="text"
                  name=""
                  id=""
                />
                <label className="pb-2" htmlFor="">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border mb-4 px-2 py-1 rounded-sm outline-none"
                  type="email"
                  name=""
                  id=""
                />
                <label className="pb-2" htmlFor="">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border  py-1 rounded-sm outline-none"
                  type="password"
                  name=""
                  id=""
                />
              </> // login code start
            ) : (
              <div>
                <label className="" htmlFor="">
                  Email
                </label>{" "}
                <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border w-full mb-4 px-2 py-1 rounded-sm outline-none"
                  type="email"
                  name=""
                  id=""
                />{" "}
                <br />
                <label className="pb-2" htmlFor="">
                  Password
                </label>{" "}
                <br />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border w-full mb-4 px-2 py-1 rounded-sm outline-none"
                  type="password"
                  name=""
                  id=""
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary py-[7px] font-medium text-white my-3"
          >
            {state === "sign Up" ? "Create account" : "login"}
          </button>
        </form>
        <p className="text-center py-3 ">
          {state == "sign Up"
            ? "Already have an account?"
            : "Do not have accout"}
          <span
            onClick={() => setState("login")}
            className="cursor-pointer underline text-primary"
          >
            {state === "sign Up" ? "login" : null}
          </span>
          <span
            onClick={() => setState("sign Up")}
            className="cursor-pointer underline text-primary"
          >
            {state === "login" ? "sign up" : null}
          </span>
          <span></span>
        </p>
      </div>
    </div>
  );
}

export default Login;
