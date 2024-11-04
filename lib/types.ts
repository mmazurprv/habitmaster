export type Exercise = {
  seriaid: number; // int4
  cif: number; // int4
  date: Date; // timestamp, keep as Date
  exid: number; // int4
  weight?: number; // numeric(5,2), nullable, represents decimal
  distance?: number; // numeric(5,2), nullable, represents decimal
  repeats?: number; // int2, nullable
  timespan?: number; // int4, nullable
  subprojectno?: number; // int4, nullable
  goalno?: number; // int2, nullable
  goalpoints?: number; // int4, nullable
  goalvalue?: number; // int4, nullable
  remarks?: string; // varchar(250), nullable
  quality?: number; // int2, nullable
};
