import React from "react";
import {
  AboutSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Justin Daining" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="experience" heading="Experience" />
        <InterestsSection sectionId="tools" heading="Tools" />
        <ProjectsSection sectionId="recognition" heading="Recognition" />
      </Page>
    </>
  );
}
