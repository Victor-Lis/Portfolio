import { redirect } from "next/navigation";

export default function Blog() {
  redirect("/");
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <h1 className="bg-primary text-secondary">Blog</h1>
    </div>
  );
}