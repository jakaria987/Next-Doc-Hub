import Book from "../../components/Showcase/Book/Book";
import BuildCards from "../../components/Showcase/BuildCards/BuildCards";
import Framework from "../../components/Showcase/BuildCards/BuildCards";
import GithubStats from "../../components/Showcase/GithubStats/GithubStats";
import PoweredBy from "../../components/Showcase/PoweredBy/PoweredBy";
import PowerfulFramework from "../../components/Showcase/PowerfulFramework";
import Websites from "../../components/Showcase/Websites/Websites";

const ShowcasePage = () => {
  return (
    <div>
      <Framework />
      <GithubStats/>
      <Websites/>
      <Book/>
      <PoweredBy/>
      <BuildCards></BuildCards>
      <PowerfulFramework />
    </div>
  );
};

export default ShowcasePage;
