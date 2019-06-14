import React from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
            meat:1.3,
            cheese: 0.5,
            bacon: 0.4,
            salad: 0.3
}

class BurgerBuilder extends React.Component{

    state = {
        ingredients: {
            meat:0,
            cheese: 0,
            bacon: 0,
            salad: 0

        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false 
        
    }
    updatePurchaseState = (updatedprice) => {
        if(this.state.totalPrice < updatedprice) {  this.setState({
            purchaseable: true  
        })} else {
            this.setState({
                purchaseable: false  
            })
        }      
    }    
    
    purchasehandler = () =>{
        this.setState({
            purchasing: true
        })
    }

    addIngredienthandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;

        const updatedIngredients = {
            ...this.state.ingredients 
        }

        updatedIngredients[type] = updatedCount;

        let updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })

        this.updatePurchaseState(updatedPrice);
    }

    removeIngredienthandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateIngredients = {
            ...this.state.ingredients
        }

        let updatedPrice = this.state.totalPrice;

        if( updateIngredients[type] > 0) {
            updateIngredients[type] = oldCount - 1;  
            updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        }

        this.setState({
            ingredients: updateIngredients,
            totalPrice: updatedPrice
        })

        this.updatePurchaseState(updatedPrice);
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Aux>

                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredienthandler}
                ingredientRemoved={this.removeIngredienthandler}
                price={this.state.totalPrice}
                disabledInfo={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered={this.purchasehandler}
                />
            </Aux>
        );
    }
} 

export default BurgerBuilder;