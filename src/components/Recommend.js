import { Container, Row, Col } from "react-bootstrap";
import TableOfContent from './TableOfContent';

export const Recommend = () => {
  return (
    <section className="Exec">
      <Container>
        <Row className="aligh-items-center">
          <Col md='auto'>
            <TableOfContent />
          </Col>
          <Col xs={8}>
            <div className="content">
              <h2>Recommendations & Future Work</h2>
                <p>
                Overall, the game gives people a feel that it is specially designed to improve user experience, but there are still missing essential systems, such as money & upgrade system, enemy AI, rewards, missions and more. This game already provides a decent prototype of a plane-simulation and fight game, but only with harder effort and more time invested will the game be completed and be popular. The following tips are given under an assumption that the implemented components of this game are finished, for example, assume the setting options are functioning. The recommendations based on the evaluation of this game.
                </p>
                <ol>
                    <li>
                    Enhance visibility of system status: The HUD needs to be modified to complete these goals: a. the displayed numbers should be interpretable with no learning effort; b. more critical information, such as losing speed should be displayed as a warning when necessary.
                    </li>
                    <li>
                    Optimize flexibility and efficiency of use: The game interface can include more viewing options, such as first-person point of view and a more distanced third-person camera option. Continue to offer multiple difficulty levels and control options to cater to a wide range of user expertise and preferences. Implement more control options, such joystick, and game controller.
                    </li>
                    <li>
                    Maintain consistency in control schemes: When introducing new features or game elements, ensure that the control schemes align with existing standards and users' expectations to maintain consistency and ease of use.
                    </li>
                    <li>
                    Expand help and documentation: Consider incorporating an interactive tutorial that allows users to learn by doing, offering a more engaging and comprehensive learning experience. Update the documentation with new features or changes as the game evolves to ensure users always have access to up-to-date information.
                    </li>
                    <li>
                    Strengthen error prevention and recovery: Provide clear error messages and guidance on how to recover from errors (e.g., troubleshooting steps, hints, or tips) to help users overcome challenges in gameplay.
                    </li>
                    <li>
                    For the background story of this game, a easy way to improve user experience is to include an attractive audio that read through the story. Also, according to the user’s feedback, scroll the story all the way to the top and show a button that returns to the main menu.
                    </li>

                </ol>
                <p>By implementing these recommendations, the game can improve the user experience, ensuring players have a more enjoyable and engaging time with the game.</p>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
