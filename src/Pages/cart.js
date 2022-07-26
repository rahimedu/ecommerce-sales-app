import React ,{Component, Fragment} from 'react';
import {removeFromCart,PayOrder,UpdateCart} from './../Api/action';
import {connect} from 'react-redux';
import Footer from './footer';
import './../style/cart.css';

class Cart extends Component{
        state = {
            inputValue : ''
        }

    payTheOrder = ()=>{
      
        console.log(Object.keys(this.props.product).length )
        if(Object.keys(this.props.product).length !== 0){
            alert("We Recieved Your Order 😍 ")
            this.props.PayOrder();
        }else{
            alert("No order 😍 ")
        }
        
    }

    handleUpdateItems=(e)=>{
        e.preventDefault();
    }

    handleChange =(e)=>{
        this.setState({inputValue : e.target.value})
    }

    resetInput =()=>{
            this.setState({ inputValue : ''})
    }

    render(){
        const cartList = this.props.totalQuantity > 0 ? this.props.product.map((item,index)=>{
            return (
                <div className="row"  key={index}>
                    <div className="parent-item  col-sm-12 " >
                        <h4>PRODUCT : <span>{index+1}</span></h4> 
                        <div className="contain">
                            <table>
                                <thead>
                                    <tr>
                                        <th>image</th>
                                        <th>title</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Delete</th>                                
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={process.env.PUBLIC_URL +"/"+ item.product.img} alt=".."  />
                                        </td>
                                        <td>{item.product.title}</td>
                                        <td>{item.product.price}$</td>
                                        <td>
                                            <div> 
                                                <form onSubmit={this.handleUpdateItems}>
                                                    <input type="number" defaultValue={item.quantity} onChange={this.handleChange}  min="1" />
                                                    <button type="submit" onClick={()=>{this.props.UpdateCart(index,this.state.inputValue)}}>
                                                        <i className="fa fa-check-circle"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                        <td>{item.product.price * item.quantity}$</td>
                                        <td>
                                            <div className="icon">
                                                <i className="fa fa-trash" onClick={()=>this.props.removeFromCart(index)}></i>
                                            </div>
                                        </td>
                                    </tr>  
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="totalPrice col-sm-12 " >
                        <div className="item col-md-3 col-sm-5 ml-auto">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>TAX</th> 
                                        <td>{item.product.tax}$</td>
                                    </tr>
                                    <tr>
                                        <th>SUB-TOTAL </th>
                                        <td>{item.product.price * item.quantity}$</td>
                                    </tr>
                                    <tr>
                                        <th>TOTAL </th>
                                        <td>{item.product.price * item.quantity + item.product.tax}$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) 
        }) : <div className="noProduct"> <h4>No Products In Your Cart</h4></div>


        return(
            <Fragment>
                <section className="cartComponent" >
                    <div className="container">
                        {cartList}
                        <div className="totalSalary">
                            <h3>total Salary : <span>{this.props.totalQuantity}$ </span></h3>
                            <button  onClick={this.payTheOrder}>Pay Order</button>
                        </div> 
                    </div>
                </section> 

                 <Footer />
         </Fragment>
        )
    }
}


const mapStateProps=(state)=>{
    return {
        product : state.cart,
        totalQuantity : state.cart.reduce((total,item)=>total + item.quantity * item.product.price + item.product.tax,0)
    }
}
export default connect(mapStateProps,{removeFromCart,PayOrder,UpdateCart})(Cart);