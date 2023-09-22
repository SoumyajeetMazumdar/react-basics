import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  // for api call when component mounts into virtual-DOM
  useEffect(() => {
    fetch("https://api.github.com/users/soumyajeetmazumdar")
      .then((res) => res.json())
      .then((resjson) => {
        setData(resjson);
      });
  }, []);

  console.log(data);

  return (
    <div className="text-center m-4 bg-orange-700 text-white text-3xl p-4">
      <span className="font-bold">Github Profile Details</span>

      <p className="p-8">
        Login Name : {data.login}
        <br />
        Followers : {data.followers}
        <br />
        Public-repos : {data.public_repos}
      </p>
    </div>
  );
}

export default Github;
