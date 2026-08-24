import { cache } from "react";
import { supabase } from "@/lib/supabase";
import type { Project } from "@/types/project";
import type {
  Experience,
  ExperienceStat,
  Education,
} from "@/types/experience";
import type { SkillCategory } from "@/types/skill";
import type { BlogPost } from "@/types/blog";

/**
 * Server-side data access layer — replaces the static arrays that used to
 * live in src/data/*.ts. Every function reads from Supabase (public, RLS
 * read-only) and maps snake_case DB rows back onto the app's existing
 * camelCase types so components barely change shape.
 *
 * Wrapped in React's cache() so multiple calls within the same request
 * (e.g. layout.tsx + page.tsx both needing personalInfo) hit Supabase once.
 */

export const getProjects = cache(async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;

  return (data ?? []).map((row) => ({
    title: row.title,
    slug: row.slug,
    description: row.description,
    image: row.image,
    domain: row.domain,
    ownership: row.ownership,
    technologies: row.technologies ?? [],
    features: row.features ?? [],
    year: row.year,
    liveUrl: row.live_url ?? "",
    githubUrl: row.github_url ?? "",
    codeNote: row.code_note ?? undefined,
    relatedPostSlugs: row.related_post_slugs ?? [],
    caseStudy: row.case_study ?? undefined,
  }));
});

export const getProjectBySlug = cache(
  async (slug: string): Promise<Project | undefined> => {
    const projects = await getProjects();
    return projects.find((p) => p.slug === slug);
  }
);

export const getProjectCategories = cache(async (): Promise<string[]> => {
  const { data, error } = await supabase
    .from("project_categories")
    .select("name")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => row.name);
});

export const getExperiences = cache(async (): Promise<Experience[]> => {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;

  return (data ?? []).map((row, index) => ({
    id: index + 1,
    company: row.company,
    position: row.position,
    duration: row.duration,
    resumeTime: row.resume_time ?? undefined,
    location: row.location,
    type: row.type,
    description: row.description,
    resumeDescription: row.resume_description ?? undefined,
    achievements: row.achievements ?? [],
    technologies: row.technologies ?? [],
    logo: row.logo ?? "",
  }));
});

export const getExperienceStats = cache(async (): Promise<ExperienceStat[]> => {
  const { data, error } = await supabase
    .from("experience_stats")
    .select("number, label")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
});

export const getEducation = cache(async (): Promise<Education[]> => {
  const { data, error } = await supabase
    .from("education")
    .select("school, degree, time")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
});

export interface ResumeMeta {
  skillTags: string[];
  yearsExperience: number;
  majorProjects: number;
  companies: number;
  commitment: number;
}

export const getResumeMeta = cache(async (): Promise<ResumeMeta> => {
  const { data, error } = await supabase
    .from("resume_meta")
    .select("*")
    .limit(1)
    .single();
  if (error) throw error;
  return {
    skillTags: data.skill_tags ?? [],
    yearsExperience: data.years_experience,
    majorProjects: data.major_projects,
    companies: data.companies,
    commitment: data.commitment,
  };
});

export const getSkillCategories = cache(async (): Promise<SkillCategory[]> => {
  const { data, error } = await supabase
    .from("skill_categories")
    .select("category, sort_order, skills(name, icon_key, level, color, sort_order)")
    .order("sort_order", { ascending: true });
  if (error) throw error;

  return (data ?? []).map((row) => ({
    category: row.category,
    items: (row.skills ?? [])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((s) => ({
        name: s.name,
        iconKey: s.icon_key,
        level: s.level,
        color: s.color,
      })),
  }));
});

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("date", { ascending: false });
  if (error) throw error;

  return (data ?? []).map((row, index) => ({
    id: index + 1,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    insight: row.insight ?? undefined,
    image: row.image,
    category: row.category,
    tags: row.tags ?? [],
    date: row.date,
    readTime: row.read_time,
    featured: row.featured ?? false,
    relatedProjectSlug: row.related_project_slug ?? undefined,
  }));
});

export interface PersonalInfo {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  sameAs: string[];
  worksFor: string;
  addressLocality: string;
  addressCountry: string;
  knowsAbout: string[];
}

export const getPersonalInfo = cache(async (): Promise<PersonalInfo> => {
  const { data, error } = await supabase
    .from("personal_info")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return {
    name: data.name,
    jobTitle: data.job_title,
    description: data.description,
    url: data.url,
    image: data.image,
    sameAs: data.same_as ?? [],
    worksFor: data.works_for,
    addressLocality: data.address_locality,
    addressCountry: data.address_country,
    knowsAbout: data.knows_about ?? [],
  };
});

export function getPersonSchema(info: PersonalInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: info.name,
    jobTitle: info.jobTitle,
    description: info.description,
    url: info.url,
    image: info.image,
    sameAs: info.sameAs,
    worksFor: { "@type": "Organization", name: info.worksFor },
    address: {
      "@type": "PostalAddress",
      addressLocality: info.addressLocality,
      addressCountry: info.addressCountry,
    },
    knowsAbout: info.knowsAbout,
  };
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  facebook: string;
}

export const getSocialLinks = cache(async (): Promise<SocialLinks> => {
  const { data, error } = await supabase
    .from("social_links")
    .select("github, linkedin, facebook")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return data;
});

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export const getContactInfo = cache(async (): Promise<ContactInfo> => {
  const { data, error } = await supabase
    .from("contact_info")
    .select("email, phone, location")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return data;
});

export interface NamedItem {
  title: string;
  description: string;
}

export const getCurrentlyLearning = cache(async (): Promise<NamedItem[]> => {
  const { data, error } = await supabase
    .from("currently_learning")
    .select("title, description")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
});

export const getAIWorkflowItems = cache(async (): Promise<NamedItem[]> => {
  const { data, error } = await supabase
    .from("ai_workflow_items")
    .select("title, description")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
});
