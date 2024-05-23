import { Badge, Container, Nav, Navbar } from "react-bootstrap";

function Header({ handleChangeHome, handleChangeDiary, diaryCount }) {
  return (
    <div className="container-fluid bg-secondary">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            Diary
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 d-flex align-items-center justify-content-end">
              <Nav.Link
                className="text-white"
                onClick={handleChangeHome}
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="text-white"
                onClick={handleChangeDiary}
                href="#link"
              >
                Diary <Badge bg="primary">{diaryCount}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
