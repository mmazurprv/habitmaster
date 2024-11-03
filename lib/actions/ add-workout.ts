"use server";

export default async function addWorkout(formData: FormData) {
  const workoutDate = formData.get("workout-date");
  const workoutTime = formData.get("workout-time");
  console.log(`Workout Date: ${workoutDate}, Workout Time: ${workoutTime}`);
}
