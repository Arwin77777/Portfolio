import { Col } from "react-bootstrap";

export const ProjectCard1 = ({ title, description, imgUrl }) => {

    const getHeight = (title) => {
        switch (title) {
          case "Whatsapp Bot":
            return "550px"; 
          default:
            return "300px"; 
        }
    };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{height:getHeight(title)}} src={imgUrl} alt="hello"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
