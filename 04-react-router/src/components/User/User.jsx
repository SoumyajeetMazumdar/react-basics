import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <div className="text-center font-semibold text-4xl bg-orange-700 text-white p-10 max-w-md w-full rounded-3xl mx-auto">
      <span className="font-bold underline">User</span> : {userid}
    </div>
  );
};

export default User;
