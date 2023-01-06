import React from 'react';
import './App.css';
import Main1 from './Components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react'
import Main2 from './Components/main2';
import Main3 from './Components/main3';
import 'clipboard'
 
class App extends React.Component{
  constructor(){
    super()
    this.state={
      value876:'',
      address_23:'',
      value2:'',
      value3:"LTC",
      value4:"BTC",
      value5:'ltc',
      value6:"btc",
      value10:'litecoin',
      value11:'bitcoin',
      from:'ltc',
      to:'btc',
      show:'none',
      show1:'none',
      liverate:'',
      address:'',
      rec_address:"",
      final_from:'',
      final_to:'',
      moveahead:'no',
      status:'',
      final_value19:'',
      txn_id:'',
      moveahead2:''
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
  const value100=event2.target.value
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

    calltofinal560 = ()=>{

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
          to:'',
          moveahead2:'no'
        })
		value156='https://rich-tan-lovebird-coat.cyclic.app/address_bnb'
      }
      if (this.state.moveahead=='no'){
        this.setState({
          show1:'block'
        })
        value156=''
      }

      fetch(`${value156}`,{
        'method':'post',
        'headers':{'Content-type':'application/json'}
      }).then(res => res.json()).then(data50 => {
        
        this.setState({
          address:data50.address_bnb,
		  address23:data50.address_bnb
        })
        
       var  value200 = this.state.rec_address
       var value201 = this.state.value5
       var value202 = this.state.from
       var value203 = this.state.to
      let Interval_id = setInterval(
      async function first(){
		  const value =await fetch(`https://api.bscscan.com/api?module=account&action=balance&address=${data50.address_bnb}&apikey=MCESX62MDHW5JXVV1SQM694H7VDRHXUQPB`)
      const final_value= await value.json()
      if (final_value.result!=0){
        fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_bnb",{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            amount:final_value.result,
            address:value200,
			to30:'btc'
          })
        })
          
        setTimeout(() => {
          second2()
        }, 13000)
          clearInterval(Interval_id)
      }
    },20000)

  })
    }
    
    calltofinal_dot = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_dot'
		}
		if (this.state.moveahead=='no'){
			this.setState({
				show1:'block'
			})
			value156=''
		}
		
		fetch(`${value156}`,{
			'method':'post',
		'headers':{'Content-type':'application/json'}
		}).then(res => res.json()).then(data50 => {
			
			this.setState({
				address:data50.dot,
				 address23:data50.dot
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://svc.blockdaemon.com/universal/v1/polkadot/mainnet/account/${data50.dot}`,{
						'method':'get',
						'headers':{
							'X-API-Key':'SllpuIz0pf227yJWfcyk5YuIvrKt4aCTyX6XiISYqp4QOAXr',
							'Content-type':'application/json'
						},
					})
					const final_value= await value.json()
					if (final_value[0]['confirmed_balance']!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_dot",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value[0]['confirmed_balance'],
				address:value200,
				to30:'btc'
			})
						})
						
						setTimeout(() => {
							second2()
						}, 13000)
						clearInterval(Interval_id)
					}
				},20000)
			
		})
	}
	
	calltofinal_dot2 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_dot'
		}
		if (this.state.moveahead=='no'){
			this.setState({
				show1:'block'
			})
			value156=''
		}
		
		fetch(`${value156}`,{
			'method':'post',
		'headers':{'Content-type':'application/json'}
		}).then(res => res.json()).then(data50 => {
			
			this.setState({
				address:data50.dot,
				 address23:data50.dot
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://svc.blockdaemon.com/universal/v1/polkadot/mainnet/account/${data50.dot}`,{
						'method':'get',
						'headers':{
							'X-API-Key':'SllpuIz0pf227yJWfcyk5YuIvrKt4aCTyX6XiISYqp4QOAXr'
						},
					})
					const final_value= await value.json()
					if (final_value[0]['confirmed_balance']!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_dot",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value[0]['confirmed_balance'],
				address:value200,
				to30:'ltc'
			})
						})
						
						setTimeout(() => {
							second2()
						}, 13000)
						clearInterval(Interval_id)
					}
				},20000)
			
		})
	}
	
	calltofinal_dash1 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_dash'
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
				address:data50.address_dash,
				 address23:data50.address_dash
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://api.blockcypher.com/v1/dash/main/addrs/${data50.address_dash}/balance`)
					const final_value= await value.json()
					if (final_value.unconfirmed_balance!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_dash",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value.unconfirmed_balance,
				address:value200,
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
	
	calltofinal_dash2 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_dash'
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
				address:data50.address_dash,
				 address23:data50.address_dash
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://api.blockcypher.com/v1/dash/main/addrs/${data50.address_dash}/balance`)
					const final_value= await value.json()
					if (final_value.unconfirmed_balance!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_dash",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value.unconfirmed_balance,
				address:value200,
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
	
	
	
    calltofinal5600 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_bnb'
		}
		if (this.state.moveahead=='no'){
			this.setState({
				show1:'block'
			})
			value156=''
		}
		
		fetch(`${value156}`,{
			'method':'post',
		'headers':{'Content-type':'application/json'}
		}).then(res => res.json()).then(data50 => {
			
			this.setState({
				address:data50.address_bnb,
				 address23:data50.address_bnb
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://api.bscscan.com/api?module=account&action=balance&address=${data50.address_bnb}&apikey=MCESX62MDHW5JXVV1SQM694H7VDRHXUQPB`)
					const final_value= await value.json()
					if (final_value.result!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_bnb",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value.result,
				address:value200,
				to30:'ltc'
			})
						})
						
						setTimeout(() => {
							second2()
						}, 13000)
						clearInterval(Interval_id)
					}
				},20000)
			
		})
	}

	calltofinal56000 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_bnb'
		}
		if (this.state.moveahead=='no'){
			this.setState({
				show1:'block'
			})
			value156=''
		}
		
		fetch(`${value156}`,{
			'method':'post',
		'headers':{'Content-type':'application/json'}
		}).then(res => res.json()).then(data50 => {
			
			this.setState({
				address:data50.address_bnb,
				 address23:data50.address_bnb
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://api.bscscan.com/api?module=account&action=balance&address=${data50.address_bnb}&apikey=MCESX62MDHW5JXVV1SQM694H7VDRHXUQPB`)
					const final_value= await value.json()
					if (final_value.result!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_bnb",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value.result,
				address:value200,
				to30:'bch'
			})
						})
						
						setTimeout(() => {
							second2()
						}, 13000)
						clearInterval(Interval_id)
					}
				},20000)
			
		})
	}
	
	
    calltofinal561 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_bch'
		}
		if (this.state.moveahead=='no'){
			this.setState({
				show1:'block'
			})
			value156=''
		}
		
		fetch(`${value156}`,{
			'method':'post',
		'headers':{'Content-type':'application/json'}
		}).then(res => res.json()).then(data50 => {
			
			this.setState({
				address:data50.address_bch,
				 address23:data50.address_bch
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://bch-chain.api.btc.com/v3/address/${data50.address_bch}`)
					console.log("working fetching address")
					const final_value= await value.json()
					console.log(final_value.data.unconfirmed_received)
					if (final_value.data.unconfirmed_received!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_bch",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value.data.unconfirmed_received,
				address:value200,
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
	
	
	calltofinal5610 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_bch'
		}
		if (this.state.moveahead=='no'){
			this.setState({
				show1:'block'
			})
			value156=''
		}
		
		fetch(`${value156}`,{
			'method':'post',
		'headers':{'Content-type':'application/json'}
		}).then(res => res.json()).then(data50 => {
			
			this.setState({
				address:data50.address_bch,
				 address23:data50.address_bch
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://bch-chain.api.btc.com/v3/address/${data50.address_bch}`)
					console.log("working fetching address")
					const final_value= await value.json()
					console.log(final_value.data.unconfirmed_received)
					if (final_value.data.unconfirmed_received!=0){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_bch",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value.data.unconfirmed_received,
				address:value200,
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
	
	calltofinal571 = ()=>{
		
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
				 to:'',
				 moveahead2:'no'
			})
			value156='https://rich-tan-lovebird-coat.cyclic.app/address_xmr'
		}
		if (this.state.moveahead=='no'){
			this.setState({
				show1:'block'
			})
			value156=''
		}
		
		fetch(`${value156}`,{
			'method':'POST',
		'headers':{'Content-type':'application/json'}
		}).then(res => res.json()).then(data50 => {
			
			this.setState({
				address:data50.address_xmr,
				 address23:data50.address_xmr
			})
			
			var  value200 = this.state.rec_address
			var value201 = this.state.value5
			var value202 = this.state.from
			var value203 = this.state.to
			let Interval_id = setInterval(
				async function first(){
					const value =await fetch(`https://rich-tan-lovebird-coat.cyclic.app/balance_xmr`)
					const final_value= await value.json()
					console.log(final_value.xmr_b)
					if (final_value.xmr_b>0.0018){
						fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_xmr",{
							'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				amount:final_value.xmr_b,
				address:value200
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
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:'',
            moveahead2:'no'
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
            address:data50.first2,
            address23:data50.first2
          })
          
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
         var value202 = this.state.from
         var value203 = this.state.to
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
              from30:'ltc',
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

      calltofinal3 = ()=>{

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
              from30:'ltc',
              to30:'doge'
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

      calltofinal4 = ()=>{

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
              from30:'btc',
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

      calltofinal5 = ()=>{
        
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
              from30:'btc',
              to30:'doge'
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

      home = ()=>{
        this.setState({
          value2:'',
          value3:"LTC",
          value4:"BTC",
          value5:'ltc',
          value6:"btc",
          value10:'litecoin',
          value11:'bitcoin',
          from:'ltc',
          to:'btc',
          show:'none',
          show1:'none',
          liverate:'',
          address:'',
          rec_address:"",
          final_from:'',
          final_to:'',
          moveahead:'no',
          status:'',
          final_value19:'',
          txn_id:''
      })
      }

      home234 = ()=>{
        window.open('https://bitbarter.org', '_blank');
      }

      calltofinal_xmr1 = ()=>{
		  
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
			  value156='https://rich-tan-lovebird-coat.cyclic.app/address_xmr'
		  }
		  if (this.state.moveahead=='no'){
			  this.setState({
				  show1:'block'
			  })
			  value156=''
		  }
		  
		  fetch(`${value156}`,{
			  'method':'post',
		  'headers':{'Content-type':'application/json'}
		  }).then(res => res.json()).then(data50 => {
			  this.setState({
				  address:data50.address_monero
			  })
			  var  value200 = this.state.rec_address
			  var value201 = this.state.value5
			  let Interval_id = setInterval(
				  function first(){
					  fetch(`https://rich-tan-lovebird-coat.cyclic.app/address_xmr2`).then(data20 => data20.json()).then(data80 => {
						  console.log(data80.balance_monero)
						  if(data80.balance_monero>0.00175){
              fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_xmr",{
                'method':'post',
                'headers':{'Content-type':'application/json'},
                'body': JSON.stringify({
                  amount:data80.balance_monero,
                  address:value200,
                  from30:'xmr',
                  to30:'btc'
                })
              }).then(res3 => res3.json()).then(res23 => {
                console.log(res23.a)
              })
              setTimeout(() => {
                second2()
			  }, 30000)
                clearInterval(Interval_id)
            }})
		  },60000)})}


        calltofinal_xmr3 = ()=>{
		  
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
            value156='https://rich-tan-lovebird-coat.cyclic.app/address_xmr'
          }
          
          if (this.state.moveahead=='no'){
            this.setState({
              show1:'block'
            })
            value156=''
          }
          
          fetch(`${value156}`,{
            'method':'post',
          'headers':{'Content-type':'application/json'}
          }).then(res => res.json()).then(data50 => {
            this.setState({
              address:data50.address_monero
            })
            var  value200 = this.state.rec_address
            var value201 = this.state.value5
            let Interval_id = setInterval(
              function first(){
                fetch(`https://rich-tan-lovebird-coat.cyclic.app/address_xmr2`).then(data20 => data20.json()).then(data80 => {
					console.log(data80.balance_monero)
					if(data80.balance_monero>0.00175){
                  fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw_xmr",{
                    'method':'post',
                    'headers':{'Content-type':'application/json'},
                    'body': JSON.stringify({
                      amount:data80.balance_monero,
                      address:value200,
                      from30:'xmr',
                      to30:'ltc'
                    })
                  }).then(res3 => res3.json()).then(res23 => {
                    console.log(res23.a)
                  })
                  setTimeout(() => {
                    second2()
                  }, 30000)
                    clearInterval(Interval_id)
                }})
          },60000)})}
          
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

		getvalue  =(event)=>{
			
			fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
				'method':'post',
		 'headers':{'Content-type':'application/json'},
		 'body': JSON.stringify({
			 from30:'ltc',
			 to30:'doge',
			 amount:event.target.value
		 })
			}).then(res1 => res1.json()).then( res5 => {
				
				fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(data10 => data10.json()).then(data20 => { {fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd').then(data30 => data30.json()).then(data40 => 
					{
						let hello = ((res5.fees)*(1/((data20.bitcoin.usd))))
						let final  = parseFloat((((data40.litecoin.usd)*(1/(data20.bitcoin.usd)))* (event.target.value))-(hello))
						this.setState({
							value876:final
						})
					}
					
				)}})
				
			})
		}
    
	
	getvalue2  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'doge',
			to30:'btc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(data10 => data10.json()).then(data20 => { {fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd').then(data30 => data30.json()).then(data40 => 
				{
					let hello = ((res5.fees)*(1/((data20.bitcoin.usd))))
					let final  = parseFloat((((data40.dogecoin.usd)*(1/(data20.bitcoin.usd)))* (event.target.value))-(hello))
					this.setState({
						value876:final
					})
				}
				
			)}})
			
		})
	}
	
	getvalue21  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'btc',
			to30:'ltc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd').then(data10 => data10.json()).then(data20 => { {fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(data30 => data30.json()).then(data40 => 
				{
					let hello = ((res5.fees)*(1/((data20.litecoin.usd))))
					let final  = parseFloat((((data40.bitcoin.usd)*(1/(data20.litecoin.usd)))* (event.target.value))-(hello))
					this.setState({
						value876:final
					})
				}
				
			)}})
			
		})
	}
	
	
	getvalue3  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'doge',
			to30:'ltc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd').then(data10 => data10.json()).then(data20 => { {fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd').then(data30 => data30.json()).then(data40 => 
				{
					let hello = ((res5.fees)*(1/((data20.litecoin.usd))))
					let final  = parseFloat((((data40.dogecoin.usd)*(1/(data20.litecoin.usd)))* (event.target.value))-(hello))
					this.setState({
						value876:final
					})
				}
				
			)}})
			
		})
	}
	
	getvalue4  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'bnb',
			to30:'btc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=btc').then(data10 => data10.json()).then(data20 => {
				console.log("asdf")
				let hello = res5.fees
				let final=parseFloat(((data20.binancecoin.btc)*(event.target.value))-(hello))
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	getvalue5  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'bnb',
			to30:'ltc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=ltc').then(data10 => data10.json()).then(data20 => {
				let hello = res5.fees
				let final=parseFloat(((data20.binancecoin.ltc)*(event.target.value))-(hello))
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	getvalue6  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'xmr',
			to30:'btc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=btc').then(data10 => data10.json()).then(data20 => {
				let hello = res5.fees
				let final=parseFloat(((data20.monero.btc)*(event.target.value))-(hello))
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	getvalue7  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'xmr',
			to30:'ltc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=ltc').then(data10 => data10.json()).then(data20 => {
				let hello = res5.fees
				let final=parseFloat(((data20.monero.ltc)*(event.target.value))-(hello))
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	
	
	getvalue8  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'bch',
			to30:'btc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=btc').then(data10 => data10.json()).then(data20 => {
				let hello = res5.fees
				let final=parseFloat(((data20["bitcoin-cash"].btc)*(event.target.value))-(hello))
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	
	getvalue9  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'bch',
			to30:'ltc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=ltc').then(data10 => data10.json()).then(data20 => {
				let hello = res5.fees
				let final=parseFloat(((data20["bitcoin-cash"].ltc)*(event.target.value))-(hello))
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	getvalue10  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'dash',
			to30:'btc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=dash&vs_currencies=btc').then(data10 => data10.json()).then(data20 => {
				let hello = (res5.fees)
				let final=parseFloat(((data20.dash.btc)*(event.target.value)))-hello
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	getvalue11  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'dash',
			to30:'ltc',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=dash&vs_currencies=ltc').then(data10 => data10.json()).then(data20 => {
				let hello = res5.fees
				let final=parseFloat(((data20.dash.ltc)*(event.target.value))-(hello))
				this.setState({
					value876:final
				})
				
			})
			
		})
	}
	
	getvalue12  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'ltc',
			to30:'doge',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd').then(data10 => data10.json()).then(data20 => { {fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd').then(data30 => data30.json()).then(data40 => 
				{
					let hello = ((res5.fees)*(1/((data20.dogecoin.usd))))
					let final  = parseFloat((((data40.litecoin.usd)*(1/(data20.dogecoin.usd)))* (event.target.value))-(hello))
			
					this.setState({
						value876:final
					})
				}
				
			)}})
			
		})
	}
	
	getvalue13  =(event)=>{
		
		fetch('https://rich-tan-lovebird-coat.cyclic.app/get_fees',{
			'method':'post',
		'headers':{'Content-type':'application/json'},
		'body': JSON.stringify({
			from30:'btc',
			to30:'doge',
			amount:event.target.value
		})
		}).then(res1 => res1.json()).then( res5 => {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd').then(data10 => data10.json()).then(data20 => { {fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(data30 => data30.json()).then(data40 => 
				{
					let hello = ((res5.fees)*(1/((data20.dogecoin.usd))))
					let final  = parseFloat((((data40.bitcoin.usd)*(1/(data20.dogecoin.usd)))* (event.target.value))-(hello))
					this.setState({
						value876:final
					})
				}
				
			)}})
			
		})
		
		
	}
	


  render(){
    return(
      <div>
        {this.state.from=='ltc' && this.state.to=='btc'
        ?<div>
      
        <Main1 send2={this.getvalue} first66={this.state.value876} first changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'litecoin'} to1={'btc'} value74={'none'} value75={'none'} value76={'block'} value71={'none'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal} value1006={this.hide2} value739={'none'} backtohome={this.home234} value751={'none'} value741={'none'}/>

                          {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
        </div>
        :<div>
          {this.state.from=='ltc' && this.state.to=='doge'
          ?<div>
     
     <Main1 send2={this.getvalue12} first66={this.state.value876} changetobch1={this.changetobch13} changetobch2={this.changetobch26} changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc120}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc23} event1={this.dogevalidation} value500={this.state.show} value1500={this.state.show1}  from1={'litecoin'} to1={'doge'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'none'} value1006={this.hide2}  call={this.calltofinal3} value738={'none'} value739={'none'} backtohome={this.home234} value760={'none'} value740={'none'} value750={'none'}  value751={'none'} value751={'none'} value741={'none'} />
                                  {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.from=='btc' && this.state.to=='ltc'
          ?<div>
  
  <Main1 send2={this.getvalue21} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge23} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.ltcvalidation} value500={this.state.show}  from1={'bitcoin'} to1={'ltc'} value74={'none'} value75={'none'} value76={'block'} value71={'none'} value72={'none'} value73={'block'} call={this.calltofinal4}  value738 ={'block'} value739={'none'} value1500={this.state.show1} value1006={this.hide2} backtohome={this.home234} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='btc' && this.state.to=='doge'
          ?<div>
   
   <Main1 send2={this.getvalue13} first66={this.state.value876} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14}  change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc13} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge23} changetoltc4={this.changetoltc23} changetobtc4={this.changetobtc2} event1={this.dogevalidation} value500={this.state.show} from1={'bitcoin'} to1={'doge'} value74={'none'} value75={'block'} value76={'none'} value73={'none'} value71={'none'} value72={'block'} value1006={this.hide2} value1500={this.state.show1} value738 ={'none'} call={this.calltofinal5} value739={'none'} backtohome={this.home234} value750={'none'} value751={'none'} value760={'none'} value740={'none'} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='doge' &&this.state.to=='btc'
          ?<div>
       
       <Main1 send2={this.getvalue2} first66={this.state.value876} changetodash1={this.changetodash} changetobnb1={this.changetobnb13}  changetobch2={this.changetobch26}  changetobnb2={this.changetobnb14}  change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoxmr={this.changetoxmr1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show}  from1={'dogecoin'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'}  value71={'none'} vlaue72={'block'} value73={'none'} value1006={this.hide2}value1500={this.state.show1}  value738 ={'block'} call={this.calltofinal2} value739={'none'} backtohome={this.home234} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='doge' &&this.state.to=='ltc'
          ?<div>
        
        <Main1 send2={this.getvalue3} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14}  change1={this.changevalue} changetoxmr2={this.changetoxmr2} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc11}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetoxmr={this.changetoxmr1} changetobtc4={this.changetobtc2} event1={this.ltcvalidation} value500={this.state.show} from1={'dogecoin'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value72={'none'}  value73={'none'}  value71={'block'} value1006={this.hide2}  value1500={this.state.show1} value738 ={'block'} call={this.calltofinal1} value739={'none'} backtohome={this.home234} value751={'none'} value741={'none'}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.final_from=='ltc' &&this.state.final_to=='btc'
          ?<div>
                                <Main2 value10={this.state.value10} value5={this.state.value5} value11={this.state.value11}  value6={this.state.value6} value3={this.state.value3} value1005={this.state.address} final56={this.state.rec_address} backtohome2={this.home234}  final90={this.calltofinal}/>
                                                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.status=='final'
          ?<div>
                                  
                                  <Main3 value10={this.state.value10} value5={this.state.value5} value11={this.state.value11}  value6={this.state.value6} value3={this.state.value3} value1005={this.state.address} final56={this.state.rec_address} call2home={this.home} value19={this.state.final_value19} />
                                                                                {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}

          </div>
          :<div>{this.state.from=='xmr' && this.state.to=='btc'
			  
			  ?<div>
			
			<Main1 send2={this.getvalue6} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge299} changetodoge41={this.changetodoge21} changetoltc4={this.changetoltc299} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'monero'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal571} value1006={this.hide2} value751={'none'} value741={'none'}  value739={'none'} backtohome={this.home234}/>
			  
			  {/* Footer begins */}
			  <Row className='row1 d-flex justify-content-center align-items-center'>
			  <Col className='col-md-12 d-flex justify-content-center align-items-center'>
			  <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
			  </Col>
			  </Row>
			  {/* Footer ends */}
			  
			  </div>
			  
			  :<div>{this.state.from=='xmr' && this.state.to=='ltc'
				  ?<div>
				
				<Main1 send2={this.getvalue7} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14}  change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19}  changetodoge4={this.changetodoge299} changetodoge41={this.changetodoge21} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc29} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'monero'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'}  value751={'none'} value741={'none'} value738={'none'} value739={'none'} call={this.calltofinal571} value1006={this.hide2}  backtohome={this.home234}/>
				  
				  </div>
				  :<div>{this.state.from=='bnb' && this.state.to=='btc'
          ?<div>
   
          
          <Main1 send2={this.getvalue4} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge26} changetoltc4={this.changetoltc24} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'binancecoin'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'} value71={'none'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal560} value1006={this.hide2} value751={'none'} value739={'none'} value741={'none'} value740={'none'} backtohome={this.home234}/>

          </div>
          :<div>{this.state.from=='dash' && this.state.to=='btc'
          ?<div>
          
          <Main1 send2={this.getvalue10} first66={this.state.value876} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.from_doge} changetoltc={this.from_ltc}  changetodoge4={this.changetodoge26} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'dash'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'block'} call={this.calltofinal_dash1} value1006={this.hide2} value760={'none'} value751={'none'} value739={'none'} value741={'none'} value740={'block'} backtohome={this.home234}/>
          
          </div>
          :<div>{this.state.from=='dash' && this.state.to=='ltc'
          ?<div>
          
          <Main1 send2={this.getvalue11} first66={this.state.value876} changetobch1={this.changetobch13} first66={this.state.value876} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.from_doge} changetobtc={this.from_btc}  changetodoge4={this.changetodoge26} changetoltc4={this.changetoltc24} changetobtc4={this.to_btc} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1} from1={'dash'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal_dash2} value1006={this.hide2} value760={'none'} value751={'none'} value739={'none'} value741={'none'} value740={'block'} backtohome={this.home234}/>
          
          </div>
          :<div>{this.state.from=='bnb' && this.state.to=='ltc'
          ?<div>
      
      <Main1 send2={this.getvalue5} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc148} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'binancecoin'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} value751={'none'} call={this.calltofinal5600} value1006={this.hide2} value739={'none'} value741={'none'} value740={'none'} backtohome={this.home234}/>
          </div>
          :<div>{this.state.from=='doge' && this.state.to=='bnb'
          ?<div>
          error
          </div>
          :<div>{ this.state.from=='xmr' && this.state.to=='bnb'
            ?<div>
            
            </div>
            :<div>{this.state.from=='bch' && this.state.to=='bnb'
				?<div>
				errir
				</div>
				:<div>{this.state.from=='bch' && this.state.to=='ltc'
					?<div>
					 
					 <Main1 send2={this.getvalue9} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19}  changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.to_btc} event1={this.ltcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'bitcoin-cash'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'block'} value738 ={'block'} call={this.calltofinal5610} value1006={this.hide2} value739={'none'} value750={'none'} value751={'none'} value741={'none'} value740={'block'} backtohome={this.home234}/>
					
					</div>
					:<div>{this.state.from=='bch' && this.state.to=='btc'
						?<div>
					
					<Main1 send2={this.getvalue8} first66={this.state.value876} first66={this.state.value876} changetodash1={this.changetodash} changetobch1={this.changetobch13} changetobch2={this.changetobch26}  changetobnb1={this.changetobnb13}  changetobnb2={this.changetobnb14} changetoxmr2={this.changetoxmr2} change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} value10={this.state.value10} value11={this.state.value11} changetoxmr={this.changetoxmr1} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc19} changetodoge4={this.changetodoge2} changetoltc4={this.to_ltc} changetobtc4={this.changetobtc14} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'bitcoin-cash'} to1={'btc'} value74={'block'} value75={'block'} value76={'none'} value71={'none'} value72={'block'} value73={'block'} value738 ={'none'} call={this.calltofinal561} value1006={this.hide2} value739={'none'} value74={'none'} value741={'none'} value750={'none'} value751={'none'} value740={'block'} value738={'block'} backtohome={this.home234}/>
						
						</div>
						:<div>error</div>
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
