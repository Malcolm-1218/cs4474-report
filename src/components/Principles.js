import { Container, Row, Col } from "react-bootstrap";
import TableOfContent from "./TableOfContent";

export const Principles = () => {
  return (
    <section className="Exec">
      <Container>
        <Row className="aligh-items-center">
          <Col md="auto">
            <TableOfContent />
          </Col>
          <Col xs={8}>
            <div className="content">
              <h2>Design Principles</h2>
              <ol>
                <li>
                  <p>80/20 rules</p>

                  <p>
                    The original game design is overly simplistic. As players
                    gain proficiency, they begin to demand more features and
                    complexity. However, adding these features directly to the
                    initial UI can result in a cluttered and confusing
                    interface. By concentrating on the 20% of interface elements
                    that deliver 80% of the functionality, designers can
                    maintain a clean and user-friendly experience. To achieve
                    this balance, it is advisable to allocate 80% of the screen
                    space for the main content, such as the game world or
                    application content, while reserving the remaining 20% for
                    essential interface elements, including menus and toolbars.
                  </p>
                </li>
                <li>
                  <p>Visibility</p>
                  <p>With the introduction of additional features in the game, visibility has become a critical aspect of creating a user-friendly and enjoyable experience. We have ensured that text, icons, and other UI elements are legible and easy to comprehend. Furthermore, we have employed colors, shapes, and animations to emphasize essential elements, capturing the player's attention during crucial information or events. For instance, health bars may change color or flash when reaching a critical level.</p>
                </li>
                <li>
                  <p>Affordances</p>
                  <p>Affordances help users understand what actions are possible by providing visual or sensory cues that indicate the object's functionality or purpose. We designed a Home button featuring an easily recognizable house icon to convey its purpose to the user. These visual cues imply that clicking or tapping the button will navigate the user to the main menu or starting screen of the game.</p>
                </li>
                <li>
                  <p>Familiarity</p>
                  <ul>
                    <li>
                      <p>Utilizing familiar symbols and icons enables players to swiftly comprehend and interact with various game elements without confusion. In the original project, there was no aiming point when the aircraft was shooting. As a result, we incorporated a crosshair, allowing players to easily recognize and understand their target, since it has become a standard visual cue in numerous games.</p>
                    </li>
                    <li>
                      <p>We have introduced a green medical cross to represent the player's health. This symbol is familiar to users as it is commonly associated with health and medical care in various contexts. By incorporating this easily recognizable icon, players can swiftly determine their health status during gameplay.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Feedforward</p>
                  <p>When the user hovers their cursor over a specific upgrade, a tooltip appears, displaying a brief description of the upgrade's effects. This feedforward mechanism helps users understand the benefits of each upgrade before committing to it, enhancing the decision-making process and overall user experience.</p>
                </li>
                <li>
                  <p>See-through</p>
                  <p>In our latest project, players can easily view the number of coins they have collected. As a result, we designed the game to highlight all upgradeable weapons within their purchasing range. By making these options visually apparent, players can easily identify which upgrades are accessible to them, streamlining the decision-making process and improving the overall gaming experience.</p>
                </li>
                <li>
                  <p>Constrains</p>
                  <p>In the story mode, players are required to complete Chapter 1 before gaining access to Chapter 2, and they must finish Chapter 2 before proceeding to Chapter 3. This constraint ensures that users are not overwhelmed or overly confused by gradually introducing new content and challenges as they progress through the game. If a Chapter is not accessible, its representation can be dimmed or displayed in grayscale to signify its unavailability. Users will find that clicking on it has no effect.</p>
                </li>
                <li>
                  <p>Chunking</p>
                </li>
                <li>
                  <p>Mapping</p>
                </li>
                <li>
                  <p>Confirmation</p>
                  <p>In our game's shop feature, we have implemented a purchase confirmation window that displays the item the player intends to buy, along with its price and the remaining balance after the purchase is completed. This feature enables users to review their transaction details and make informed decisions before finalizing their purchases, preventing potential errors or misunderstandings.</p>
                </li>
                <li>
                  <p>Progressive disclosure</p>
                  <ul>
                    <li>
                      <p>Interactive tutorials: Introduce game controls and mechanics gradually as players progress through the game. This allows players to learn at their own pace and minimizes the risk of overwhelming them with too much information at once.</p>
                    </li>
                    <li>
                      <p>Optional advanced settings: Provide a separate menu or panel for advanced settings, allowing experienced players to access and fine-tune additional simulation parameters, such as weather, aircraft systems, or realism settings. This way, advanced players can tailor the game to their preferences without cluttering the interface for less experienced players.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Aesthetic Consistency</p>
                  <p>By keeping the top bar menu always visible and positioned at the top of the screen across different pages, users can easily understand the interface and navigate through various sections of the game. The only exception is when users enter the game mode, and the top bar menu is disabled to provide an uninterrupted gaming experience. This design choice takes into consideration the specific context of the game mode, where the emphasis is on gameplay rather than navigation. Consistency helps create a cohesive and familiar user experience, reducing confusion and cognitive load.</p>
                </li>
                <li>
                  <p>Transfer</p>
                  <p>We used transfer principle by those familiar interface elements. Use familiar symbols, icons, and terminology from real-world aviation or other flight simulation games in the game's interface. This will help users quickly understand the functions of various interface elements and navigate the game more efficiently.</p>
                </li>
                <li>
                  <p>Control</p>
                  <p>In our redesigned game, we have improved the control layout to be more intuitive by closely resembling the control schemes found in other flight simulation games. This familiarity allows players to adapt more easily and enhances the overall gaming experience. </p>
                  <p>It also allows players to customize their control schemes to match their preferences or the settings of other games they've played. For instance, there is an options menu within the game that allows players to modify various game settings. This flexibility will enable players to adapt more easily to your game and create a more personalized experience.</p>
                </li>
                <li>
                  <p>Causality</p>
                  <p>In the redesigned shopping page, there are many items for user to purchase. When a purchase is done, the user don’t get any notification of successful purchase. To fix this mismatch between expectation and performance, mark an item to “purchased” after buy that item.</p>
                </li>
                <li>
                  <p>Fitts’s law </p>
                  <p>In the context of our game design, we applied Fitts's Law to improve usability by making important buttons larger and centrally positioned. For example:</p>
                  <ul>
                    <li>
                      <p>Start game button: Place the "Start Game" button in a central location on the main menu screen and make it larger than other buttons. This ensures that users can quickly and easily begin the game.</p>
                    </li>
                    <li>
                      <p>Purchase button: In the in-game shop, make the "Purchase" button larger and position it close to the item description or price. This design choice helps users quickly identify and confirm their purchases.</p>
                    </li>
                  </ul>
              
                </li>
                <li>
                  <p>Hick’s law </p>
                </li>
                <li>
                  <p>Feedback </p>
                  <p>In our game, we implemented feedback in the following ways:</p>
                  <ul>
                    <li>
                      <p>Button interaction feedback: When users press a button in the top menu, provide visual feedback to indicate that the button has been pressed. This is achieved by changing the button's appearance, such as highlighting it. This feedback helps users understand that their input has been registered.</p>
                    </li>
                    <li>
                      <p>Combat feedback: To enhance the gaming experience and provide a sense of accomplishment, implement feedback for successful enemy kills. This can include visual effects, such as explosions or particle effects, and score updates displayed on the screen. Providing this feedback helps players gauge their progress and understand the impact of their actions within the game.</p>
                    </li>
                  </ul>
                  <p>Incorporating these feedback mechanisms will create a more engaging and responsive gaming experience for users, ensuring that they feel connected to the game and its various interactions.</p>
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
