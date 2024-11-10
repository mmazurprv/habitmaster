export type Exercise = {
  task_id: number; // int4
  cif: number; // int4
  date: Date; // timestamp, keep as Date
  exercise_id: number; // int4
  weight?: number; // numeric(5,2), nullable, represents decimal
  distance?: number; // numeric(5,2), nullable, represents decimal
  repeats?: number; // int2, nullable
  time_span?: number; // int4, nullable
  subproject?: number; // int4, nullable
  goal_id?: number; // int2, nullable
  goal_points?: number; // int4, nullable
  goal_value?: number; // int4, nullable
  remarks?: string; // varchar(250), nullable
  quality?: number; // int2, nullable
};
