import { getServerSession } from "next-auth";
import Posts from "../components/custom/Posts";

export default async function Home() {

const session = await getServerSession()


  return (
    // <div className="text-white p-3.5">
    //   <Posts />
    // </div>

    <div className="center">

    </div>
  );
}
