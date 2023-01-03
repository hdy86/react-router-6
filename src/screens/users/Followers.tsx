import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const ctx = useOutletContext<IFollowersContext>();
  const { nameOfMyUser } = ctx;

  return <h1>Here are {nameOfMyUser}'s followers</h1>;
}

export default Followers;
