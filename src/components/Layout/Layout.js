import React, {Component} from "react";
import Aux from "../../hoc/MyAux";
import classes from "./Layout.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler = () => {


        this.setState((prevState)=>{
            //console.log(prevState.showSideDrawer);
            return {showSideDrawer:!prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <div> Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}

export default Layout;


//
//
// import React from "react";
// import Aux from "../../hoc/MyAux";
// import classes from "./Layout.css"
// import Toolbar from '../Navigation/Toolbar/Toolbar'
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
//
// const layout = (props) => (
//     <Aux>
//             <Toolbar/>
//             <SideDrawer/>
//             <div> Toolbar, SideDrawer, Backdrop</div>
//             <main className={classes.Content}>
//                     {props.children}
//             </main>
//     </Aux>
// )
//
// export default layout;