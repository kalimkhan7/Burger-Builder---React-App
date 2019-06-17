import React from 'react';
import classes from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import Aux from '../Aux/Aux';
// import Backdrop from '../UI/Backdrop/Backdrop'

class Layout extends React.Component {

    state ={
        showSideDrawer: false
    }

    showSideDrawerHandler = () =>{
        this.setState({
            showSideDrawer: false
        })
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }


    render () {
        return ( 
            <Aux>
                <Toolbar
                    clicked={this.drawerToggleHandler}
                />
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    clicked={this.showSideDrawerHandler}
                />
                
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
    

    export default Layout;