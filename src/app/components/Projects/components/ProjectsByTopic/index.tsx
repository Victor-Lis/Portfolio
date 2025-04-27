import { useProjectStore } from "@/data/projectManager";
import Year from "../Year";
import Topic from "../Topic";

export default function ProjectsByTopic() {
  const { getProjectsByTech } = useProjectStore();
  return (
    <div
      className="flex-1 gap-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center max-md:w-full md:ml-auto pl-4 min-[630px]:pl-12"
      data-aos="fade-left"
    >
      {getProjectsByTech("Web") && <Topic icon="💻" text="Web" />}
      {getProjectsByTech("App") && <Topic icon="📱" text="App" />}
      {getProjectsByTech("Game") && <Topic icon="💾" text="Game" />}
      {getProjectsByTech("Back-End") && <Topic icon="🔧" text="Back-End" />}
      {getProjectsByTech("IoT") && <Topic icon="⚙️" text="IoT" />}
    </div>
  );
}
