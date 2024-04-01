import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard1 } from "./ProjectCard1";
import projImg1 from "../assets/img/home.png";
import projImg2 from "../assets/img/garden_feedback.png";
import projImg3 from "../assets/img/cart.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import whatsappimg from "../assets/img/whatsapp.png"
import inkmimmic from "../assets/img/InkMimic.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Landing page",
      description: "Discover our curated collection",
      imgUrl: projImg1,
    },
    {
      title: "Feedback",
      description: "Share your thoughts and experiences with us to help us improve our products and services. Your feedback matters!",
      imgUrl: projImg2,
    },
    {
      title: "Cart",
      description: "Review your selected items, manage quantities, and proceed to secure checkout for a seamless shopping experience",
      imgUrl: projImg3,
    },
  ];

  const project3 = [
   
    {
      title: "Landing Page",
      description: "AI-driven text generation system, powered by the Llama 7B language model, offering dynamic text creation in various styles. Seamlessly integrated with a WhatsApp bot, it streamlines user feedback and survey processes, reducing response time by 40%.",
      imgUrl: inkmimmic,
    },
    {
      title: "Whatsapp Bot",
      description: "A multilingual WhatsApp bot to enhance user feedback and survey processes, leading to a 40% reduction in response time for inquiries",
      imgUrl: whatsappimg,
    },
    {
      title: "Cart",
      description: "",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a diverse range of transformative projects seamlessly integrating AI, frontend, and backend technologies. From advanced AI content generation to user-centric e-commerce platforms and AI-driven trading bots, witness innovation at the intersection of technology and design in my portfolio.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link style={{cursor:'pointer'}} eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style={{cursor:'pointer'}} eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style={{cursor:'pointer'}} eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <div>
                        <h5 style={{textAlign:'center'}}>Gardening Ecommerce Website</h5>
                        <p>Developed a progressive gardening store app using React and Spring Boot, with a focus on user-centric design and MySQL database modeling. Utilized Eureka for service discovery, enhancing adaptability to changing service instances. Achieved a 30% improvement in system performance, resulting in boosted customer engagement. </p>
                        <p>The application offers a seamless shopping experience for garden enthusiasts, featuring a wide range of products. Spearheaded development efforts to deliver a high-quality, performance-optimized e-commerce platform for gardening enthusiasts</p>
                        </div>
                       
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    <div>
                        <h5 style={{textAlign:'center'}}>CROP YIELD AND PRICE PREDICTION</h5>
                     
                        <p>Developed a React-based web app for crop yield and price prediction in February 2023. Achieved 95.3% accuracy using the Random Forest algorithm, after comparing different machine learning methods. The application offers valuable insights for agricultural decision-making, aiding farmers in optimizing crop management and pricing strategies."</p>
                        </div>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard1
                              key={index}
                                {...project}
                                />
                                )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    <div>
                        <h5 style={{textAlign:'center'}}>AI-Powered Content Generation and Feed
back System</h5>
                      <p>Built an AI system using Llama 7B to generate text in various styles based on user prompts.</p>
                      <p>The project showcases the unique feature of generating video from text prompts, creating dynamic story videos.</p>
                      <p>Integrated a WhatsApp bot to streamline feedback, reducing response time by 40%.</p>
                        </div>
                        {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard1
                              key={index}
                                {...project}
                                />
                                )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="hi"></img>
    </section>
  )
}
