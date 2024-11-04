import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dumbbell,
  Brain,
  Apple,
  PiggyBank,
  Home,
  Calendar,
} from "lucide-react";

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
      <h1 className="text-3xl font-bold text-center text-gray-300 mb-6">
        habitMaster
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <Card className="group hover:bg-primary/5 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                <item.icon
                  size={48}
                  className="mb-2 text-primary group-hover:text-primary/80 transition-colors"
                />
                <span className="text-sm font-medium">{item.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
