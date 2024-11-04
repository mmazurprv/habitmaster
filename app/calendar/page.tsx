import { client } from "@/lib/db/postgres";
import { Home } from "lucide-react";
import ExerciseList from "@/components/workouts/exercise-list";
import { Exercise } from "@/lib/types";
import Menu from "@/components/menu";
import { DateNavigatorComponent } from "@/components/date-navigator";

// Fetch exercises for the specified day
async function getExercisesForDay(date: string): Promise<Exercise[]> {
  const exercises = await client`
    SELECT *
    FROM tasks
    WHERE date::DATE = ${date}::DATE
  `;

  return exercises.map((exercise) => ({
    ...exercise,
    date: exercise.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
  })) as Exercise[];
}

export default async function CalendarPage(props: {
  searchParams?: Promise<{
    date?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const date = searchParams?.date || new Date().toISOString().split("T")[0]; // Default to today in "YYYY-MM-DD" format

  const exercises = await getExercisesForDay(date);

  const menuItems = [
    // { name: "Calendar", icon: Calendar, href: "/calendar" },
    { name: "Home", icon: Home, href: "/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Today&apos;s Exercises</h1>
        <Menu menuItems={menuItems} />
        <DateNavigatorComponent />
        <ExerciseList exercises={exercises} />
      </div>
    </div >
  );
}
