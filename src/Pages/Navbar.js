import React ,{Component, Fragment} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../style/navbar.css';
import $ from 'jquery';

class NavComponent extends Component{

    componentDidMount(){
        $('.navbar a').click(function(){
            $('html , body').animate({scrollTop:0},800);
        });
    }
  
    render(){
        return(
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                    <Link className="bb"  to="/ReactEcommerce" ><span>W</span>atches </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                           <NavLink exact to="/ReactEcommerce">Home</NavLink>
                          <NavLink to="/product">Product</NavLink>
                           <NavLink to="/cart">Cart</NavLink>
                        </Nav>
                        <NavLink to="/cart" >       
                            <div className="cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="badge badge-danger quentity">{this.props.quantityCount}</span>
                            </div>
                        </NavLink>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
const mapStateProps =(state)=>{
    return {
        quantityCount : state.cart.reduce((total,item)=>total + parseInt(item.quantity),0)
    }
}
export default connect(mapStateProps)(NavComponent);

