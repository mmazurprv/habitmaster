"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { client } from "../db/postgres";

export default async function addWorkout(formData: FormData) {
  const workoutDate = formData.get("workout-date")?.toString();
  const workoutTime = new Date().toLocaleTimeString("en-GB", { hour12: false });

  if (!workoutDate) {
    console.error("Workout date is missing.");
    return;
  }

  // Combine workoutDate and workoutTime into a single timestamp string
  const workoutDateTime = `${workoutDate} ${workoutTime}`;

  console.log(`Inserting workout: DateTime - ${workoutDateTime}`);

  try {
    await client`INSERT INTO tasks (
      cif,
      date,
      exid,
      weight,
      distance,
      repeats,
      timespan,
      subprojectno,
      goalno,
      goalpoints,
      goalvalue,
      remarks,
      quality
    ) VALUES (
      '1',
      ${workoutDateTime},
      '8001',
      0,
      0,
      0,
      '400',
      0,
      0,
      0,
      0,
      'Example remarks',
      0
    )`;
  } catch (error) {
    console.error("Error inserting workout:", error);
  }

  revalidatePath("/workout");
  redirect("/workout");
}
