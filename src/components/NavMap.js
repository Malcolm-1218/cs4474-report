import { Container, Row, Col } from "react-bootstrap";
import TableOfContent from './TableOfContent';

export const NavMap = () => {
  return (
    <section className="Exec">
      <Container>
        <Row className="aligh-items-center">
          <Col md='auto'>
            <TableOfContent />
          </Col>
          <Col xs={8}>
            <div className="content">
              <h2>Navigational Map</h2>
              <p>
                The main objective of the redesign is to improve the interactive
                interfaces and interactive gameplays of the game. The redesign
                will develop more pages/states and improve current interfaces
                inside or outside the game session. Specifically, the redesign
                aims to improve the main menu page and add a new game/resume
                page, setting page, shopping page/system, achievement page, and
                tutorial page. The original game design relies on using the
                mouse cursor as an input to simulate Joycon controls for
                maneuvering the "airplane". However, this approach can be
                counterintuitive, difficult to discover, and conflicts with the
                user's mental model, resulting in unnecessary complexity. To
                bridge the gap between the user's gulf of evaluation and
                execution, the use of metaphors can be a valuable technique. By
                providing visual cues that highlight what the user should focus
                on and what should be hidden, the experience can become more
                intuitive and engaging. For instance, instead of relying solely
                on mouse controls, a plane joystick can be added as a UI element
                to simulate the physical controls of an airplane, allowing users
                to quickly grasp the idea of controlling the plane. Similarly,
                when using a keyboard for input, an image of a key can guide the
                user on which button to push to complete a specific task. By
                drawing on familiar metaphors and previous experiences of using
                similar controls in other games, users can learn more quickly
                and effectively how to control the airplane in this game. Our
                project will focus on graphical interfaces, as we will not be
                implementing voice or haptic interfaces due to hardware
                limitations. Our in-game UI will heavily rely on icon and
                multimedia interfaces, designed with isomorphic and flat 2D
                principles for simplicity and readability. Our main menu will be
                a nested menu, as we have enough selection elements that a flat
                menu would be overwhelming for new users. This will help users
                quickly navigate to the element they need, especially in
                categories such as game modes. Important buttons such as “start
                game” should be bigger than other buttons in light of Fitt’s
                law. For the next couple weeks, we are going to create
                wireframes or interactive prototypes to test the functionality
                of the new features, such as the shopping page/system or the
                game/resume page. These prototypes can be tested with potential
                users to identify usability issues, and we can use the feedback
                to refine their designs and improve the user experience.
                Original Project Link:
                https://github.com/IdoChennn/4474---Flight-simulation-video-game
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
