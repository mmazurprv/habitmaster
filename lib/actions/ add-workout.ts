"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { client } from "../db/postgres";

export default async function addWorkout(formData: FormData) {
  // const workoutType = formData.get("workout-date")?.toString();
  //
  const exerciseId = formData.get("exercise-id")?.toString();
  const workoutDate = formData.get("workout-date")?.toString();
  const workoutTime = new Date().toLocaleTimeString("en-GB", { hour12: false });

  if (!workoutDate) {
    console.error("Workout date is missing.");
    return;
  }

  // Combine workoutDate and workoutTime into a single timestamp string
  const workoutDateTime = `${workoutDate} ${workoutTime}`;

  // Determine timespan based on exerciseId
  let timespan;
  if (exerciseId === "8001") {
    timespan = 450; // 7.5 min for plank
  } else if (exerciseId === "9001") {
    timespan = 210; // 3.5 min for stretching
  } else if (exerciseId === "9005") {
    timespan = 900; //15 min for meditation
  } else if (exerciseId === "800") {
    timespan = 900; //15 min for english reading unit
  } else if (exerciseId === "9105") {
    timespan = 120; //2 min for meditation
  } else {
    timespan = 0;
  }
  console.log(
    `Inserting new workout record ${exerciseId}: DateTime - ${workoutDateTime} Span - ${timespan} sec.`,
  );

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
      ${exerciseId},
      0,
      0,
      0,
      ${timespan},
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
