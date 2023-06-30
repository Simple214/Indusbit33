import React from 'react';
import './App.css';
import Main1 from './Components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react'
import Main2 from './Components/main2';
import Main3 from './Components/main3';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import 'clipboard'
 
class App extends React.Component{
  constructor(){
    super()
    this.state={
	  orderahead:'no',
	  order_id:'',
	  show_order:'none',
	  show_order1:'none',
	  moveahead731:'no',
	  moveahead732:'no',
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
      value6:"btc",
      value10:'litecoin',
      value11:'bitcoin',
	  address569:'',
      from:'ltc',
      to:'btc',
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
      status:'',
      final_value19:'',
      txn_id:'',
      moveahead2:'',
	  moveahead3:'no',
	  theme:'dark',
	  text:'black',
	  url:'./green.png',
	  color1:"#1c840f",
	  bg_body:'black',
	  display1:"block",
	  display2:"none",
	  top_color:"#355c9d",
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

  changetodoge1 = ()=>{
    this.setState({
      value3:'DOGE',
      value5:'doge',
      value10:'dogecoin',
      from:'doge'
    })
  }

  changetoxmr1 = ()=>{
    this.setState({
      value3:'XMR',
      value5:'xmr',
      value10:'monero',
      from:'xmr'
    })
  }

  changetobnb13 = ()=>{
    this.setState({
      value3:'BNB',
      value5:'bnb',
      value10:'bnb',
      from:'bnb'
    })
  }

  changetobnb14 = ()=>{
    this.setState({
      value4:'BNB',
      value6:'bnb',
      value11:'bnb',
      to:'bnb'
    })
  }
  
  changetoltc299 =()=>{
	  this.setState({
		  to:'ltc',
		  value4:'LTC',
		  value6:'ltc',
		  value11:'litecoin',
		  
	  })
} 

changetoltc2998 =()=>{
  this.setState({
    to:'ltc',
    value4:'LTC',
    value6:'ltc',
    value11:'litecoin',
    
  })
} 


changetodoge299 =()=>{
	this.setState({
		to:'doge',
		value4:'DOGE',
		value6:'doge',
		value11:'dogecoin'
	})
} 

changetodoge2998 =()=>{
	this.setState({
		to:'doge',
		value4:'DOGE',
		value6:'doge',
		value11:'dogecoin'
	})
} 

  changetoxmr2 = ()=>{
	  this.setState({
		  value4:'XMR',
		  value6:'xmr',
		  value11:'monero',
		  to:'xmr'
	  })
  }
  
  changetoltc19 = ()=>{
	  this.setState({
		  from:'ltc',
		  value3:'LTC',
		  value5:'ltc',
		  value10:'litecoin'
	  })
  }

  changetoltc13 = ()=>{
    this.setState({
      from:'ltc',
      to : 'doge',
      value3:'LTC',
      value5:'ltc',
      value10:'litecoin'
    })
  }

  changetodoge2 = ()=>{
    this.setState({
      value4:'DOGE',
      value6:'doge',
      value11:'dogecoin',
      from:'ltc',
      to:'doge'
    })
  }

  changetodoge26 = ()=>{
    this.setState({
      value4:'DOGE',
      value6:'doge',
      value11:'dogecoin',
      to:'doge'
    })
  }
  
  changetodoge21 = ()=>{
	  this.setState({
		  value4:'DOGE',
		  value6:'doge',
		  value11:'dogecoin',
		  from:'xmr',
		  to:'doge'
	  })
  }
  
  changetodoge23 = ()=>{
    this.setState({
      value4:'DOGE',
      value6:'doge',
      value11:'dogecoin',
      from:'btc',
      to:'doge'
    })}

dogevalidation = (event2)=>{
  const value100=event2.target.value
  this.setState({
    rec_address:value100
  })
  if (value100[0]!='D' || value100[0]!='A') {
    this.setState({
      show:'block',
      moveahead:'no'
    })
  }
  if (value100[0]=='D' || value100[0]=='A') {
    this.setState({
      show:'none',
      moveahead:'yes'
    })
  }
  if (value100[0]==null) {
    this.setState({
      show:'none',
      moveahead:'no'
    })
  }
}

btcvalidation = (event2)=>{
  const value100 = event2.target.value
  this.setState({
    rec_address:value100
  })
  if (value100[0]!='3' && value100[0]!='1' && (value100[0]!='b' && value100[1]!='c') ) {
    this.setState({
      show:'block',
      moveahead:'no'
    })
  }
  if (value100[0]=='3' || value100[0]=='1' || (value100[0]=='b' && value100[1]=='c') ) {
    this.setState({
      show:'none',
      moveahead:'yes'

    })
  }
  if (value100[0]==null) {
    this.setState({
      show:'none',
      moveahead:'no'
    })
  }
}

bchvalidation = (event2)=>{
	const value100=event2.target.value
	this.setState({
		rec_address:value100
	})
	if ((value100[0]!='1') || (value100[0]!='q' || value100[0]!='p') ) {
		this.setState({
			show:'block',
			moveahead:'no'
		})
	}
	if (value100[0]=='1' || value100[0]=='q' || value100[0]=='p') {
		this.setState({
			show:'none',
			moveahead:'yes'
			
		})
	}
	if (value100[0]==null) {
		this.setState({
			show:'none',
			moveahead:'no'
		})
	}
}

xmrvalidation = (event2)=>{
	const value100=event2.target.value
	this.setState({
		rec_address:value100
	})
	if (value100[0]!='4' && value100[0]!='8') {
		this.setState({
			show:'block',
			moveahead:'no'
		})
	}
	if (value100[0]=='4' || value100[0]=='8') {
		this.setState({
			show:'none',
			moveahead:'yes'
			
		})
	}
	if (value100[0]==null) {
		this.setState({
			show:'none',
			moveahead:'no'
		})
	}
}


ltcvalidation = (event2)=>{
  const value100=event2.target.value
    this.setState({
    rec_address:value100
  })
  if (value100[0]!='L' && value100[0]!='M') {
    this.setState({
      show:'block',
      moveahead:'no'
    })
  }
  if (value100[0]=='L' || value100[0]=='M' || value100[0]=='l' || value100[0]=='l'  ) {
    this.setState({
      show:'none',
      moveahead:'yes'
    })
  }
  if (value100[0]==null) {
    this.setState({
      show:'none',
      moveahead:'no'
    })
  }
}

bnbvalidation = (event2)=>{
  const value100=event2.target.value
    this.setState({
    rec_address:value100
  })
  if ((value100[0]!='0' && value100[1]!='x') ||  (value100[0]=='0' && value100[1]!='x')  ) {
    this.setState({
      show:'block',
      moveahead:'no'
    })
  }
  if ((value100[0]=='0' && value100[1]=='x')  ) {
    this.setState({
      show:'none',
      moveahead:'yes'
    })
  }
  if (value100[0]==null) {
    this.setState({
      show:'none',
      moveahead:'no'
    })
  }
}

  changetoltc1 = ()=>{
    this.setState({
      value3:'LTC',
      value5:'ltc',
      value10:'litecoin',
      from:'ltc',
      to:'btc'
    })
  }

  changetoltc2 = ()=>{
    this.setState({
      from:'doge',
      to:'ltc',
      value4:'LTC',
      value6:'ltc',
      value11:'litecoin',
    })
  }

  changetoltc27 = ()=>{
    this.setState({
      from:'xmr',
      to:'ltc',
      value4:'LTC',
      value6:'ltc',
      value11:'litecoin',
    })
  }


  changetoltc24 = ()=>{
    this.setState({
      from:'bnb',
      to:'ltc',
      value4:'LTC',
      value6:'ltc',
      value11:'litecoin',
    })
  }


   changetoltc23 = ()=>{
    this.setState({
      from:'btc',
      to:'ltc',
      value4:'LTC',
      value6:'ltc',
      value11:'litecoin',
    })
  }


  changetobtc1 = ()=>{
    this.setState({
      from:'btc',
      to:'ltc'
    })
  }
  
  
  changetobch13 = ()=>{
	  this.setState({
		  from:'bch',
		  value3:'BCH',
		  value5:'bch',
		  value10:'bitcoin-cash',
	  })
  }

  changetobch26 = ()=>{
	  this.setState({
		  to:'bch',
		  value4:'BCH',
		  value6:'bch',
		  value11:'bitcoin-cash'
	  })
  }


  changetobtc14 = ()=>{
    this.setState({
      from:'xmr',
      to:'btc',
      value4:'BTC',
      value6:'btc',
      value11:'bitcoin',
    })
  }

  changetobtc148 = ()=>{
    this.setState({
      from:'bnb',
      to:'btc',
      value4:'BTC',
      value6:'btc',
      value11:'bitcoin',
    })
  }

  changetobtc11 = ()=>{
    this.setState({
      from:'btc',
      to:'ltc',
      value3:'BTC',
      value5:'btc',
      value10:'bitcoin'
    })
  }
  
  changetobtc19=()=>{
	  this.setState({
		  from:'btc',
		  value3:'BTC',
		  value5:'btc',
		  value10:'bitcoin'
	  })
   }


  changetobtc120 = ()=>{
    this.setState({
      from:'btc',
      to:'doge',
      value3:'BTC',
      value5:'btc',
      value10:'bitcoin'
    })
  }

  changetobtc2 = ()=>{
    this.setState({
      from : "doge",
      to : "btc",
      value4:'BTC',
      value6:'btc',
      value11:'bitcoin',
    })
    }

    changetobtc2998 = ()=>{
      this.setState({
        from : "ltc",
        to : "btc",
        value4:'BTC',
        value6:'btc',
        value11:'bitcoin',
      })
      }

    changetobtc23 = ()=>{
      this.setState({
        from : "ltc",
        to : "btc",
        value4:'BTC',
        value6:'btc',
        value11:'bitcoin',
      })
      }
      
      changetobtc29 = ()=>{
		  this.setState({
			  to : "btc",
			  value4:'BTC',
			  value6:'btc',
			  value11:'bitcoin',
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
        window.open('https://www.bitbarter.org', '_blank');
      }
      home235 = ()=>{
		  window.open('https://www.bitbarter.org');
	  }

          
          to_ltc = ()=>{
			  this.setState({
				  to:'ltc',
				   value4:'LTC',
				   value6:'ltc',
				   value11:'litecoin'
			  })
		}
		
		from_ltc = ()=>{
			this.setState({
				 from:'ltc',
				 value3:'LTC',
				 value5:'ltc',
				 value10:'litecoin'
			})
		}
		
		from_btc = ()=>{
			this.setState({
				from:'btc',
				 value3:'BTC',
				 value5:'btc',
				 value10:'bitcoin'
			})
		}
		
		from_bnb = ()=>{
			this.setState({
				from:'bnb',
				 value3:'BNB',
				 value5:'bnb',
				 value10:'bnb'
			})
		}
		
		from_doge = ()=>{
			this.setState({
				from:'doge',
				 value3:'DOGE',
				 value5:'doge',
				 value10:'dogecoin'
			})
		}
		
		to_btc = ()=>{
			this.setState({
				to:'btc',
				 value4:'BTC',
				 value6:'btc',
				 value11:'bitcoin'
			})
		}
		
		to_doge = ()=>{
			this.setState({
				to:'doge',
				 value4:'DOGE',
				 value6:'doge',
				 value11:'dogecoin'
			})
		}
		
		changetodash = ()=>{
			this.setState({
				 from:'dash',
				 value3:'DASH',
				 value5:'dash',
				 value10:'dash'
			})
		}
		changetotrx = ()=>{
			this.setState({
				from:'trx',
				 value3:'TRX',
				 value5:'trx',
				 value10:'tron'
			})
		}

		changetoavax = ()=>{
			this.setState({
				from:'avax',
				 value3:'AVAX',
				 value5:'avalanche',
				 value10:'avax'
			})
		}
		
		
		changetoada = ()=>{
			this.setState({
				from:'ada',
				 value3:'ADA',
				 value5:'cardano',
				 value10:'ada'
			})
		}
		
		changetovet = ()=>{
			this.setState({
				from:'vet',
				 value3:'VET',
				 value5:'vechain',
				 value10:'vet'
			})
		}
		
		changetoxtz = ()=>{
			this.setState({
				from:'xtz',
				 value3:'XTZ',
				 value5:'tezos',
				 value10:'xtz'
			})
		}
		
		changetoeth = ()=>{
			this.setState({
				from:'eth',
				 value3:'ETH',
				 value5:'ethereum',
				 value10:'eth'
			})
		}
		
		changetoetc = ()=>{
			this.setState({
				from:'etc',
				 value3:'ETC',
				 value5:'etc',
				 value10:'ethereum-classic'
			})
		}
		
		changetosol = ()=>{
			this.setState({
				from:'sol',
				 value3:'SOL',
				 value5:'solana',
				 value10:'sol'
			})
		}
		
		login = ()=>{
			this.setState({
				from:'signin',
				to:'signin'
			})
		}
		
		signup = ()=>{
			this.setState({
				from:'signup',
				 to:'signup'
			})
		}
		
		
		login_validation2 = (event)=>{
			
			const value100 = event.target.value
			const isEmpty = value100 => !value100.trim().length;
			const blank = /^\s+$/;
			if(value100==null || isEmpty(value100)){
				this.setState({
					moveahead731:'no',
				    show731:'block'
				})
			}
			if(isEmpty(value100)){
				this.setState({
				  moveahead731:'no',
				  show731:'block'
				})
			}
			if(value100!=null){
				const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(value100.match(mailformat)){
				this.setState({
					moveahead731:'yes',
				    show731:'none'
				})
				}
			}
			
		
		}
		
		
		login_validation3 = (event)=>{
			
			const value100 = event.target.value
			console.log(value100)
			console.log(value100[0])
			if(value100==null){
				this.setState({
					moveahead732:'no',
				  show740:'block'
				})
			}
			if(value100==""){
				this.setState({
					moveahead732:'no',
				  show740:'block'
				})
			}
			if(value100=="" || value100[0]==undefined){
				this.setState({
					moveahead732:'no',
				  show740:'block'
				})
			}
			if(value100!=null){
					this.setState({
						moveahead732:'yes',
				   show740:'none'
					})
			}
			console.log(value100)
			console.log(value100[0])
			
		}
		
		login_validation4 = (event)=>{
			
			const value100 = event.target.value
			if(value100==null || value100[0]==undefined || value100==""){
				this.setState({
					moveahead732:'no',
				  show740:'block'
				})
			}
			if(value100!=null && value100[0]!=undefined && value100!=""){
				this.setState({
					moveahead732:'yes',
				  show740:'none'
				})
			}

			
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
		
		login_validation = ()=>{
			
			if(this.state.moveahead731=='yes' && this.state.moveahead732=='yes'){
				this.setState({
					show731:'none',
					show740:'none'
				})
				
			}
			
			if(this.state.moveahead731=='no' && this.state.moveahead732=='no'){
				this.setState({
					show731:'block',
					show740:'block'
				})
			}
			
			if(this.state.moveahead731=='yes' && this.state.moveahead732=='no'){
				this.setState({
					show731:'none',
					show740:'block'
				})
			}
			
			if(this.state.moveahead731=='no' && this.state.moveahead732=='yes'){
				this.setState({
					show731:'block',
					show740:'none'
				})
			}
			
		}
		
		
		dark_theme = ()=>{
			this.setState({
				theme:'dark',
				text:'white',
				url:'./green.png',
				color1:'#ce1414',
				bg_body:"black",
				display1:'none',
				display2:'block',
				top_color:"#2c3546",
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
				theme:'dark',
				 text:'black',
				 url:'./green.png',
				 color1:"#1c840f",
				 bg_body:'black',
				 display1:'block',
				 display2:'none',
				 top_color:"#3166f0",
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
		if(this.state.value3=='LTC'){
			value101=0.25
		}
		if(this.state.value3=='BTC'){
			value101=0.001
		}	
		if(this.state.value3=='TRX'){
			value101=350
		}	
		if(this.state.value3=='DOGE'){
			value101=250
		}
		if(this.state.value3=='DASH'){
			value101=0.4
		}
		if(this.state.value3=='BCH'){
			value101=0.2
		}
		if(this.state.value3=='XMR'){
			value101=0.15
		}
		if(this.state.value3=='BNB'){
			value101=0.06
		}
		if(this.state.value3=='AVAX'){
			value101=1
		}
		if(this.state.value3=='ADA'){
			value101=60
		}
		if(this.state.value3=='VET'){
			value101=1000
		}
		if(this.state.value3=='XTZ'){
			value101=20
		}
		if(this.state.value3=='ETH'){
			value101=0.015
		}
		if(this.state.value3=='SOL'){
			value101=1
		}
		if(this.state.value3=='ETC'){
			value101=1
		}
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
        {this.state.from=='ltc' && this.state.to=='btc'
        ?<div>
        
        <Main1 value0200 = {this.state.show_order} value0201 = {this.order_id_validation2} orderid1={this.order_id_validation} changetologin={this.login} changetosignup={this.signup} value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100915={this.state.first_bg} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme} changetoetc1={this.changetoetc} changetoeth1={this.changetoeth}  changetosol1={this.changetosol} send2={this.setvalue} changetovet1={this.changetovet} changetoxtz1={this.changetoxtz} changetoada1={this.changetoada} changetotrx1={this.changetotrx} changetoavax1={this.changetoavax} first66={this.state.value876} first changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value1600={this.state.show3} value501={this.state.show2} from1={'litecoin'} to1={'btc'} value74={'none'} value81={'block'} value75={'none'} value76={'block'} value71={'none'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal} value1006={this.hide2} value10070={this.hide3} value739={'none'} backtohome={this.home234} value751={'none'} value741={'none'}/>
      
      
                          {/* Footer begins */}
	<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}} >
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
        </Col>
      </Row>
      {/* Footer ends */}
        </div>
        :<div>
          {this.state.from=='ltc' && this.state.to=='doge'
          ?<div>
     
     <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} first66={this.state.value876} changetobch1={this.changetobch13} changetobch2={this.changetobch26} changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value1600={this.state.show3} value501={this.state.show2} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc120}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc23} event1={this.dogevalidation} value500={this.state.show} value1500={this.state.show1}  from1={'litecoin'} to1={'doge'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'none'} value1006={this.hide2}  call={this.calltofinal} value738={'none'} value739={'none'} backtohome={this.home234} value760={'none'} value740={'none'} value750={'none'}  value751={'none'} value751={'none'} value741={'none'} />
                                  {/* Footer begins */}
                                  <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.from=='btc' && this.state.to=='ltc'
          ?<div>
  
  <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg}  logo_value={this.state.url2} value10087={this.state.row_bg} value10088={this.state.row_color} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value1600={this.state.show3} value501={this.state.show2} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge23} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.ltcvalidation} value500={this.state.show}  from1={'bitcoin'} to1={'ltc'} value74={'none'} value75={'none'} value76={'block'} value71={'none'} value72={'none'} value73={'block'} call={this.calltofinal}  value738 ={'block'} value739={'none'} value1500={this.state.show1} value1006={this.hide2} backtohome={this.home234} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
                                              <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2023</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='btc' && this.state.to=='doge'
          ?<div>
   
   <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} first66={this.state.value876} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14}  change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc13} changetobtc={this.changetobtc1} value1600={this.state.show3} value501={this.state.show2}  changetodoge4={this.changetodoge23} changetoltc4={this.changetoltc23} changetobtc4={this.changetobtc2} event1={this.dogevalidation} value500={this.state.show} from1={'bitcoin'} to1={'doge'} value74={'none'} value75={'block'} value76={'none'} value73={'none'} value71={'none'} value72={'block'} value1006={this.hide2} value1500={this.state.show1} value738 ={'none'} call={this.calltofinal} value739={'none'} backtohome={this.home234} value750={'none'} value751={'none'} value760={'none'} value740={'none'} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
                                              <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}} >
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='doge' &&this.state.to=='btc'
          ?<div>
       
       <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobnb1={this.changetobnb13}  changetobch2={this.changetobch26}  changetobnb2={this.changetobnb14}  change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show}  from1={'dogecoin'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'}  value71={'none'} vlaue72={'block'} value73={'none'} value1006={this.hide2}value1500={this.state.show1}  value738 ={'block'} call={this.calltofinal} value739={'none'} backtohome={this.home234} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
                                              <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}} >
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='doge' &&this.state.to=='ltc'
          ?<div>
        
        <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14}  change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc11}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetoxmr={this.changetoxmr1} changetobtc4={this.changetobtc2} event1={this.ltcvalidation} value500={this.state.show} from1={'dogecoin'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value72={'none'}  value73={'none'}  value71={'block'} value1006={this.hide2}  value1500={this.state.show1} value738 ={'block'} call={this.calltofinal} value739={'none'} backtohome={this.home234} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
                                              <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}} >
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.final_from=='ltc' &&this.state.final_to=='btc'
          ?<div>
          <Main2 value10092={this.state.color1} value10={this.state.value10} value5={this.state.value5} value11={this.state.value11}  value6={this.state.value6} value3={this.state.value3} orderid={this.state.order_id} amount23={this.state.address569} value1005={this.state.address} final56={this.state.rec_address} backtohome2={this.home234}  final90={this.calltofinal}/>
          
          {/* Footer begins */}
          <Row className='row1 d-flex justify-content-center align-items-center' style={{'color':`${this.state.text_color2}`,'background-color':`${this.state.bottom_color2}`}} >
          <Col className='col-md-12 d-flex justify-content-center align-items-center'>
          <p className='b text-center tc mt-4'>IndusBit © 2023</p>
          </Col>
          </Row>
          {/* Footer ends */}
          </div>
          :<div>{this.state.status=='final'
          ?<div>
                                  
                                  <Main3 orderid={this.state.order_id} value10={this.state.value10} value5={this.state.value5} value11={this.state.value11}  value6={this.state.value6} value3={this.state.value3} value1005={this.state.address} final56={this.state.rec_address} call2home={this.home235} value19={this.state.final_value19} />
                                                                                {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
        </Col>
      </Row>
      {/* Footer ends */}

          </div>
          :<div>{this.state.from=='xmr' && this.state.to=='btc'
			  
			  ?<div>
			
			<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge299} changetodoge41={this.changetodoge21} changetoltc4={this.changetoltc299} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'monero'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value751={'none'} value741={'none'}  value739={'none'} backtohome={this.home234}/>
			  
			  {/* Footer begins */}
			  <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
			  <Col className='col-md-12 d-flex justify-content-center align-items-center'>
			  <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
			  </Col>
			  </Row>
			  {/* Footer ends */}
			  
			  </div>
			  
			  :<div>{this.state.from=='xmr' && this.state.to=='ltc'
				  ?<div>
				
				<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14}  change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19}  changetodoge4={this.changetodoge299} changetodoge41={this.changetodoge21} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc29} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'monero'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'}  value751={'none'} value741={'none'} value738={'none'} value739={'none'} call={this.calltofinal} value1006={this.hide2}  backtohome={this.home234}/>
				
				{/* Footer begins */}
				<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
				<Col className='col-md-12 d-flex justify-content-center align-items-center'>
				<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
				</Col>
				</Row>
				{/* Footer ends */}
				  
				  </div>
				  :<div>{this.state.from=='bnb' && this.state.to=='btc'
          ?<div>
   
          
          <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge26} changetoltc4={this.changetoltc24} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'binancecoin'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'} value71={'none'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal} value1006={this.hide2} value751={'none'} value739={'none'} value741={'none'} value740={'none'} backtohome={this.home234}/>
          
          {/* Footer begins */}
          <Row className='row1 d-flex justify-content-center align-items-center'style={{'background-color':`${this.state.bottom_color}`}}>
          <Col className='col-md-12 d-flex justify-content-center align-items-center'>
          <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
          </Col>
          </Row>
          {/* Footer ends */}

          </div>
          :<div>{this.state.from=='dash' && this.state.to=='btc'
          ?<div>
          
          <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.from_doge} changetoltc={this.from_ltc}  changetodoge4={this.changetodoge26} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'dash'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'block'} call={this.calltofinal} value1006={this.hide2} value760={'none'} value751={'none'} value739={'none'} value741={'none'} value740={'block'} backtohome={this.home234}/>
          
          {/* Footer begins */}
          <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
          <Col className='col-md-12 d-flex justify-content-center align-items-center'>
          <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
          </Col>
          </Row>
          {/* Footer ends */}
          
          </div>
          :<div>{this.state.from=='dash' && this.state.to=='ltc'
          ?<div>
          
          <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetobch1={this.changetobch13} first66={this.state.value876} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.from_doge} changetobtc={this.from_btc} reverse={this.reverse1} changetodoge4={this.changetodoge26} changetoltc4={this.changetoltc24} changetobtc4={this.to_btc} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1} from1={'dash'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal} value1006={this.hide2} value760={'none'} value751={'none'} value739={'none'} value741={'none'} value740={'block'} backtohome={this.home234}/>
          
          {/* Footer begins */}
          <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
          <Col className='col-md-12 d-flex justify-content-center align-items-center'>
          <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
          </Col>
          </Row>
          {/* Footer ends */}
          
          </div>
          :<div>{this.state.from=='bnb' && this.state.to=='ltc'
          ?<div>
      
      <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} reverse={this.reverse1}  changetobtc4={this.changetobtc148} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'binancecoin'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} value751={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value741={'none'} value740={'none'} backtohome={this.home234}/>
      
      {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
      <Col className='col-md-12 d-flex justify-content-center align-items-center'>
      <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
      </Col>
      </Row>
      {/* Footer ends */}
      
      
          </div>
          :<div>{this.state.from=='trx' && this.state.to=='btc'
          ?<div>
          
          <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}   send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc148} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} reverse={this.reverse1} value74={'none'} value75={'block'} value76={'block'} value71={'block'} value72={'block'} value73={'block'} value738 ={'block'} value751={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value741={'none'} value740={'none'} backtohome={this.home234} />
          
          {/* Footer begins */}
          <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
          <Col className='col-md-12 d-flex justify-content-center align-items-center'>
          <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
          </Col>
          </Row>
          {/* Footer ends */}
          
          </div>
          :<div>{ this.state.from=='avax' && this.state.to=='btc'
            ?<div>
            
            <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}   send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} reverse={this.reverse1} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc148} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} value751={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value741={'none'} value740={'none'} backtohome={this.home234}/>
            
            {/* Footer begins */}
            <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
            <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
            </Col>
            </Row>
            {/* Footer ends */}
            
            
            </div>
            :<div>{this.state.from=='ada' && this.state.to=='btc'
				?<div>
				
				<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  send2={this.setvalue} value1600={this.state.show3} value501={this.state.show2} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1} reverse={this.reverse1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc148} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} value751={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value741={'none'} value740={'none'} backtohome={this.home234}/>
				
				{/* Footer begins */}
				<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
				<Col className='col-md-12 d-flex justify-content-center align-items-center'>
				<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
				</Col>
				</Row>
				{/* Footer ends */}
				
				
				</div>
				:<div>{this.state.from=='bch' && this.state.to=='ltc'
					?<div>
					 
					 <Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19}  changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.to_btc} reverse={this.reverse1} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'bitcoin-cash'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value750={'none'} value751={'none'} value741={'none'} value740={'block'} backtohome={this.home234}/>
					 
					 {/* Footer begins */}
					 <Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
					 <Col className='col-md-12 d-flex justify-content-center align-items-center'>
					 <p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
					 </Col>
					 </Row>
					 {/* Footer ends */}
					 
					
					</div>
					:<div>{this.state.from=='bch' && this.state.to=='btc'
						?<div>
					
					<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} reverse={this.reverse1} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value74={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
					
					{/* Footer begins */}
					<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
					<Col className='col-md-12 d-flex justify-content-center align-items-center'>
					<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
					</Col>
					</Row>
					{/* Footer ends */}
					
						
						</div>
						:<div>{this.state.from=='vet' && this.state.to=='btc'
							?<div>
							
							<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} changetodoge4={this.changetodoge2} reverse={this.reverse1} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value74={'none'} value75={'block'} value76={'block'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'}  value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
							
							{/* Footer begins */}
							<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
							<Col className='col-md-12 d-flex justify-content-center align-items-center'>
							<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
							</Col>
							</Row>
							{/* Footer ends */}
							
							
							</div>
							:<div>{this.state.from=='vet' && this.state.to=='ltc'
								?<div>
								
								<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'none'} value76={'block'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
								
								{/* Footer begins */}
								<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
								<Col className='col-md-12 d-flex justify-content-center align-items-center'>
								<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
								</Col>
								</Row>
								{/* Footer ends */}
								
								
								</div>
								:<div>{this.state.from=='vet' && this.state.to=='doge'
									?<div>
									
									<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.dogevalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value741={'none'} value750={'none'} value751={'block'} value740={'block'} value738={'block'} backtohome={this.home234}/>
									
									{/* Footer begins */}
									<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}} >
									<Col className='col-md-12 d-flex justify-content-center align-items-center'>
									<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
									</Col>
									</Row>
									{/* Footer ends */}
									
									
									</div>
									:<div>{this.state.from=='trx' && this.state.to=='ltc'
										?<div>
										
										<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}  value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'none'} value76={'block'} value71={'block'} value72={'none'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
										
										{/* Footer begins */}
										<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
										<Col className='col-md-12 d-flex justify-content-center align-items-center'>
										<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
										</Col>
										</Row>
										{/* Footer ends */}
										
										
										</div>
										:<div>{this.state.from=='trx' && this.state.to=='doge'
											?<div>
											
											<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}   value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.dogevalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value74={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
											
											{/* Footer begins */}
											<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}} >
											<Col className='col-md-12 d-flex justify-content-center align-items-center'>
											<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
											</Col>
											</Row>
											{/* Footer ends */}
											
											
											</div>
											:<div>{this.state.from=='xtz' && this.state.to=='btc'
												?<div>
												
												<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}   value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.dogevalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value74={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
												
												{/* Footer begins */}
												<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
												<Col className='col-md-12 d-flex justify-content-center align-items-center'>
												<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
												</Col>
												</Row>
												{/* Footer ends */}
												
												
												</div>
												:<div>{this.state.from=='eth' && this.state.to=='btc'
													?<div>
													
													<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color} logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}   value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value74={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
													
													{/* Footer begins */}
													<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
													<Col className='col-md-12 d-flex justify-content-center align-items-center'>
													<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
													</Col>
													</Row>
													{/* Footer ends */}
													
													
													</div>
													:<div>{this.state.from=='sol' && this.state.to=='btc'
														?<div>
														
														<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}   value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.dogevalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value74={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
														
														{/* Footer begins */}
														<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
														<Col className='col-md-12 d-flex justify-content-center align-items-center'>
														<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
														</Col>
														</Row>
														{/* Footer ends */}
														
														
														</div>
														:<div>{this.state.from=='etc' && this.state.to=='btc'
															?<div>
															
															<Main1 value10057={this.state.border} value100912={this.state.text_body} value10059={this.state.text_color} value100910={this.state.article_bg} value10087={this.state.row_bg} value10088={this.state.row_color}  logo_value={this.state.url2} value10085={this.state.top_color} value10081={this.state.bg_body} value10082={this.state.display1} value10083={this.state.display2} value10092={this.state.color1} value1008={this.state.text} value10091={this.state.url} changetodark={this.dark_theme} changetolight={this.light_theme} theme={this.state.theme}   value1600={this.state.show3} value501={this.state.show2} send2={this.setvalue} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} reverse={this.reverse1} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal} value1006={this.hide2} value739={'none'} value74={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
															
															{/* Footer begins */}
															<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`${this.state.bottom_color}`}}>
															<Col className='col-md-12 d-flex justify-content-center align-items-center'>
															<p className='b text-white text-center tc mt-4'>IndusBit © 2023</p>
															</Col>
															</Row>
															{/* Footer ends */}
															
															</div>
															:<div>{this.state.from=='signin' && this.state.to=='signin'
																?<div>
																
																<Signin signinpassword2={this.login_validation4} value1500={this.state.show731} value1503 = {this.state.show740} signinpassword={this.login_validation3} signinemail={this.login_validation2} backtosignup={this.signup} gologin={this.login_validation}/>
																
																{/* Footer begins */}
																<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`white`}} >
																<Col className='col-md-12 d-flex justify-content-center align-items-center'>
																<p className='b para25 text-center tc mt-4'>IndusBit © 2023</p>
																</Col>
																</Row>
																{/* Footer ends */}
																
																</div>
																:<div>{this.state.from=='signup' && this.state.to=='signup'
																	?<div>
																	
																	<Signup value1500={this.state.show731} value1501 = {this.state.show732}  backtologin={this.login}/>
																	
																	
																	{/* Footer begins */}
																	<Row className='row1 d-flex justify-content-center align-items-center' style={{'background-color':`white`}} >
																	<Col className='col-md-12 d-flex justify-content-center align-items-center'>
																	<p className='b para25 text-center tc mt-4'>IndusBit © 2023</p>
																	</Col>
																	</Row>
																	{/* Footer ends */}
																	
																	</div>
																	:<div>Error</div>
																}</div>
															}</div>
														}</div>
													}</div>
												}</div>
											}</div>
										}</div>
									}</div>
								}</div>
							}</div>
						}</div>
					} </div>
				}</div>
			}</div>
            } </div>
          }</div>
          }</div>
          }</div>
            }
          </div>
          }</div>
			}</div>
		}</div>
          }</div>
          }</div>
            }</div>
          }</div>
            }

          </div>
          }</div>
          }
        </div>
      }
      </div>
    )
  }
}

export default App;
