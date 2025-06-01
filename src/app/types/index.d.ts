export interface Project {
  title: string;
  id: string;
  description: string;
  img: string;
  tags: string[];
  demo: string;
  imageAltText: string;
}

export interface Projects {
  project: Project[];
}
