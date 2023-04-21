import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import organ from "../../Assets/Projects/organ.png";
import mars from "../../Assets/Projects/mars.png";
import ambassador from "../../Assets/Projects/ambassador.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mars}
              isBlog={false}
              title="Mars Delight"
              description="Indulge in an otherworldly culinary experience at Mars Delight - where the flavors of the red planet meet the finest in dining. Experience the taste of a new world at Mars Delight - the premier restaurant on the red planet."
              ghLink="https://github.com/Shreyaannnnn/mars-delight"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ambassador}
              isBlog={false}
              title="Campus Ambassador Portal"
              description="The goal was to develop a Campus/Community Ambassador Management Portal."
              ghLink="https://github.com/Shreyaannnnn/campus-ambassador-portal"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={organ}
              isBlog={false}
              title="Organ-ise"
              description="A Decentralized Organ Delivery System using Solana Blockchain. The proposed system digitalizes the process of Organ Donation, enhances the existing system by handling endless data, and makes it transparent and cost-efficient."
              ghLink="https://github.com/Shreyaannnnn/organ-donation-blockchain"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https:"
              // demoLink=
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col> */}


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
