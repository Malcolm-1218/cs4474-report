import { Container, Row, Col } from "react-bootstrap";
import TableOfContent from './TableOfContent';
import navmap from '../assets/NavMap.png'

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
                Click the <a href="https://lucid.app/lucidchart/2723b6ee-ef21-4e20-b2d1-4b8b9fcfe281/edit?invitationId=inv_938664ca-b662-4ef0-899a-f12af585e4f9&page=0_0#" target="_blank">Link</a> to check out the complete navigational map 
              </p>
              <img src={navmap} alt="Navigational Map" style={{ width: "900px", height: "auto" }}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
