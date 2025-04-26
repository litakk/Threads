import { Metadata } from "next";
import { useSession } from "next-auth/react";

interface LikesPageProps {}

export const metadata: Metadata = {
  title: "Действия — Threads",
};

const LikesPage: React.FC<LikesPageProps> = () => {

  return (
    <>  
      <div>
        <p>Страничка LIKES</p>
      </div>
    </>
  );
};

export default LikesPage;
