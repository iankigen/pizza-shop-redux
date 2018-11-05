import React from 'react'
import { Grid, Segment, Header, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { SIGNUP } from "../constants/url-list";


export const Advert = () => (
    <Segment style={{padding: '8em 0em'}} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h3' style={{fontSize: '2em'}}>
                        We Help Companies and Companions
                    </Header>
                    <p style={{fontSize: '1.33em'}}>
                        We can give your company superpowers to do things that they never thought possible.
                        Let us delight your customers and empower your needs... through pure data analytics.
                    </p>
                    <Header as='h3' style={{fontSize: '2em'}}>
                        We Make Bananas That Can Dance
                    </Header>
                    <p style={{fontSize: '1.33em'}}>
                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                        bioengineered.
                    </p>
                </Grid.Column>
                <Grid.Column floated='right' width={7}>
                    <Link to={SIGNUP}>
                        <Image bordered size='big' src='/images/pizza.jpg'/>
                    </Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
);