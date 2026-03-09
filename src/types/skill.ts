export interface SkillItem {
  name: string;
  iconKey: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}
