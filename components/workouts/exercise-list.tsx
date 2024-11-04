import { Exercise } from "@/lib/types";

export default function ExerciseList({ exercises }: { exercises: Exercise[] }) {
  // Function to get exercise name based on exid
  const ExerciseTitle = (exid: number): string => {
    switch (exid) {
      case 8001:
        return "Plank";
      case 9001:
        return "Leg stretch";
      default:
        return "Other";
    }
  };

  if (exercises.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No exercises scheduled for today.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {exercises.map((exercise) => (
        <div key={exercise.seriaid} className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold">
            {ExerciseTitle(exercise.exid)}
          </h2>
          <p>
            <strong> Id:</strong> {exercise.seriaid}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(exercise.date)
              .toLocaleDateString("pl-PL")
              .replace(/\//g, ".")}
          </p>

          {/* Conditional rendering based on values */}
          {exercise.distance && exercise.distance !== "0.00" && (
            <p>
              <strong>Distance:</strong> {exercise.distance} m
            </p>
          )}
          {exercise.repeats && exercise.repeats !== 0 && (
            <p>
              <strong>Repeats:</strong> {exercise.repeats} rpt
            </p>
          )}
          {exercise.goalvalue && exercise.goalvalue !== 0 && (
            <p>
              <strong>Goal Value:</strong> {exercise.goalvalue} goal
            </p>
          )}
          {exercise.quality && exercise.quality !== 0 && (
            <p>
              <strong>Quality:</strong> {exercise.quality} qty
            </p>
          )}
          {exercise.subprojectno && exercise.subprojectno !== 0 && (
            <p>
              <strong>Subproject No:</strong> {exercise.subprojectno} sub prj
            </p>
          )}
          {exercise.timespan && exercise.timespan !== 0 && (
            <p>
              <strong>Timespan:</strong> {exercise.timespan} sec
            </p>
          )}
          {exercise.goalpoints && exercise.goalpoints !== 0 && (
            <p>
              <strong>Goal Points:</strong> {exercise.goalpoints} points
            </p>
          )}
          {exercise.remarks && exercise.remarks.trim() !== "" && (
            <p>
              <strong>Remarks:</strong> {exercise.remarks}
            </p>
          )}
          {exercise.weight && exercise.weight !== "0.00" && (
            <p>
              <strong>Weight:</strong> {exercise.weight} kg
            </p>
          )}
          {exercise.goalno && exercise.goalno !== 0 && (
            <p>
              <strong>Goal No:</strong> {exercise.goalno} goal id
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
