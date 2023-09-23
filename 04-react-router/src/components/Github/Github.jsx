// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState({});

  // for api call when component mounts into virtual-DOM
  // useEffect(() => {
  //   fetch("https://api.github.com/users/soumyajeetmazumdar")
  //     .then((res) => res.json())
  //     .then((resjson) => {
  //       console.log(resjson);
  //       setData(resjson);
  //     });
  // }, []);

  const data = useLoaderData();

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

export const GithubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/soumyajeetmazumdar"
  );

  return response.json();
};
