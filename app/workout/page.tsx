import {
  Dumbbell,
  Home,
  Calendar,
  Brain,
  Languages,
  ShowerHead,
} from "lucide-react";
import Menu from "@/components/menu";

export default function WorkoutPage() {
  const menuItems = [
    {
      name: "Plank",
      icon: Dumbbell,
      href: "/workout/add-workout/8001",
    },
    {
      name: "Strechting",
      icon: Calendar,
      href: "/workout/add-workout/9001",
    },
    {
      name: "Meditation",
      icon: Brain,
      href: "/workout/add-workout/9005",
    },
    {
      name: "Cold water",
      icon: ShowerHead,
      href: "/workout/add-workout/9105",
    },
    {
      name: "English reading",
      icon: Languages,
      href: "/workout/add-workout/9800",
    },
    { name: "Home", icon: Home, href: "/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Workout zone</h1>
      <Menu menuItems={menuItems} />
    </div>
  );
}
