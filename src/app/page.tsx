import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="font-bold text-4xl text-emerald-700 mb-4">New Tube</div>
        <Button className="bg-emerald-700 hover:bg-emerald-800">
          Click
        </Button>
      </div>
    </>
  );
}
