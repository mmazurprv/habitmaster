import { client } from "@/lib/db/postgres";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import ExerciseList from "../client-components/exercise-list";

import { Home, Calendar } from "lucide-react";

// Fetch today's exercises on the server
async function getExercisesForToday() {
  const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD

  const exercises = await client`
    SELECT *
    FROM tasks
    WHERE date::DATE = ${today}
  `;
  return exercises.map((exercise) => ({
    ...exercise,
    date: exercise.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
  }));
}

export default async function CalendarPage() {
  const exercises = await getExercisesForToday();
  const menuItems = [
    // { name: "Calendar", icon: Calendar, href: "/calendar" },
    { name: "Home", icon: Home, href: "/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Today's Exercises</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-5 mx-auto max-w-3xl">
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

      <ExerciseList exercises={exercises} />
    </div>
  );
}
