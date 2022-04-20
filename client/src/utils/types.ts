
export type Workout = {
  id: number;
  created_at: string;
  date: string;
  description: string;
  title: string;
  updated_at: string;
  user_id: number;
};

export type Exercise = {
  name: string,
  description: string,
  sets: number,
  weight: number,
  status: string,
}