import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { ProjectPage } from "components/ProjectPage";
import { getProjectBySlug, getAllProjectSlugs, Project } from "lib/projects";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <>
      <Head>
        <title>{project.title} - Anderson Osayerie</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} - Anderson Osayerie`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={`https://andemosa.tech${project.imageLink}`} />
        <meta property="og:url" content={`https://andemosa.tech/projects/${project.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} - Anderson Osayerie`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={`https://andemosa.tech${project.imageLink}`} />
      </Head>
      <ProjectPage project={project} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllProjectSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetails; 