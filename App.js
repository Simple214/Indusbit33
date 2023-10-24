import React from 'react';
import './App.css';
import Main1 from './Components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,Link,Navigate,useHistory } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react'
import Main2 from './Components/main2';
import Main3 from './Components/main3';
import Ltc_btc from './Components/ltc_btc';
import Btc_ltc from './Components/btc_ltc';
import Btc_bnb from './Components/btc_bnb';
import Eth_ltc from './Components/eth_ltc';
import Eth_btc from './Components/eth_btc';
import Eth_bnb from './Components/eth_bnb';
import Ltc_bnb from './Components/ltc_bnb';
import Ltc_eth from './Components/ltc_eth';
import Bnb_eth from './Components/bnb_eth';
import Bnb_btc from './Components/bnb_btc';
import Bnb_ltc from './Components/bnb_ltc';
import Notfound from './Components/notfound';
import 'clipboard'
 
class App extends React.Component{
  constructor(){
    super()
    this.state={
      ad:'',
      am:'',
      am1:'',
      payment_status:'Awaiting Payment....',
      oid:'',
      oaddress:'',
      bg23:'#d4018f',
      article_background:'white',
      status:'home',
      from:'doge',
      border23:'5px solid white',
      to:'btc',
      orderid18:'',
      slash_order_id:'',
      input_bg:'#d4d6d9',
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
      value6:"btc",
      value10:'litecoin',
      value11:'bitcoin',
	  address569:'',
      show:'none',
      border_color:'4px solid black',
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
      rec_color:'#d4018f',
      status:'',
      final_value19:'',
      txn_id:'',
      moveahead2:'',
	  moveahead3:'no',
	  theme:'dark',
	  text:'black',
	  url:'./green.png',
	  color1:"#1c840f",
	  bg_body:'#d4018f',
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
	  border:"2px solid black",
	  first_bg:'dark',
	  second_bg:'#202429'
    }
  }
  


  changevalue = ()=>{
    this.setState({
      value2:'receive',

    })
  }

  reverse113= ()=>{
    this.setState({
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
      
      
      from_eth1 = ()=>{
        this.setState({
            from:'eth'
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
			fetch(`https://sideshift.ai/api/v2/shifts/${this.state.order_id}`).then(res1 => res1.json()).then(res2 => {

			if(res2.id){
				window.location.href=`http://localhost:3000/en/order/${this.state.order_id}`
			}
		    else{
			   alert('no order found')
			}
			})
				
			}
			
		}
		
	  addressvalidation = (event)=>{
			const value100 = event.target.value
			if((value100[0]=='b' && value100[1]=='c' && value100[2]=='1') && (value100!='') && ( value100.length==42)){
			        this.setState({
			        moveahead_ad:'yes',
			        show:'none',
			        ad:value100
			          })
			}
			if((value100[0]!='b' || value100[1]!='c' || value100[2]!='1') || (value100=='')  || ( value100.length!=42)){
			        this.setState({
			        moveahead_ad:'no',
			        show:'block'
			          })
			}

		}
		
	   btcvalidation = (event)=>{
			const value100 = event.target.value
			if(((value100[0]=='b' && value100[1]=='c' && value100[2]=='1') && (value100!='') && ( value100.length==42))){
			        this.setState({
			        moveahead_ad:'yes',
			        show:'none',
			        ad:value100
			          })
			}
			if(((value100[0]!='b' && value100[1]!='c' && value100[2]!='1') || (value100=='')  || ( value100.length!=42))){
			        this.setState({
			        moveahead_ad:'no',
			        show:'block'
			          })
			}

		}
		
		ethvalidation = (event)=>{
			const value100 = event.target.value
			if((value100[0]=='0' && value100[1]=='x') && (value100!='') && ( value100.length==42)){
			        this.setState({
			        moveahead_ad:'yes',
			        show:'none',
			        ad:value100
			          })
			}
			if((value100[0]!='0' || value100[1]!='x') || (value100=='')  || ( value100.length!=42)){
			        this.setState({
			        moveahead_ad:'no',
			        show:'block'
			          })
			}

		}
		
      ltcvalidation = (event)=>{
			const value100 = event.target.value
			if((((value100[0]=='M')) && (value100!='') && (value100.length==34))){
			        this.setState({
			        moveahead_ad:'yes',
			        show:'none',
			        ad:value100
			          })
			}
    		if((((value100[0]!='M')) || (value100=='') || (value100.length!=34))){
			        this.setState({
			        moveahead_ad:'no',
			        show:'block'
			          })
			}

		}
		
		
	     bnbvalidation = (event)=>{
			const value100 = event.target.value
			if((value100[0]=='0' && value100[1]=='x') && (value100!='') && ( value100.length==42)){
			        this.setState({
			        moveahead_ad:'yes',
			        show:'none',
			        ad:value100
			          })
			}
			if((value100[0]!='0' || value100[1]!='x') || (value100=='')  || ( value100.length!=42)){
			        this.setState({
			        moveahead_ad:'no',
			        show:'block'
			          })
			}

		}
		
		
	    searchvalidation = (event)=>{
			const value100 = event.target.value
						if(value100==''){
			        this.setState({
                                  li_show1:'block', li_show2:'block' , li_show3:'block', li_show4:'block', li_show5:'block'
			          })
			}
			if(value100=='btc'){
			        this.setState({
                                  li_show1:'block',
                                  li_show2:'none',
                                  li_show3:'none',
                                  li_show4:'none',
                                  li_show5:'none'
			          })
			}
						if(value100=='eth'){
			        this.setState({
                                  li_show1:'none',
                                  li_show2:'block',
                                  li_show3:'none',
                                  li_show4:'none',
                                  li_show5:'none'
			          })
			}

		}
		
	     bnbamountvalidation = (event)=>{
			const value100 = event.target.value
			
			if((value100>=0.1) && (value100!='')){
			        this.setState({
			        moveahead_am:'yes',
			        show3:'none',
			        show2:'none',
			        am:value100
			          })
			}
			
			if(value100<0.1){
			        this.setState({
			        moveahead_am:'no',
			        show2:'block'
			          })
			}

		}
		
	    btcamountvalidation = (event)=>{
			const value100 = event.target.value
			
			if((value100>=0.002) && (value100!='')){
			        this.setState({
			        moveahead_am:'yes',
			        show3:'none',
			        show2:'none',
			        am:value100
			          })
			}
			
			if(value100<0.002){
			        this.setState({
			        moveahead_am:'no',
			        show2:'block'
			          })
			}

		}
		
			
		 ltcamountvalidation = (event)=>{
			const value100 = event.target.value
		    console.log(event.target.value)
			if((value100>=1.0) && (value100!='')){
			        this.setState({
			        moveahead_am:'yes',
			        show3:'none',
			        show2:'none',
			        am:value100
			          })
			}
			
			if(value100<1.0){
			        this.setState({
			        moveahead_am:'no',
			        show2:'block'
			          })
			}
			this.setState({
			        am1:event.target.value
			    })
		}
		
		 ethamountvalidation = (event)=>{
			const value100 = event.target.value
			
			if((value100>=0.05) && (value100!='')){
			        this.setState({
			        moveahead_am:'yes',
			        show3:'none',
			        show2:'none',
			        am:value100
			          })
			}
			
			if(value100<0.05){
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
              address:this.state.ad,
              from:'ltc',
              to:'btc'
            })
          }).then(res3 => res3.json()).then(res23 => {
this.setState({
oid:res23.id,
oaddress:res23.address
			})		
		window.location.href=`https://www.indusbit.org/en/order/${res23.id}`
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
                   show3:'none',
                   show1:'block'
			})
          }
          
              if(this.state.moveahead_am=='no' && this.state.moveahead_ad=='no'){
            this.setState({
                   show3:'block',
                   show1:'block'
			})
          }

		}
		
				state_change2 = ()=>{
		
		if(this.state.moveahead_am=='yes' && this.state.moveahead_ad=='yes'){
		 fetch("https://rich-tan-lovebird-coat.cyclic.app/order25",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              address:this.state.ad,
              from:'ltc',
              to:'eth'
            })
          }).then(res3 => res3.json()).then(res23 => {
this.setState({
oid:res23.id,
oaddress:res23.address
			})		
		window.location.href=`https://www.indusbit.org/en/order/${res23.id}`
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
                   show3:'none',
                   show1:'block'
			})
          }
          
              if(this.state.moveahead_am=='no' && this.state.moveahead_ad=='no'){
            this.setState({
                   show3:'block',
                   show1:'block'
			})
          }

		}
		
						state_change3 = ()=>{
		
		if(this.state.moveahead_am=='yes' && this.state.moveahead_ad=='yes'){
		 fetch("https://rich-tan-lovebird-coat.cyclic.app/order25",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              address:this.state.ad,
              from:'ltc',
              to:'bnb'
            })
          }).then(res3 => res3.json()).then(res23 => {
this.setState({
oid:res23.id,
oaddress:res23.address
			})		
		window.location.href=`https://www.indusbit.org/en/order/${res23.id}`
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
                   show3:'none',
                   show1:'block'
			})
          }
          
              if(this.state.moveahead_am=='no' && this.state.moveahead_ad=='no'){
            this.setState({
                   show3:'block',
                   show1:'block'
			})
          }

		}
		
								state_change4 = ()=>{
		
		if(this.state.moveahead_am=='yes' && this.state.moveahead_ad=='yes'){
		 fetch("https://rich-tan-lovebird-coat.cyclic.app/order25",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              address:this.state.ad,
              from:'eth',
              to:'ltc'
            })
          }).then(res3 => res3.json()).then(res23 => {
this.setState({
oid:res23.id,
oaddress:res23.address
			})		
		window.location.href=`https://www.indusbit.org/en/order/${res23.id}`
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
                   show3:'none',
                   show1:'block'
			})
          }
          
              if(this.state.moveahead_am=='no' && this.state.moveahead_ad=='no'){
            this.setState({
                   show3:'block',
                   show1:'block'
			})
          }

		}
		
		
										state_change5 = ()=>{
		
		if(this.state.moveahead_am=='yes' && this.state.moveahead_ad=='yes'){
		 fetch("https://rich-tan-lovebird-coat.cyclic.app/order25",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              address:this.state.ad,
              from:'eth',
              to:'btc'
            })
          }).then(res3 => res3.json()).then(res23 => {
this.setState({
oid:res23.id,
oaddress:res23.address
			})		
		window.location.href=`https://www.indusbit.org/en/order/${res23.id}`
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
                   show3:'none',
                   show1:'block'
			})
          }
          
              if(this.state.moveahead_am=='no' && this.state.moveahead_ad=='no'){
            this.setState({
                   show3:'block',
                   show1:'block'
			})
          }

		}
		
										state_change6 = ()=>{
		
		if(this.state.moveahead_am=='yes' && this.state.moveahead_ad=='yes'){
		 fetch("https://rich-tan-lovebird-coat.cyclic.app/order25",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              address:this.state.ad,
              from:'eth',
              to:'bnb'
            })
          }).then(res3 => res3.json()).then(res23 => {
this.setState({
oid:res23.id,
oaddress:res23.address
			})		
		window.location.href=`https://www.indusbit.org/en/order/${res23.id}`
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
                   show3:'none',
                   show1:'block'
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
			    footer_bg:'black',
			    main2_bg:'#2c3546',
                main2_bo:'2px solid white',
                main2_tx:'white',
				theme:'dark',
				text:'white',
				url:'./green.png',
				color1:'#ce1414',
			    bg23:'red',
				bg_body:"black",
				display1:'none',
				display2:'block',
				article_background:'#2d3547',
				top_color:"black",
				url2:"./dark_logo.png",
				row_bg:"#21262a",
				row_color:"white",
				bottom_color:'#000000',
				rec_color:'white',
				border_color:'4px solid white',
				 article_bg:'#212939',
				text_color:'white',
				text_body:'black',
				border:"2px solid white",
				first_bg:'#202429',
				input_bg:'black',
				second_bg:'#f8f8fb'
			})
		}
		
		light_theme = ()=>{
			this.setState({
	             footer_bg:'#d4008e',
	             article_background:'white',
	             main2_tx:'#d4008e',
				 theme:'dark',
				 input_bg:'#d4d6d9',
			     border_color:'4px solid black',
				 main2_bg:'white',
			     bg23:'black',
                 main2_bo:'2px solid white',
                 rec_color:'#d4018f',
				 text:'black',
				 url:'./green.png',
				 color1:"#1c840f",
				 bg_body:'#d4018f',
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
			     border:"2px solid black",
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

   <Route path="/" element={<Navigate to="/en/ltc/btc" replace />} />
      <Route path="/en"> 
      <Route path="ltc/btc" element={
<Ltc_btc ltcoeth={this.ltcoeth} oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.btcvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.ltcamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />


} />

    <Route path="ltc/eth" element={
<Ltc_eth oid1={this.state.oid} changes={this.state_change2} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.ethvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.ltcamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

    <Route path="ltc/bnb" element={
<Ltc_bnb oid1={this.state.oid} changes={this.state_change3} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.bnbvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.ltcamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

      <Route path="eth/btc" element={
<Eth_btc oid1={this.state.oid} changes={this.state_change5} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.btcvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.ethamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

    <Route path="eth/ltc" element={
<Eth_ltc oid1={this.state.oid} changes={this.state_change4} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.ltcvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.ethamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

    <Route path="eth/bnb" element={
<Eth_bnb oid1={this.state.oid} changes={this.state_change6} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.bnbvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.ethamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

      <Route path="bnb/btc" element={
<Bnb_btc oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.btcvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.bnbamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

    <Route path="bnb/eth" element={
<Bnb_eth oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.ethvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.bnbamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

    <Route path="bnb/ltc" element={
<Bnb_ltc oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.ltcvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.bnbamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

      <Route path="btc/ltc" element={
<Btc_ltc oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.ltcvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.amountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

    <Route path="btc/eth" element={
<Ltc_eth oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.ethvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.btcamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

    <Route path="btc/bnb" element={
<Btc_bnb oid1={this.state.oid} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.bnbvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} event2={this.btcamountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal}  />

} />

        <Route path="order">
      <Route path=":orderid3" element={

<Main2 amount23={this.state.am1} value10061={this.state.input_bg} value198={this.state.rec_color} value10058={this.state.article_background} value_bg={this.state.bg23} value_bo={this.state.border23} bo_ar={this.state.border_color} oid1={this.state.oid} from9={this.state.from} to9={this.state.to} from = {this.state.from} to={this.state.to} changes={this.state_change} value_bg={this.state.footer_bg} value0789={this.state.bg_body} value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation}  value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value1006={this.hide2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} event1={this.addressvalidation} changetodark={this.dark_theme} value10070={this.hide3} changetolight={this.light_theme} theme={this.state.theme} first66={this.state.value876}  change1={this.changevalue} value2 ={this.state.value2} value3={'LTC'} value4={'BTC'} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} event2={this.amountvalidation} value10={this.state.value10} value11={this.state.value11} value500={this.state.show}  value1500={this.state.show1} value501={this.state.show2} value1600={this.state.show3} call={this.calltofinal} backtohome={this.home234}/>
} />
    </Route>
      <Route path="*" element={<Notfound />} />
        </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>

  </div>
  )}}
  export default App
