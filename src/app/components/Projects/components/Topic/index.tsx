import type { Types } from "@/@types/type";
import { useProjectStore } from "@/data/projectManager";

type TopicProps = {
  icon: string;
  text: Types;
};

const traducao = {
  Web: "Sites",
  App: "Apps",
  Game: "Jogos",
  "Back-End": "Servidor",
  IoT: "Robótica",
};

export default function Topic({ icon, text }: TopicProps) {
  const { setProjectsByTech } = useProjectStore();
  const handleSetTech = () => {
    setProjectsByTech(text);
  };
  return (
    <button
      type="button"
      className="min-[380px]:pt-2 bg-primary w-36 h-36 max-[630px]:w-24 max-[630px]:h-24 max-[380px]:w-16 max-[380px]:h-16 rounded-sm flex flex-col items-center min-[380px]:gap-y-2 justify-center hover:scale-110 duration-300 cursor-pointer"
      onClick={handleSetTech}
      onKeyDown={handleSetTech}
    >
      <h2
        className={`${
          text === "Web" ? "text-6xl" : "text-5xl"
        } max-[630px]:text-3xl max-[380px]:text-lg`}
      >
        {icon}
      </h2>
      <h2 className="text-2xl max-[630px]:text-lg max-[380px]:text-sm text-tertiary">
        {traducao[text]}
      </h2>
    </button>
  );
}
