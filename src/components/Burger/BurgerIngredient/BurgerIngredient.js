import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css'

class BurgerIngredient extends Component {
    render () {
        let indredient = null;

        switch (this.props.type) {
            case('bread-bottom'):
                indredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                indredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                indredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                indredient = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):
                indredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                indredient = <div className={classes.Salad}></div>;
                break;
            default:
                indredient = null;
        }
        return indredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;