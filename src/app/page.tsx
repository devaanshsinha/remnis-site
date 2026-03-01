import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center h-screen gap-4">
        <Button>Click me</Button>
		<Button>Click me</Button>
		<Button>Click me</Button>
      </main>
    </div>
  );
}
