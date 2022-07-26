import React ,{Component, Fragment} from 'react'
import {getId} from './../Api/data'
import {connect} from 'react-redux'
import {addToCart,AddComment} from './../Api/action'
import Footer from './footer'
import './../style/productDetails.css'


class ProductDetails extends Component{
    state ={
        productDetails : [], 
        quantity : 0,
        name:'',
        email:'',
        comment:''
    }

    componentDidMount(){
        const id=this.props.match.params.id;
       getId(parseInt(id)).then(res=>{
           this.setState({productDetails : res})
       })
    }

    handleChange = (e) =>{
        this.setState({ quantity : parseInt(e.target.value)})
       }
  
       btnClick = ()=>{
            const {productDetails} =this.state;
            const quantity = this.state.quantity;
            this.props.addToCart(productDetails.id,productDetails,quantity);
       }

       handleComment =(e)=>{
           const name = e.target.name
           this.setState({ [name] : e.target.value})
       }

       AddCommentClick =()=>{
           this.props.AddComment(this.state.productDetails.id,this.state.name,this.state.email,this.state.comment)
            this.setState({ name :'',email:'',comment:'' })
        }

        handleSubmit=(e)=>{
            e.preventDefault();
            this.AddCommentClick()
        }


    render(){

        const commentList = this.props.comments && this.props.comments.map((item,index)=>{
            if(item.id === this.state.productDetails.id ){
                return(
                    <div key={index}>
                       <img src={process.env.PUBLIC_URL +"/img/c1.png"}  alt="..."/>
                        <h4>{item.name}</h4>
                        <span>{item.email}</span>
                        <p>{item.comment}</p>
                    </div>
                    )
                }else{
                    return null; 
                }
            }) 


        const {productDetails} =this.state;
        const {quantity} = this.state;

        return(
            <Fragment>
                <section className="ProductDetailID">
                    <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-7 "  >
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="img1" src={process.env.PUBLIC_URL +"/"+ productDetails.img}  alt=".." />
                            </div>
                            <div className="col-sm-4">
                                <img className="img2" src={process.env.PUBLIC_URL +"/"+ productDetails.img}  alt=".." />
                            </div>
                            <div className="col-sm-6">
                                <img src={process.env.PUBLIC_URL +"/"+ productDetails.img}  alt=".." />
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-5">
                        <div className="title">
                            <h1>{productDetails.title}</h1>
                            <div className="rating">
                                    <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-1x"></i>
                                    </span> 
                                    <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-1x"></i>
                                    </span> 
                                    <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-1x"></i>
                                    </span> 
                                    <span className="fa fa-stack">
                                        <i className="fa fa-star fa-stack-1x"></i>
                                    </span>
                                    <span className="fa fa-stack">
                                            <i className="fa fa-star-o fa-stack-1x"></i>
                                    </span> 
                                </div>
                            <p >{productDetails.price}$</p>
                            <hr/>
                        </div>
                        <p className="desc">{productDetails.info}</p>
                        <div className="quantity">
                            <span>quantity </span> <br/> <input type="number" value={quantity} onChange={this.handleChange} min="0" />
                            <p> <span> Total : </span> {quantity * productDetails.price}$</p>
                            {this.state.quantity === 0 ? (
                                        <button  disabled>Enter quantity</button>):(
                                        <button onClick={this.btnClick} >Add to Cart</button>)}
                        </div>
                    </div>
                </div>           
        
                <h4>Comments : </h4>
                        <div className="row comments">
                            <div className="comment col-lg-7">
                                {commentList}
                            </div>
                            <div className="formAdd col-lg-7">
                                <form onSubmit={this.handleSubmit} >
                                    <input type="text" placeholder="name"
                                         name="name"onChange={this.handleComment} value={this.state.name} required/>
                                    <input type="email" placeholder="email" name="email"
                                            onChange={this.handleComment} value={this.state.email} required/>
                                    <textarea type="tet" placeholder="comment" name="comment"
                                         onChange={this.handleComment} value={this.state.comment} required maxLength="180" >
                                    </textarea>
                                    <button type="submit" >Add Comment</button>
                                </form>
                            </div>
                        </div>
            </div>
            <div>
            
            </div>
            </section>
        <Footer />
        </Fragment>
        )
    }
}
const mapStateProps=(state)=>{
    return {
        comments : state.Comments
    }
}


export default connect(mapStateProps,{addToCart,AddComment})(ProductDetails);
