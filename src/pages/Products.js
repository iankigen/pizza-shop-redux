import React from 'react';
import { Item, Pagination, Button, Icon, Container } from 'semantic-ui-react';
import ProductsPageLayout from './ProductsPageLayout';

const paragraph = <div>
    Buffalo Sauce • Honey Citrus Pepper • Spicy Chipotle Barbecue • Honey BBQ • Asian Schezuan Scallion Glaze • Sweet
    Chili • Garlic Parmesan
</div>;


export const Products = () => (
    <ProductsPageLayout>
        <Container textAlign='justified' style={{marginTop: '2.5em', marginBottom: '2.5em'}}>

            <Item.Group divided>

                <Item>
                    <Item.Image src='/images/pizza.jpg'/>

                    <Item.Content>
                        <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                        <Item.Meta>
                            <span className='cinema'>IFC Cinema</span>
                        </Item.Meta>
                        <Item.Description>{paragraph}</Item.Description>
                        <Item.Extra>
                            <Button primary>
                                Add to Cart
                                <Icon name='right shop' />
                            </Button>
                            <Button color='green'>
                                Buy Now
                                <Icon name='right shopping basket' />
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Image src='/images/pizza.jpg'/>

                    <Item.Content>
                        <Item.Header as='a'>Watchmen</Item.Header>
                        <Item.Meta>
                            <span className='cinema'>IFC</span>
                        </Item.Meta>
                        <Item.Description>{paragraph}</Item.Description>
                        <Item.Extra>
                            <Button primary>
                                Add to Cart
                                <Icon name='right shop' />
                            </Button>
                            <Button color='green'>
                                Buy Now
                                <Icon name='right shopping basket' />
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Image src='/images/pizza.jpg'/>

                    <Item.Content>
                        <Item.Header as='a'>Watchmen</Item.Header>
                        <Item.Meta>
                            <span className='cinema'>IFC</span>
                        </Item.Meta>
                        <Item.Description>{paragraph}</Item.Description>
                        <Item.Extra>
                            <Button primary>
                                Add to Cart
                                <Icon name='right shop' />
                            </Button>
                            <Button color='green'>
                                Buy Now
                                <Icon name='right shopping basket' />
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Container>
        <Container textAlign='center' style={{marginBottom: '2.5em'}}>
            <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
            />
        </Container>
    </ProductsPageLayout>
);