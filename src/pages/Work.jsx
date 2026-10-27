import PageMeta from '../components/PageMeta.jsx';
import ProjectFeature from '../components/ProjectFeature.jsx';
import { projects } from '../data/projects.js';

export default function Work() {
  return (
    <>
      <PageMeta
        title="Work"
        description="Five interactive 3D simulations: EV components, bar bending, CPR and AED response, sensor faucet installation and a line-follower robot."
      />
      <section className="section container">
        <header className="section__head">
          <p className="label">Work</p>
          <h1 className="h1">Selected projects</h1>
          <p className="lead narrow">
            Five simulations built at AMMACHI Labs. Each has a case study covering the learning
            goal, the design problem and how it was built.
          </p>
        </header>
        <div className="features">
          {projects.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
