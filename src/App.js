import React from 'react';
import './App.css';
import Main1 from './Components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,Link,Navigate } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react'
import Main2 from './Components/main2';
import Main3 from './Components/main3';
import BTC from './Components/btc';
import TO_BTC from './Components/to_btc';
import FROM_LTC from './Components/from_ltc';
import LTC_DOGE from './Components/ltc_doge';
import LTC_BTC from './Components/ltc_btc';
import LTC_BTC_HI from './Components/ltc_btc_hi';
import LTC_USDT from './Components/ltc_usdt';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import 'clipboard'
 
class App extends React.Component{
  constructor(){
    super()
    this.state={
      payment_status:'Awaiting Payment....',
      oid:'',
      oaddress:'',
      status:'home',
      slash_order_id:'',
      main2_tx:'#d4008e',
      from_img:'litecoin',
      to_img:'bitcoin',
      footer_bg:'#d4008e',
	  orderahead:'no',
	  order_id:'',
	  show_order:'none',
	  show_order1:'none',
	  moveahead_am:'no',
	  moveahead_ad:'no',
	  show731:'none',
	  show740:'none',
	  text_color2:"white",
	  order_id:'',
      value876:'',
      address_23:'',
      value2:'',
      value3:"LTC",
      value4:"BTC",
      value5:'ltc',
      home200000:'ltc/btc',
      from:'ltc',
      to:'btc',
      value6:"btc",
      value10:'litecoin',
      value11:'bitcoin',
	  address569:'',
      show:'none',
      show1:'none',
	  show2:'none',
	  show3:'none',
      liverate:'',
      address:'',
      rec_address:"",
      final_from:'',
      final_to:'',
      moveahead:'no',
      main2_bg:'white',
      main2_bo:'2px solid white',
      status:'',
      final_value19:'',
      txn_id:'',
      moveahead2:'',
	  moveahead3:'no',
	  theme:'dark',
	  text:'black',
	  url:'./green.png',
	  color1:"#1c840f",
	  bg_body:'#ff4136',
	  display1:"block",
	  display2:"none",
	  top_color:"#0bc08c",
	  url2:"./logo.png",
	  row_bg:"#ffffff",
	  row_color:"#d5018e",
	  bottom_color:'#d5018e',
	  bottom_color2:'#25ace3',
	  article_bg:"white",
	  text_color:'black',
	  text_body:'white',
	  border:"0px solid white",
	  first_bg:'dark',
	  second_bg:'#202429'
    }
  }

  changevalue = ()=>{
    this.setState({
      value2:'receive',

    })
  }

  reverse1= ()=>{
    this.setState({
      value3:this.state.value4,
      value4:this.state.value3,
      value5:this.state.value6,
      value6:this.state.value5,
      value10:this.state.value11,
      value11:this.state.value10,
      from:this.state.to,
      to:this.state.from
    })
  }


 


      calltofinal = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes' && this.state.moveahead3=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:'',
            moveahead2:'no'
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/order25'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }
        if (this.state.moveahead3=='no'){
			this.setState({
				show3:'block'
			})
			value156=''
		}
        var  value200 = this.state.rec_address
        var value201 = this.state.value5
        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
			  from : this.state.value3,
			  to : this.state.value4,
			  amount : this.state.address569,
			  address:value200
          })
        }).then(res => res.json()).then(data50 => {
          
          this.setState({
            address:data50.address,
            address23:data50.address,
			order_id:data50.id
          })
    })
      }

      calltofinal1 = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:''
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          this.setState({
            address:data50.first2
          })
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'doge',
              to30:'ltc'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
            
        }
      },20000)
        })
      }

      calltofinal2 = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:''
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          this.setState({
            address:data50.first2
          })
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'doge',
              to30:'btc'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
            
        }
      },20000)
        })
      }
    

      hide2 = ()=>{
        this.setState({
            show1:'none'
        })
      }

      hide2 = ()=>{
        this.setState({
            show1:'none'
        })
      }
      
      hide3 = ()=>{
		  this.setState({
			  show3:'none'
		  })
	  }

      home234 = ()=>{
        window.open('https://www.indusbit.org', '_blank');
      }
      home235 = ()=>{
		  window.open('https://www.indusbit.org');
	  }

          
          to_ltc = ()=>{
			  this.setState({
				  to:'ltc',
				   value4:'LTC',
				   value6:'ltc',
				   value11:'litecoin'
			  })
		}
		
		
		order_id_validation2 = (event)=>{
			
			const value100 = event.target.value
			if(value100==null || value100[0]==undefined || value100==""){
				this.setState({
					orderahead:'no'
				})
			}
			if(value100!=null && value100[0]!=undefined && value100!=""){
				this.setState({
					orderahead:'yes',
				    order_id:value100
				})
			}
			
		}
		
		order_id_validation = ()=>{
			
			if(this.state.orderahead=='no'){
				alert("Please Enter a order ID first")
				
			}
			if(this.state.orderahead=='yes'){
				fetch(`https://rich-tan-lovebird-coat.cyclic.app/${this.state.order_id}`).then(res1 => res1.json()).then(res10 => console.log(res10))
				
			}
			
		}
		
	  btcvalidation = (event)=>{
			const value100 = event.target.value
			if((value100[0]=='b' && value100[1]=='c' && value100[2]=='1') && (value100!='') && ( value100.length==42)){
			        this.setState({
			        moveahead_ad:'yes',
			        show:'none'
			          })
			}
			if((value100[0]!='b' || value100[1]!='c' || value100[2]!='1') || (value100=='')  || ( value100.length!=42)){
			        this.setState({
			        moveahead_ad:'no',
			        show:'block'
			          })
			}

		}
		
	    amountvalidation = (event)=>{
			const value100 = event.target.value
			
			if((value100>=1.0) && (value100!='')){
			        this.setState({
			        moveahead_am:'yes',
			        show3:'none',
			            show2:'none'
			          })
			}
			
			if(value100<1.0){
			        this.setState({
			        moveahead_am:'no',
			        show2:'block'
			          })
			}

		}
		
				
		state_change = ()=>{
		
		if(this.state.moveahead_am=='yes' && this.state.moveahead_ad=='yes'){
		 fetch("https://rich-tan-lovebird-coat.cyclic.app/order25",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              address:'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
              from:'ltc',
              to:'btc'
            })
          }).then(res3 => res3.json()).then(res23 => {
this.setState({
oid:res23.id,
oaddress:res23.address
			})			

			window.location.href = `http://localhost:3000/en/order/${res23.id}`

          })
          }
    if(this.state.moveahead_am=='no' && this.state.moveahead_ad=='yes'){
            this.setState({
                   show3:'block',
                   show1:'none'
			})
          }
          
              if(this.state.moveahead_am=='yes' && this.state.moveahead_ad=='no'){
            this.setState({
                   show3:'block',
                   show1:'none'
			})
          }
          
              if(this.state.moveahead_am=='no' && this.state.moveahead_ad=='no'){
            this.setState({
                   show3:'block',
                   show1:'block'
			})
          }

		}
		
		dark_theme = ()=>{
			this.setState({
			    footer_bg:'#808080',
			    main2_bg:'#2c3546',
                main2_bo:'2px solid white',
                main2_tx:'white',
				theme:'dark',
				text:'white',
				url:'./green.png',
				color1:'#ce1414',
				bg_body:"black",
				display1:'none',
				display2:'block',
				top_color:"gray",
				url2:"./dark_logo.png",
				row_bg:"#21262a",
				row_color:"white",
				bottom_color:'#000000',
				 article_bg:'#212939',
				text_color:'white',
				text_body:'black',
				border:"2px solid white",
				first_bg:'#202429',
				second_bg:'#f8f8fb'
			})
		}
		
		light_theme = ()=>{
			this.setState({
	             footer_bg:'#d4008e',
	             main2_tx:'#d4008e',
				 theme:'dark',
				 main2_bg:'white',
                 main2_bo:'2px solid white',
				 text:'black',
				 url:'./green.png',
				 color1:"#1c840f",
				 bg_body:'#ff4136',
				 display1:'block',
				 display2:'none',
	             top_color:"#0bc08c",
				 url2:"./logo.png",
				 row_bg:"#f0f2f5",
				 row_color:"#d5018e",
				 bottom_color:'#d5018e',
			     article_bg:'#ffffff',
				 text_color:'black',
				 text_body:'white',
				 border:"0px solid white",
				 first_bg:'dark',
				 second_bg:'dark'
			})
		}
		
		
		
	setvalue = (event) => {
		const value100 = event.target.value
		var value101


		if (value100<value101) {
			this.setState({
				 show2:'block',
				 moveahead3:'no',
			})
		}
		if (value100==value101) {
			this.setState({
				show2:'none',
				 moveahead3:'yes'
			})
		}
		if (value100>value101) {
			this.setState({
				show2:'none',
				 moveahead3:'yes'
			})
		}
		if (value100==null) {
			this.setState({
				show2:'none',
				moveahead3:'no'
			})
		}
		
		this.setState({
			address569:event.target.value
		})
		
	}


  render(){
    return(
      <div>
            <Routes>
            
        <Route path="/" element={<Navigate to= '/en/ltc/btc' replace />} />
        <Route path="/en" >  
        
           <Route path="order/:id" element={ <Main2 value_rec={this.state.main2_tx} bg_ar={this.state.main2_bg} bo_ar={this.state.main2_bo} value_pay={this.state.payment_status} orderid={this.state.oid} value10056={this.state.oaddress}  amount_pls={this.state.from} value_img1={this.state.from_img} value_img2={this.state.to_img} value501={this.state.show2}   value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}    first66={this.state.value876}  change1={this.changevalue} value2 ={this.state.value2} value3={'SOL'} value4={'BTC'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} value500={this.state.show} value1500={this.state.show1} value1600={this.state.show3} call={this.calltofinal} value739={'none'} backtohome={this.home234}/>}>  
                   </Route>  
        
        <Route path="ltc">
    
        
    <Route path="btc" element={   <LTC_BTC oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.btcvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} value2 ={this.state.value2} value3={'LTC'} value4={'BTC'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} event2={this.amountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal} backtohome={this.home234}/>

    } />
    
       <Route path="doge" element={   <LTC_DOGE value_img2={'./images/dogecoin.png'} value_img={'./images/litecoin.png'} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation} changetologin={this.login} changetosignup={this.signup} value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme} changetoetc1={this.changetoetc} changetoeth1={this.changetoeth}  changetosol1={this.changetosol} send2={this.setvalue} changetovet1={this.changetovet} changetoxtz1={this.changetoxtz} changetoada1={this.changetoada} changetotrx1={this.changetotrx} changetoavax1={this.changetoavax} first66={this.state.value876} first changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={'LTC'} value4={'DOGE'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} event2={this.amountvalidation} value500={this.state.show} value1500={this.state.show1} value1600={this.state.show3} value501={this.state.show2} from1={'litecoin'} to1={'btc'} value74={'none'} value81={'block'}   call={this.calltofinal} backtohome={this.home234} />
    } />
    

    
           <Route path="usdt" element={   <LTC_USDT value_img2={'./images/usdt.png'} value_img={'./images/litecoin.png'} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation} changetologin={this.login} changetosignup={this.signup} value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme} changetoetc1={this.changetoetc} changetoeth1={this.changetoeth}  changetosol1={this.changetosol} send2={this.setvalue} changetovet1={this.changetovet} changetoxtz1={this.changetoxtz} changetoada1={this.changetoada} changetotrx1={this.changetotrx} changetoavax1={this.changetoavax} first66={this.state.value876} first change1={this.changevalue} value2 ={this.state.value2} value3={'LTC'} value4={'USDT-TRON'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value1600={this.state.show3} value501={this.state.show2}  call={this.calltofinal} value1006={this.hide2}  backtohome={this.home234} />
    } />
    
    
    
  </Route>
  </Route>
  
          <Route path="/hi">  
        <Route path="ltc">
    
        
    <Route path="btc" element={   <LTC_BTC_HI value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url}  changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} value2 ={this.state.value2} value3={'LTC'} value4={'BTC'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal} backtohome={this.home234}/>

    } />
    
       <Route path="doge" element={   <LTC_DOGE value_img2={'./images/dogecoin.png'} value_img={'./images/litecoin.png'} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation} changetologin={this.login} changetosignup={this.signup} value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme} changetoetc1={this.changetoetc} changetoeth1={this.changetoeth}  changetosol1={this.changetosol} send2={this.setvalue} changetovet1={this.changetovet} changetoxtz1={this.changetoxtz} changetoada1={this.changetoada} changetotrx1={this.changetotrx} changetoavax1={this.changetoavax} first66={this.state.value876} first changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={'LTC'} value4={'DOGE'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value1600={this.state.show3} value501={this.state.show2} from1={'litecoin'} to1={'btc'} value74={'none'} value81={'block'}   call={this.calltofinal} backtohome={this.home234} />
    } />
    

    
           <Route path="usdt" element={   <LTC_USDT value_img2={'./images/usdt.png'} value_img={'./images/litecoin.png'} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation} changetologin={this.login} changetosignup={this.signup} value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme} changetoetc1={this.changetoetc} changetoeth1={this.changetoeth}  changetosol1={this.changetosol} send2={this.setvalue} changetovet1={this.changetovet} changetoxtz1={this.changetoxtz} changetoada1={this.changetoada} changetotrx1={this.changetotrx} changetoavax1={this.changetoavax} first66={this.state.value876} first change1={this.changevalue} value2 ={this.state.value2} value3={'LTC'} value4={'USDT-TRON'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value1600={this.state.show3} value501={this.state.show2}  call={this.calltofinal} value1006={this.hide2}  backtohome={this.home234} />
    } />
    
    
    
  </Route>
  </Route>

          
                    <Route path="/btc">
                    
              <Route index element={<TO_BTC  value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}    first66={this.state.value876}  change1={this.changevalue} value2 ={this.state.value2} value3={'SOL'} value4={'BTC'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value1600={this.state.show3} call={this.calltofinal} value1006={this.hide2} value10070={this.hide3} value739={'none'} backtohome={this.home234}/>} />

          </Route>

                                             
    </Routes>    
      </div>
    )
  }
}

export default App;
