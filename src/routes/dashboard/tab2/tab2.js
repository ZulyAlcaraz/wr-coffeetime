
import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Tab2 extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>Tab 2</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default Tab2;
