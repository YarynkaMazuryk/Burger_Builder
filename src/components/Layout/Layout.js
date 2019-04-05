import React from 'react';

import Container from '../../hoc/Container';
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <Container>
            <div>ToolBar, Side, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Container>
    )
};

export default layout;