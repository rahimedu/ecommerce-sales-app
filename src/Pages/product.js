import React ,{Component, Fragment} from 'react';
import {getAll} from './../Api/data';
import {Link} from 'react-router-dom';
import {addToCart} from './../Api/action';
import {connect} from 'react-redux';
import Footer from './footer';
import './../style/product.css';
import $ from 'jquery';

class Product extends Component{

    state ={
        productData :[],
        search :'',
        FilterProduct:[]
    }

    componentDidMount(){
        getAll().then((data)=>{
            this.setState({
                productData : data,
                FilterProduct :data
            })
        })
    }

    scrolltop =()=>{
        $('html , body').animate({scrollTop:0},800);
    }

    Searchinput =(e)=>{
        this.setState({
            search : e.target.value
        })
    }

    handleChangeSort =(e)=>{
        this.setState({
            sort : e.target.value       
        })
        this.ListProducts();
    }

    ListProducts(){
        this.setState(state=>{
            if(state.sort !== ''){
                state.productData.sort((a,b)=>(state.sort === 'highest')?
                (a.price < b.price ? 1:-1): (state.sort === 'lowest')? (a.price > b.price ? 1:-1):
                (a.id > b.id ? 1:-1)
                )
            }else{
                state.productData.sort((a,b)=>(a.id > b.id ? 1:-1));
            }
            return {filterProduct : state.productData }
        })
    }
 

    render(){
        const productGrid =  this.state.productData.map((data,index)=>{
            const {search} = this.state;
            if((search !== "" && data.title.toLowerCase().indexOf(search.toLowerCase()) )=== -1 ){
                return null;
            }
            return (
                <div className="grid-item col-lg-3 col-md-6 col-sm-12 " key={index}>   
                    <div className="item">
                        <img src={process.env.PUBLIC_URL +"/"+ data.img} alt=".."/>
                        <div className="overlay">
                            <div className="icon">
                                <Link  to={'/product/'+data.id}> 
                                <button className="fa fa-eye" aria-hidden="true"
                                onClick={this.scrolltop}></button></Link>  
                                <button className="fa fa-shopping-cart"  onClick={()=>{this.props.addToCart(index,data , 1)}} > </button>
                            </div>
                        </div>
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

                        <p>{data.title}</p>
                        <span>{data.price}$</span>
                    </div>
                </div>
            )
        })

        const productList =  this.state.productData.map((data,index)=>{
            const {search} = this.state;
            if((search !== "" && data.title.toLowerCase().indexOf(search.toLowerCase()) )=== -1 ){
                return null;
            }
            return (
                <div className="list-item col-md-6 col-sm-12" key={index}>  
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="item">
                                <img src={process.env.PUBLIC_URL +"/"+ data.img} alt=".." />
                                <div className="overlay">
                                    <div className="icon">
                                        <Link  to={'/product/'+data.id}> 
                                          <button className="fa fa-eye" aria-hidden="true" onClick={this.scrolltop}></button>
                                        </Link>  
                                        <button className="fa fa-shopping-cart"  onClick={()=>{this.props.addToCart(index,data , 1)}} > </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body col-lg-8 col-sm-12">
                             <p>{data.title}</p>
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
                            <span>{data.price}$</span>
                            <p className="desc">{data.info}</p> 
                        </div>
                    </div>
                </div>
            )
        })


        return(
            <Fragment>
            <section className="productComponent">
                <div className="container">
                    <div className="title">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">                        
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#grid" role="tab" aria-controls="home" aria-selected="true">
                                     <i className="fa fa-th"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="profile-tab" data-toggle="tab" href="#list" role="tab" aria-controls="profile" aria-selected="false">
                                    <i className="fa fa-list-ul "></i>
                                </a>
                            </li>
                            <li className="nav-item ml-auto">
                                    <input type="text" onChange={this.Searchinput} placeholder="Search"/>
                                <span>Price Sort : </span>
                                <select value={this.state.Sort} onChange={this.handleChangeSort} >
                                    <option value=""> Default </option>
                                    <option value="lowest">Lowest To Highest</option>
                                    <option value="highest">Highest To Lowset</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                {productGrid}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                                {productList}
                            </div>
                        </div>
                    </div>                 
                  </div>
                </section>

            <Footer/>
        </Fragment>
        )
    }
}

export default connect(null,{addToCart})(Product);
