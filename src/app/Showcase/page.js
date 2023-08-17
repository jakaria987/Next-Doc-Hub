import BuildCards from "@/components/Showcase/BuildCards/BuildCards";
import Framework from "@/components/Showcase/FrameWork/Framework";
import GithubStats from "@/components/Showcase/GithubStats/GithubStats";
import PoweredBy from "@/components/Showcase/PoweredBy/PoweredBy";
import PowerfulFramework from "@/components/Showcase/PowerfulFramework";

const ShowcasePage = () => {
  return (
    <div>
      <Framework />
      <PowerfulFramework />
      <GithubStats/>
      <PoweredBy/>
      <BuildCards></BuildCards>
    </div>
  );
};

export default ShowcasePage;
