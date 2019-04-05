import React, {Component} from 'react';
import Container from '../../hoc/Container';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return(
            <Container>
                <Burger/>
                <div>Burger</div>
                <div>Build Controls</div>
            </Container>
        );
    }
};

export default BurgerBuilder;