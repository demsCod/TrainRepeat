import { ChatCTA } from "@/components/ui/ChatCTA";
import { Hero } from "../components/hero/Hero";
import { BackgroundLayout } from "../components/layout/BackgroundLayout";

export default function Home() {
  return (
    <BackgroundLayout>
      <Hero />
      <ChatCTA />
    </BackgroundLayout>
  );
}
