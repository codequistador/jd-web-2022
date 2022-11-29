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
        <ProjectsSection sectionId="recognition" heading="Recognition" />
        <InterestsSection sectionId="tools" heading="Tools" />
      </Page>
    </>
  );
}
