import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_component/Hero";
import CategorySearch from "./_component/CategorySearch";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero/>
      {/* Category Search */}
      <CategorySearch/>
    </div>
  );
}
