import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("sample-password");

  //ref hook for copy functionality
  const passwordRef = useRef(null);

  //fn to generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*(){}[]~?";

    //loop runs till len allowed and randomly returns chars to add to password
    for (let i = 0; i < length; i++) {
      let randIndex = Math.floor(Math.random() * str.length);

      pass = pass + str[randIndex];

      setPassword(pass);
    }
  }, [length, numAllow, charAllow]);

  //to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.selectionRange();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // to run the generator upon noticing any change in dependencies
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  console.log(passwordRef);

  return (
    <>
      <div className="font-sans text-2xl font-semibold text-center text-white  w-3/5 max-w-lg my-40 mx-auto bg-slate-800 p-10 rounded-lg">
        Password generator
        <div className="flex">
          <input
            type="text"
            value={password}
            id="password"
            placeholder="abcdef"
            readOnly
            className="text-base font-normal py-2 px-4 outline-none rounded-s-lg w-full mt-5 text-black"
            ref={passwordRef}
          />
          <button
            className="text-base font-normal py-2 px-4 outline-none rounded-e-lg w-fit mt-5 bg-blue-700 hover:opacity-80"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              id="length"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numberInput"
              id="numberInput"
              defaultChecked={numAllow}
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <input
            type="checkbox"
            name="specialCharInput"
            id="specialCharInput"
            defaultChecked={charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor="specialCharInput">Special Chracters</label>
        </div>
        {/* <div className="items-center mt-10">
          <p>length : {length}</p>
          <p>num : {`${numAllow}`}</p>
          <p>char : {`${charAllow}`}</p>
          <p>password : {`${password}`}</p>
        </div> */}
      </div>
    </>
  );
}

export default App;
