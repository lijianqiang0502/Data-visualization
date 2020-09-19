import React, {Component, Fragment} from 'react';
import styles from './index.module.css';

class Index extends Component{
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <Fragment>
                <div className={styles.box}>
                    <div className={styles.leftTop}></div>
                    <div className={styles.leftBottom}></div>
                    <div className={styles.rightTop}></div>
                    <div className={styles.rightBottom}></div>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Index;