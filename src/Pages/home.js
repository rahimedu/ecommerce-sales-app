import React ,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {getAll} from './../Api/data'
import {addToCart} from './../Api/action'
import {connect} from 'react-redux'
import Footer from './footer'
import './../style/home.css'
import $ from 'jquery'

class Home extends Component{
    state ={
        productData :[],
        search : '',
        number:0
    }

    componentDidMount(){
        $('.dd .shop').click(function(){
            $('html , body').animate({scrollTop:0},800);
        });

        getAll().then((data)=>{
            this.setState({
                productData : data
            })
        })
    }

    scrolltop =()=>{
        $('html , body').animate({scrollTop:0},800);
    }

    inputSearch = (e) =>{
        this.setState({
            search : e.target.value
        })
    }

    render(){
        const productList =  this.state.productData.map((data,index)=>{
           if(data.featured){
            const {search} = this.state;
            if((search !== "" && data.title.toLowerCase().indexOf(search.toLowerCase()) ) === -1 ){
                    return null;
             }
               return(
                    <div className="parent-item col-lg-3 col-md-6 col-sm-12 " key={index}>
                        <div className="item">
                            <img src={process.env.PUBLIC_URL +"/"+ data.img} alt=".."/>
                            <div className="overlay">
                                <div className="icon">
                                    <Link  to={'/product/'+data.id}> 
                                      <button className="fa fa-eye" aria-hidden="true" onClick={this.scrolltop}></button>
                                    </Link>  
                                    <button className="fa fa-shopping-cart"  onClick={()=>{this.props.addToCart(index,data , 1)}}> </button>
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
           }else{
               return null;
           }
        });


        return(
            <Fragment>

                {/* Header ........ */}

                <header className="header" style={{backgroundImage:"url("+ process.env.PUBLIC_URL + "/img/bg4.jpg)"}}>
                    <Link to="/product" className="shop">Shop Now</Link>
                </header>
              
                {/* icon featured......... */}

                <section className="featured-icon">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-xs-12   ">
                                <div className="item ">
                                    <img src={process.env.PUBLIC_URL + '/img/i1.png'} alt=".."/>
                                    <h6>Free Shipping</h6>
                                    <p>Free dedlivery worldwide</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12 ">
                                <div className="item ">
                                    <img src={process.env.PUBLIC_URL + '/img/i2.png'}  alt=".."/>
                                    <h6>Order Onlivne</h6>
                                    <p>Hours : 8am - 11pm</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12 ">
                                <div className="item ">
                                    <img src={process.env.PUBLIC_URL + '/img/i3.png'} alt=".."/>
                                    <h6>Shop And Save</h6>
                                    <p>For All Spices &amp; Herbs</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12 ">
                                <div className="item ">
                                    <img src={process.env.PUBLIC_URL + '/img/i4.png'} alt=".."/>
                                    <h6>Safe Shoping</h6>
                                    <p>Ensure genuine 100%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* featured products......... */}

                <section className="featured-product">
                    <div className="container">
                        <div className="title">
                            <h3>FEATURED PRODUCTS</h3>
                            <input type="text" placeholder="Search" onChange={this.inputSearch}/>
                            <div className="type">
                                <span>KINYUED </span>
                                <span>FOSSIL</span>
                                <span>Casio</span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            {productList}
                        </div>
                    </div>
                </section>

                {/* Fashion image ............*/}

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="bg">
                                    <img src={process.env.PUBLIC_URL + '/img/bg11.jpg'} alt=".."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lastest News........... */}

                <section className="latest-news">
                    <div className="container">
                        <div className="title">
                            <h3>LATEST NEWS</h3>
                             <hr/>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="item">
                                    <div className="date-time text-center">
                                        <div className="day"> 15</div>
                                        <div className="month">Sep</div>
                                    </div>
                                    <img src={process.env.PUBLIC_URL + '/img/lat1.jpg'}  alt=".."/>
                                    <h5>Fashions fade, style is eternal</h5>
                                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="item">
                                    <div className="date-time text-center">
                                        <div className="day"> 15</div>
                                        <div className="month">Sep</div>
                                    </div>
                                    <img src={process.env.PUBLIC_URL + '/img/lat2.jpg'} alt=".."/>
                                    <h5>Fashions fade, style is eternal</h5>
                                    <p>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* brands ......... */}
                
                <section className="brand">
                    <div className="container">
                        <div className="title"> 
                            <h3>BRAND LOGO</h3>
                             <hr/>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-sm-4 ">
                                <div className="item">
                                  <img src={process.env.PUBLIC_URL + '/img/b1.png'} alt=".."/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="item">
                                  <img src={process.env.PUBLIC_URL + '/img/b2.png'} alt=".."/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="item">
                                  <img src={process.env.PUBLIC_URL + '/img/b3.png'} alt=".."/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="item">
                                  <img src={process.env.PUBLIC_URL + '/img/b4.png'} alt=".."/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="item">
                                  <img src={process.env.PUBLIC_URL + '/img/b5.png'} alt=".."/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="item">
                                  <img src={process.env.PUBLIC_URL + '/img/b6.png'} alt=".."/>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
               
           
              <Footer />
            </Fragment>
        )
    }
}


export default connect(null,{addToCart})(Home);
