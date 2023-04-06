import { Container, Row, Col } from "react-bootstrap";
import TableOfContent from './TableOfContent';

export const ExecDesc = () => {
  return (
    <section className="Exec">
      <Container>
        <Row className="aligh-items-center">
          <Col md='auto'>
            <TableOfContent />
          </Col>
          <Col xs={8}>
            <div className="content">
              <h2>Executive-Level Description</h2>
              <p>
              The proposed game redesign aims to enhance the user experience and overall usability by incorporating Human-Computer Interaction (HCI) design principles. The objective is to create a seamless, intuitive, and engaging gaming experience that caters to users' needs and expectations while reducing cognitive load and potential usability issues.
</p>
                <p>
                The redesign will develop more pages/states to improve current interfaces inside or outside the game session. Specifically, the redesign aims to improve the main menu page and add a new game/resume page, setting page, shopping page/system, achievement page, and in-game user interface to improve user’s experience and usability throughout the overall program.
                </p>
                <p>
                <strong>
                Key design elements:</strong></p>
                <p>
                Gameplay: The original game design relies on using the mouse cursor as an input to simulate Joycon controls for maneuvering the “airplane”. However, this approach can be counterintuitive, difficult to discover, and conflicts with the user’s mental model, resulting in unnecessary complexity. Also, to bridge the gap between the user’s gulf of evaluation and execution, multiple design principles will be applied to change the outlook of in-game UI. Doing so will reduce the cognitive load on the user, making the game more accessible and enjoyable. There are also other flaws in terms of affordance and visibility, including a black slider in the bottom left corner that is hard to interpret the meaning, two numbers floating on both sides without a meaning (lack affordance), and the number on bottom right is ambiguous (is it number of lifes or health points?). Also, there is no feedback and scores when hitting the yellow ring. Things like this makes it important to redesign the icons and number on this page. By drawing on familiar metaphors and previous experiences of using similar controls in other games, users can learn more quickly and effectively how to control the airplane in this game to allow users to quickly grasp the idea of controlling the plane.</p>
                <p>
                The original design was also not visually appealing in terms of menu page design, lack of extendable features and lack of attractive information such as a background story. It makes the game less emotionally engaging. By adding background story and narrative descriptions to the items in this game, the game aims to create a more immersive experience, fostering a deeper connection between users and the game world. 
              </p>
              <p>
              For the main menu page, the original design only has a start button, a tutorial button and an upgrade page which has a poorly designed “adding” function. This makes it difficult for users to customize their gameplay experience, purchase new items, or navigate the game. There is only a single game mode provided in the original design, which is flying around and hitting the yellow rings. That game mode provides no feedback and can easily lead to errors such as plane crashing, and losing target. These facts give a bad user experience, and a low usability. To improve the fact, feedback along with other components must be added to improve user stickiness and experience. 
              </p>
              <p>
              Therefore, our project has a focus on both game HUD enhancement and graphical interfaces, but not actually implementing many functions in the settings, such as image quality levels. Our in-game UI will rely on icon and multimedia interfaces, designed with isomorphic and flat 2D principles for simplicity and readability. Our main menu will be a nested menu, as we have enough selection elements that a flat menu would be overwhelming for new users. This will help users quickly navigate to the element they need, especially in categories such as game modes.

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
