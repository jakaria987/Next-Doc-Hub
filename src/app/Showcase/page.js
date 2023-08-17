import Book from "@/components/Showcase/Book/Book";
import Framework from "@/components/Showcase/FrameWork/Framework";
import GithubStats from "@/components/Showcase/GithubStats/GithubStats";
import PoweredBy from "@/components/Showcase/PoweredBy/PoweredBy";
import PowerfulFramework from "@/components/Showcase/PowerfulFramework";
import Websites from "@/components/Showcase/Websites/Websites";

const ShowcasePage = () => {
  return (
    <div>
      <Framework />
      <GithubStats/>
      <Websites/>
      <Book/>
      <PoweredBy/>
      <PowerfulFramework />
    </div>
  );
};

export default ShowcasePage;
