import { Container, Row, Col } from "react-bootstrap";
import TableOfContent from "./TableOfContent";

export const Intro = () => {
  return (
    <section className="content">
      <Container>
        <Row className="aligh-items-center">
          <Col md="auto">
            <TableOfContent />
          </Col>
          <Col xs={8}>
            <div className="content">
              <h2>Introduction</h2>
              <p>
              <strong>Human-Computer Interaction (HCI)</strong> is an interdisciplinary field that focuses on the design, evaluation, and implementation of interactive computing systems for human use. As technology continues to evolve at a rapid pace, it is crucial to ensure that these systems are user-friendly, efficient, and accessible to a wide range of users. This report aims to provide a comprehensive analysis of a specific interactive game, with the goal of optimizing its usability and user experience.</p>
              <p>
              The report is organized into five key sections, each addressing a critical aspect of the HCI design process. The first section, the executive summary, provides an overview of the report's content and highlights the most significant findings and recommendations. The second section presents a navigational map of the system under evaluation, visually illustrating the flow of user interactions and the organization of the system's components.
              </p>
              <p>In the third section, we detail a list of 20 design principles that have been applied in the development of the game, along with justifications for their inclusion. These principles serve as guidelines for effective interaction design and are grounded in established HCI research.</p>
              <p>The fourth section, the final heuristic evaluation, assesses the system's compliance with widely-accepted usability heuristics, providing insight into potential areas of improvement. This evaluation will help identify usability issues and establish priorities for system refinement.</p>
              <p>Lastly, the fifth section offers thoughtful recommendations for enhancing the system based on the findings from the heuristic evaluation. These recommendations aim to address identified issues and contribute to a more seamless, enjoyable, and efficient user experience.</p>
              <p>By systematically examining the interactive system through these five sections, this report will not only identify areas for improvement but also provide valuable insights and recommendations for enhancing the overall usability and user experience. Ultimately, our goal is to contribute to the development of more effective, accessible, and enjoyable human-computer interactions.</p>
              <p>Click the link to see our project: <a href="https://github.com/IdoChennn/4474-Project-in-development">https://github.com/IdoChennn/4474-Project-in-development</a></p>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
};
