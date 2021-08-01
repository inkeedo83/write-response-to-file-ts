/* eslint-disable camelcase */
interface ProjectStats {
  num_points: number;
  num_related_documents: number;
  num_stories: number;
}

interface ProjectOut {
  id: number;
  name: string;
  description: string | null;
}

interface Project extends ProjectOut {
  app_url: string;
  abbreviation: string | null;
  archived: boolean;
  color: string | null;
  entity_type: string;
  external_id: string | null;
  iteration_length: number;
  days_to_thermometer: number;
  show_thermometer: boolean;
  start_time: string;
  stats: ProjectStats;
  follower_ids: string[];
  team_id: number;
  workflow_id: number;
  created_at: string | null;
  updated_at: string | null;
}

export { Project, ProjectOut, ProjectStats };
