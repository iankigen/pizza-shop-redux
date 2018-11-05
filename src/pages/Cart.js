import React from 'react';
import { Container, Item, Button, Icon} from 'semantic-ui-react';
import ProductsPageLayout from './ProductsPageLayout';


export const Cart = () => (
    <ProductsPageLayout>
        <Container textAlign='justified' style={{marginTop: '2.5em', marginBottom: '2.5em', minHeight: 600}}>
            <Item.Group divided>
                <Item>
                    <Item.Image size='tiny' src='/images/pizza.jpg' />
                    <Item.Content verticalAlign='middle'>Content A</Item.Content>
                    <Item.Extra>
                        <Button color='red' floated='right'>
                            Remove
                            <Icon name='right delete' />
                        </Button>
                    </Item.Extra>
                </Item>

                <Item>
                    <Item.Image size='tiny' src='/images/pizza.jpg' />
                    <Item.Content verticalAlign='middle'>Content B</Item.Content>
                    <Item.Extra>
                        <Button color='red' floated='right'>
                            Remove
                            <Icon name='right delete' />
                        </Button>
                    </Item.Extra>
                </Item>

                <Item>
                    <Item.Image size='tiny' src='/images/pizza.jpg' />
                    <Item.Content content='Content C' verticalAlign='middle' />
                    <Item.Extra>
                        <Button color='red' floated='right'>
                            Remove
                            <Icon name='right delete' />
                        </Button>
                    </Item.Extra>
                </Item>
            </Item.Group>
            <Button positive>Confirm Order</Button>
            <Button negative>Cancel Order</Button>

        </Container>
    </ProductsPageLayout>
);