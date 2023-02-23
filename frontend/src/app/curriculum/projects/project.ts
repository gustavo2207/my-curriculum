import {SafeUrl} from "@angular/platform-browser";

export interface Project {
  title: string;
  description: string;
  imageUrl: SafeUrl;
  urlGithub: SafeUrl;
  urlProject: SafeUrl;
  url: string
}
