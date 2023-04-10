import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { NavBar } from "./NavBar";

export const About = () => {
  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  return (
    <div>
      <NavBar />
      <Box
        sx={{ flexGrow: 1 }}
        style={{ marginLeft: "30px", marginTop: "30px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Chen Qu
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Highly motivated and energetic Year 4 student with strong
                    coding and interpersonal skills.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleShow1}>
                  Learn More
                </Button>
                <Modal show={show1} onHide={handleClose1}>
                  <Modal.Header closeButton>
                    <Modal.Title>Chen Qu</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Highly motivated and energetic Year 4 student with strong
                    coding and interpersonal skills. Honours Specialization in
                    Computer Science. Outstanding learning abilities with quick
                    adaptation to new concepts, teams, and technologies. I Have
                    a lot of experience in programming languages, including
                    Java, Pathon, HTML/CSS, JS and Typescript.
                    <br />
                    <br />
                    Github handle: <strong>malcolm-1218</strong>
                  </Modal.Body>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ido Chen
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A fourth year computer science student with strong
                    interpersonal, cooperative skills.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleShow2}>
                  Learn More
                </Button>
                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Ido Chen</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    A fourth year computer science student with strong
                    interpersonal, cooperative skills. Multiple project
                    development experiences during school years. Consistently
                    exceed performance expectations. Demonstrated teamwork with
                    problem-solving and excellent communication skills.
                    Proficient with Java, C, and Python, skilled in Web page
                    design, game design (using Unity), HTML, CSS, JS and MySQL.
                    A fast learner of new software programs.
                    <br />
                    <br />
                    Github handle: <strong>IdoChennn</strong>
                  </Modal.Body>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Xuanran Qi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    4th Year computer science student with strong unity
                    experience.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleShow3}>
                  Learn More
                </Button>
                <Modal show={show3} onHide={handleClose3}>
                  <Modal.Header closeButton>
                    <Modal.Title>Xuanran Qi</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    4th Year computer science student with strong unity
                    experience. Skilled with C#, Java, C++ and aviation. Quick
                    adapter, ready to take on any difficulties that may arise.
                    Fluent in Mandarin and English, also happens to be a
                    licensed pilot with strong aviation knowledge. Previously
                    helped with the development of several video game studios
                    with the development process, including but not limited to
                    music design, programming, gameplay design, object physics
                    and more.
                    <br />
                    <br />
                    Github handle: <strong>xqi53@uwo.ca</strong>
                  </Modal.Body>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shaken Zhang
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    I am a 4th-year computer science student who acquired a
                    strong foundation in programming and computer systems study.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleShow4}>
                  Learn More
                </Button>
                <Modal show={show4} onHide={handleClose4}>
                  <Modal.Header closeButton>
                    <Modal.Title>Shaken Zhang</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I am a 4th-year computer science student who acquired a
                    strong foundation in programming and computer systems study.
                    I have practiced my computer science skills in courses
                    including mandatory cs courses in our university, as well as
                    internet, software engineering and team-based projects from
                    elective courses and internship experiences. I have a solid
                    background in languages including C++, Python, Java, HTML
                    etc. I am glad to participate in this HCI course to gain
                    more knowledge in designing, and developing user-friendly
                    applications.
                    <br />
                    <br />
                    Github handle: <strong>szhan872</strong>
                  </Modal.Body>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Yanwen Wang
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    I am a passionate person who believes in the importance of
                    education and accessibility to technological advancements.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleShow5}>
                  Learn More
                </Button>
                <Modal show={show5} onHide={handleClose5}>
                  <Modal.Header closeButton>
                    <Modal.Title>Yanwen Wang</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I am a passionate person who believes in the importance of
                    education and accessibility to technological advancements.
                    My programming experience is various, and mainly focus on
                    back-end development. I am glad to have this chance to gain
                    the advanced HCI technology and implement these concepts
                    with my other teammates.
                    <br />
                    <br />
                    Github handle: <strong>YanwenWang1125</strong>
                  </Modal.Body>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
