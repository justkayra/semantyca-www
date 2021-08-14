import {Container, Nav} from "react-bootstrap";
import * as React from "react";


const LangSwitcher = () => {


    return (<div index={1}>
            <Container fluid>
                <Nav activeKey="/home">
                    <Nav.Item>
                       {/* <Nav.Link onClick={() => dispatch(updateLang('en'))}>en</Nav.Link>*/}
                    </Nav.Item>
                  {/*  <Nav.Item>
                        <Nav.Link onClick={() => dispatch(updateLang('ru'))}>ru</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => dispatch(updateLang('pt'))}>pt</Nav.Link>
                    </Nav.Item>*/}
                </Nav>
            </Container>
        </div>
    )
}

export default LangSwitcher;