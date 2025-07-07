import { WorkoutPlannerApp } from "../../components/WorkoutPlannerApp";
import { BackgroundLayout } from "../../components/layout/BackgroundLayout";

export default function ChatPage() {
  return (
    <BackgroundLayout variant="chat">
      <WorkoutPlannerApp />
    </BackgroundLayout>
  );
}
