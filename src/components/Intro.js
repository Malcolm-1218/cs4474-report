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
                The purpose of this report is to provide an overview of our
                redesign project undertaken as part of the Human-Computer
                Interaction (HCI) course. HCI is a multidisciplinary field that
                focuses on the design and evaluation of interactive systems to
                ensure an optimal user experience. In today's technology-driven
                world, creating user-centered designs has become paramount for
                the success of any product or service. Through this project, our
                team aimed to apply the principles and methodologies taught in
                the HCI course to redesign an existing application, ultimately
                enhancing its usability and user satisfaction. </p>
              <p>
                The report will present a detailed account of our project, starting with the
                identification of a suitable application for redesign, followed
                by an in-depth analysis of its current user experience. We will
                discuss the methods employed for gathering user feedback and the
                insights obtained, which informed our design decisions.
                Additionally, we will outline the iterative design process,
                highlighting the various stages of prototyping, testing, and
                refining our proposed solution. Finally, the report will
                conclude with an evaluation of the redesigned application's
                performance, a comparison with the original version, and
                recommendations for further improvements.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};
