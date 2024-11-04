export type Exercise = {
  seriaid: string;
  exid: string;
  date: string; // Assuming date is stored as a string, you could also use Date if it’s a Date object
  distance: number;
  repeats: number;
  goalvalue: number;
  quality: string;
  subprojectno: number;
  timespan: number;
  goalpoints: number;
  remarks: string;
  weight: number;
  goalno: number;
};
