import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

type TechCardProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  description: string;
};

export default function TechCard({
  src,
  alt,
  width = 50,
  height = 50,
  className = "h-10 w-10",
  description,
}: TechCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Image
          alt={alt}
          width={width}
          height={height}
          className={className}
          src={src}
        />
      </HoverCardTrigger>
      <HoverCardContent>
        {description}
      </HoverCardContent>
    </HoverCard>
  );
}
