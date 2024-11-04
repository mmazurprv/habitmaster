import { client } from "@/lib/db/postgres";
import { Home } from "lucide-react";
import ExerciseList from "@/components/workouts/exercise-list";
import { Exercise } from "@/lib/types";
import Menu from "@/components/menu";

// Fetch today's exercises on the server
async function getExercisesForToday(): Promise<Exercise[]> {
  const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD

  const exercises = await client`
    SELECT *
    FROM tasks
    WHERE date::DATE = ${today}
  `;

  return exercises.map((exercise) => ({
    ...exercise,
    date: exercise.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
  })) as Exercise[]; // Ensure the result matches the Exercise type
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
      <Menu menuItems={menuItems} />
      <ExerciseList exercises={exercises} />
    </div>
  );
}
