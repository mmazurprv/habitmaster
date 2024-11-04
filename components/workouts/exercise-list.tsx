import { Exercise } from "@/lib/types";

export default function ExerciseList({ exercises }: { exercises: Exercise[] }) {
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
            Exercise ID: {exercise.exid}
          </h2>
          <p>
            <strong>Id:</strong> {exercise.seriaid}
          </p>

          <p>
            <strong>Date:</strong> {new Date(exercise.date).toLocaleDateString('pl-PL').replace(/\//g, '.')}
          </p>

          <p>
            <strong>Distance:</strong> {exercise.distance} m
          </p>
          <p>
            <strong>Repeats:</strong> {exercise.repeats}
          </p>
          <p>
            <strong>Goal Value:</strong> {exercise.goalvalue}
          </p>
          <p>
            <strong>Quality:</strong> {exercise.quality}
          </p>
          <p>
            <strong>Subproject No:</strong> {exercise.subprojectno}
          </p>
          <p>
            <strong>Timespan:</strong> {exercise.timespan} s
          </p>
          <p>
            <strong>Goal Points:</strong> {exercise.goalpoints}
          </p>
          <p>
            <strong>Remarks:</strong> {exercise.remarks}
          </p>
          <p>
            <strong>Weight:</strong> {exercise.weight} kg
          </p>
          <p>
            <strong>Goal No:</strong> {exercise.goalno}
          </p>
        </div>
      ))}
    </div>
  );
}
