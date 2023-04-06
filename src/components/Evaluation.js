import { Container, Row, Col } from "react-bootstrap";
import TableOfContent from "./TableOfContent";

export const Evaluation = () => {
  return (
    <section className="Exec">
      <Container>
        <Row className="aligh-items-center">
          <Col md="auto">
            <TableOfContent />
          </Col>
          <Col xs={8}>
            <div className="content">
              <h2>Final Heuristic Evaluation of the system</h2>
              <ol>
                <li>
                  <p>Visibility of System Status</p>
                  <p>
                    The game effectively displays the system status through
                    on-screen displays that are fixed to the game window. For
                    example, the health of the player, the score that is
                    captured and timing of the game. The game also displays a
                    clear HUD with essential information such as height and
                    speed, as it informs the user of certain status specifically
                    crucial to this game to make it visible and familiar to the
                    user’s cognitive model of this flight simulation game.
                    However, what could be done better is to change the outlook
                    of the numbers displayed to increase affordance of those
                    numbers, to make sure users know the meaning by adding
                    icons.
                  </p>
                </li>
                <li>
                  <p>Match between system and real world</p>
                  <p>
                    This game has done a good job on relating its content to the
                    real world. Since this is a flight simulator itself, using
                    existing model names of planes matches real planes, and no
                    make-up names are used for this system, such that users do
                    not need extra effort to learn this game. On the other hand,
                    the game follows a general game design language, that is,
                    the interfaces are similar to other games, and players can
                    feel similarity from this game. Jargons that are unrelated
                    to the game content are not seen in this game, which is also
                    a good fact.
                  </p>
                </li>
                <li>
                  <p>User control and freedom</p>
                  <p>
                    To avoid users making unwanted actions, the game is designed
                    to avoid such scenarios. Throughout the gameplay, rare cases
                    of this can be seen. Additionally, players can pause, save,
                    and load their progress, ensuring they have the flexibility
                    to manage their flight experience.
                  </p>
                </li>
                <li>
                  <p>Consistency and standards</p>
                  <p>
                    This game’s control mode uses 8-keys control, which are
                    “wasd” and arrow keys. This control mode is the same as the
                    plane control of the famous game, “GTA5”, so it is
                    consistent with the player's experience of each button’s
                    function. Another implementation of the control in the
                    design of this game is to use a mouse to control a virtual
                    joystick. This method is less consistent with users’
                    experience, thus is not set to be the primary control mode.
                  </p>
                  <p>
                  In terms of interface design, the game adheres to consistent design patterns, such as button layouts, menu structures, and control schemes, making it easier for users to learn and navigate the game.
                  </p>
                </li>
                <li>
                  <p> Error prevention</p>
                  <p>
                  This game demonstrates good error prevention. On each action that may affect the player’s money, inventory, or other important status, such as quitting the game, the game pops a dialog to ask the user whether to confirm or not. To improve error prevention, the game could also include some features on the actual gameplay, such that when height is not in a safe interval, the HUD could show some “warning” to inform the user.
                  </p>
                </li>
                <li>
                  <p>Recognition rather than recall</p>
                  <p>
                  This game shows a good application of this heuristic evaluation. The game design shows a good minimalism in terms of the complexity of the game and difficulty of control. Nonetheless, the gameplay still requires the user to know how to control the plane, which should be improved.

                  </p>
                </li>
                <li>
                  <p>Flexibility and efficiency of use</p>
                  <p>
                  This game displays a level of flexibility. The game is designed to have multiple levels, and each level has a different difficulty offset. By the design, this game also provides an entry-level control and a high-level control. Essentially, these two levels restrict the speed that the plane can reach. If the user is playing for the first time, they can choose the lower speed limit to avoid crashing and failing on the game. As the game reveals, the user can also unlock more expensive and complex planes and missiles. 
                  </p>
                </li>
                <li>
                  <p>Aesthetic and minimalist design</p>
                  <p>
                  The game's UI is clean and uncluttered, with only essential information displayed on the HUD. Menus and interfaces are visually appealing, using modern design principles to create an immersive and enjoyable experience for users.
                  </p>
                </li>
                <li>
                  <p>Help users recognize, diagnose, and recover from errors</p>
                  <p>
                  A noticeable “constraint” can be seen on the menu page. When user switches between tabs, the tabs are highlighted, shadowed to inform the user the current status, therefore prevent error. However, this game still lacks the information to help users deal with errors. Some possible improvements is listed in the recommendation section of this report.
                  </p>
                </li>
                <li>
                  <p>Help and documentation</p>
                  <p>
                  The game provides a textual tutorial that explains with example on how to play the game. Documentation can also be found in the shopping page, where each item has a detailed description with measurements displayed with it. Still, an interactive tutorial is favorable for this game since it can deliver a more complex cognitive model to the user as the game may extend its features in the future.
                  </p>
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
