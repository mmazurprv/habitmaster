import {
  Dumbbell,
  Home,
  Calendar,
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
    { name: "Home", icon: Home, href: "/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Workout zone</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Menu menuItems={menuItems} />
      </div>
    </div>
  );
}
