import { client } from "@/lib/db/postgres";
import { Home } from "lucide-react";
import ExerciseList from "@/components/workouts/exercise-list";
import { Exercise } from "@/lib/types";
import Menu from "@/components/menu";

// Fetch exercises for the specified month
async function getExercisesForMonth(month: string): Promise<Exercise[]> {
  const [year, monthValue] = month.split("-"); // Expecting format "YYYY-MM"

  const exercises = await client`
    SELECT *
    FROM tasks
    WHERE EXTRACT(YEAR FROM date) = ${year}::INTEGER
      AND EXTRACT(MONTH FROM date) = ${monthValue}::INTEGER
  `;

  return exercises.map((exercise) => ({
    ...exercise,
    date: exercise.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
  })) as Exercise[];
}

export default async function CalendarPage(props: {
  searchParams?: Promise<{
    month?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const month = searchParams?.month || new Date().toISOString().slice(0, 7); // Default to current month in "YYYY-MM" format
  const exercises = await getExercisesForMonth(month);

  const menuItems = [
    // { name: "Calendar", icon: Calendar, href: "/calendar" },
    { name: "Home", icon: Home, href: "/" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Today&apos;s Exercises</h1>
        <Menu menuItems={menuItems} />
        <ExerciseList exercises={exercises} />
      </div>
    </div >
  );
}
