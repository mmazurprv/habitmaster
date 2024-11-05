import {
  Dumbbell,
  Apple,
  PiggyBank,
  Home,
  Calendar,
  ChartNoAxesCombined,
} from "lucide-react";
import Menu from "@/components/menu";

export default function HomePage() {
  const menuItems = [
    { name: "Workout", icon: Dumbbell, href: "/workout" },
    { name: "Diet", icon: Apple, href: "/diet" },
    { name: "Finances", icon: PiggyBank, href: "/finances" },
    { name: "Calendar", icon: Calendar, href: "/calendar" },
    { name: "Charts", icon: ChartNoAxesCombined, href: "/workout" },
    { name: "Home", icon: Home, href: "/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl text-center mb-6 text-gray-400">
        Master of Habits
      </h1>
      <Menu menuItems={menuItems} />
    </div>
  );
}
