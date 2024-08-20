import React, {Component} from 'react';
import './Burger.css';

export default class Burger extends Component{

    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }

    addRem = (action, ingredients)=>{

        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;

        switch(ingredients){
            case 'lettuce' : {
                stateValue = lettuce;
                break;
            }
            case 'tomato' : {
                stateValue = tomato;
                break;
            }
            case 'cheese' : {
                stateValue = cheese;
                break;
            }
            case 'meat' : {
                stateValue = meat;
                break;
            }
            default: break;
        }

        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        
        this.setState({
            [ingredients]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = ()=>{

        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let burger = [];

        // Outputing the lettuce
        for(let i = 0; i<lettuce; i++){
            burger.push(<div key={`lettuce-${i}`} className='lettuceSide'></div>);
        }
        // Outputing the tomato
        for(let i = 0; i<tomato; i++){
            burger.push(<div key={`tomato-${i}`} className='tomatoSide'></div>);
        }
        // Outputing the cheese
        for(let i = 0; i<cheese; i++){
            burger.push(<div key={`cheese-${i}`} className='cheeseSide'></div>);
        }
        // Outputing the meat
        for(let i = 0; i<meat; i++){
            burger.push(<div key={`meat-${i}`} className='meatSide'></div>);
        }
        return burger;



    }
    render() {
        return ( 
            <>
                <div className='burgerIngradients'>
                    <div className='topSide'></div>
                    {this.burgerContent()}
                    <div className='bottomSide'></div>
                </div>

                <div className='IngradientsBlock'>
                {/*  */}
                <p>Cheese</p>
                <div className="ingBtns">
                    <button onClick={()=> this.addRem('add', 'cheese')} className='intSingleBtn'>Add</button>
                    <button onClick={()=> this.addRem('remove', 'cheese')} className='intSingleBtn'>Remove</button>
                </div>

                <p>Lettuce</p>
                <div className="ingBtns">
                    <button onClick={()=> this.addRem('add', 'lettuce')} className='intSingleBtn'>Add</button>
                    <button onClick={()=> this.addRem('remove', 'lettuce')} className='intSingleBtn'>Remove</button>
                </div>

                <p>Meat</p>
                <div className="ingBtns">
                    <button onClick={()=> this.addRem('add', 'meat')} className='intSingleBtn'>Add</button>
                    <button onClick={()=> this.addRem('remove', 'meat')} className='intSingleBtn'>Remove</button>
                </div>
                
                <p>Tomato</p>
                <div className="ingBtns">
                    <button onClick={()=> this.addRem('add', 'tomato')} className='intSingleBtn'>Add</button>
                    <button onClick={()=> this.addRem('remove', 'tomato')} className='intSingleBtn'>Remove</button>
                </div>
                {/*  */}
                </div>
            </>
        );
    }
}