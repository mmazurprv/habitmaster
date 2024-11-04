import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import addWorkout from "@/lib/actions/ add-workout";

export default async function WorkoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Access the exerciseId parameter from params
  const exerciseId = (await params).slug;

  if (isNaN(Number(exerciseId))) {
    notFound();
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Workout</h1>

      <form action={addWorkout} className="space-y-4">
        {/* Workout Type (Dynamic) */}
        <div>
          <Label
            className="text-gray-700 font-semibold mb-1"
            htmlFor="workoutType"
          >
            {"Exercise id: " + exerciseId}
          </Label>
          <div id="workoutType" className="text-lg font-medium">
            {exerciseId}
          </div>
        </div>

        {/* Hidden Input for exerciseId */}
        <input type="hidden" name="exercise-id" value={exerciseId} />

        {/* Workout Date */}
        <div>
          <Label
            className="text-gray-700 font-semibold mb-1"
            htmlFor="workoutDate"
          >
            Workout Date:
          </Label>
          <Input type="date" name="workout-date" className="w-full" />
        </div>

        {/* Workout Time */}
        <div>
          <Label
            className="text-gray-700 font-semibold mb-1"
            htmlFor="workoutTime"
          >
            Workout Time:
          </Label>
          <div id="workoutTime" className="text-lg font-medium">
            7.5 min
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="mt-4 w-full">
          Add Workout
        </Button>
      </form>
    </div>
  );
}
