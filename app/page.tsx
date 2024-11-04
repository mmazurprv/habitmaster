import {
  Dumbbell,
  Brain,
  Apple,
  PiggyBank,
  Home,
  Calendar,
} from "lucide-react";
import Menu from "@/components/menu";

export default function HomePage() {
  const menuItems = [
    { name: "Workout", icon: Dumbbell, href: "/workout" },
    { name: "Mind", icon: Brain, href: "/mind" },
    { name: "Diet", icon: Apple, href: "/diet" },
    { name: "Finances", icon: PiggyBank, href: "/finances" },
    { name: "Calendar", icon: Calendar, href: "/calendar" },
    { name: "Home", icon: Home, href: "/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        HabitMaster
      </h1>
      <Menu menuItems={menuItems} />
    </div>
  );
}
