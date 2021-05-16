import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  ButtonGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MealNumber } from "./context";
import { useContext, useEffect } from "react";
const img = require("./assets/download.jfif");

export default function App() {
  const [getMealNumber, setMealNumber] = useContext(MealNumber);
  useEffect(() => {
    console.log(getMealNumber.target);
  }, [getMealNumber.target]);
  return (
    <Container id="main-container">
      <Row>
        <Col>
          <Card
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <Card.Img
              src={img}
              variant="top"
              style={{
                width: "100%"
              }}
            />
            <Card.Body
              style={{
                marginTop: "2%"
              }}
            >
              <Card.Title
                style={{
                  fontFamily: "Poppins",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%"
                }}
              >
                {" "}
                Personal meal plan{" "}
              </Card.Title>
              <Row
                style={{
                  color: "grey",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  paddingLeft: "1%",
                  paddingRight: "20px",
                  paddingBottom: "2%",
                  backgroundColor: "blue"
                }}
              >
                {" "}
                <span
                  style={{
                    marginBottom: "2%",
                    textAlign: "center"
                  }}
                >
                  Healthy, deButtoncious meals, individually portioned and ready
                  to eat. This Meal Plan type automatically renews every
                  Saturday at 6am EST.{" "}
                </span>{" "}
              </Row>
              <div id="container-flex">
                <Col className="meal-plan-desc">
                  <Row>
                    <ButtonGroup>
                      <Button
                        className="btn-plan"
                        onClick={(e) => {
                          setMealNumber({ target: 2 });
                        }}
                      >
                        2
                      </Button>
                      <Button
                        className="btn-plan"
                        onClick={(e) => {
                          setMealNumber({ target: 4 });
                        }}
                      >
                        4
                      </Button>
                      <Button
                        className="btn-plan"
                        onClick={(e) => {
                          setMealNumber({ target: 6 });
                        }}
                      >
                        6
                      </Button>
                      <Button
                        className="btn-plan"
                        onClick={(e) => {
                          setMealNumber({ target: 8 });
                        }}
                      >
                        8
                      </Button>{" "}
                    </ButtonGroup>
                  </Row>
                  <Row style={{ marginTop: "5%", color: "rgb(121, 121, 121)" }}>
                    {" "}
                    <span> Meals per serving </span>
                  </Row>
                  <Row style={{ marginTop: "10%" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "rgb(121, 121, 121)"
                      }}
                    >
                      {" "}
                      $11.00{" "}
                    </span>{" "}
                    <br />
                    <span
                      style={{
                        fontWeight: "lighter",
                        color: "grey"
                      }}
                    >
                      {" "}
                      Per serving{" "}
                    </span>
                  </Row>
                </Col>
                <Col className="meal-plan-desc-1">
                  <div style={{}}>
                    <span
                      style={{
                        float: "right",
                        color: "grey",
                        marginTop: "24%"
                      }}
                    >
                      Total weekly price{" "}
                    </span>

                    <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        marginLeft: "32%",
                        marginTop: "15%",
                        float: "right",
                        color: "rgb(121, 121, 121)"
                      }}
                    >
                      $79
                    </span>
                  </div>
                </Col>
              </div>
              <div id="cta">
                <Button>
                  <Link className="link" to="/menu">
                    Select menu
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
