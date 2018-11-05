import React from 'react';
import { Container, Item, Button, Icon} from 'semantic-ui-react';
import ProductsPageLayout from './ProductsPageLayout';


export const Orders = () => (
    <ProductsPageLayout>
        <Container textAlign='justified' style={{marginTop: '2.5em', marginBottom: '2.5em', minHeight: 600}}>
            <Item.Group divided>
                <Item>
                    <Item.Image size='tiny' src='/images/pizza.jpg' />
                    <Item.Content verticalAlign='middle'>Content A</Item.Content>
                    <Item.Extra>
                        <Button floated='right'>
                            Rate
                            <Icon name='right star' />
                        </Button>
                    </Item.Extra>
                </Item>

                <Item>
                    <Item.Image size='tiny' src='/images/pizza.jpg' />
                    <Item.Content verticalAlign='middle'>Content B</Item.Content>
                    <Item.Extra>
                        <Button floated='right'>
                            Rate
                            <Icon name='right star' />
                        </Button>
                    </Item.Extra>
                </Item>

                <Item>
                    <Item.Image size='tiny' src='/images/pizza.jpg' />
                    <Item.Content content='Content C' verticalAlign='middle' />
                    <Item.Extra>
                        <Button floated='right'>
                            Rate
                            <Icon name='right star' />
                        </Button>
                    </Item.Extra>
                </Item>
            </Item.Group>
            <Button basic positive>Feedback</Button>

        </Container>
    </ProductsPageLayout>
);