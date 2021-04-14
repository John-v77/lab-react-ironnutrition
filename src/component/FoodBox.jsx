import React from 'react';

function FoodBox(props) {

    const addToMenu = (e) => {
        e.preventDefault()
        console.log('click')
        const foodToAdd = {
            name:props.name,
            calories:props.calories,
            image:props.image,
            qty:1
        }

        let todayMenu = [...props.todayFood]
        todayMenu.unshift(foodToAdd)
        props.setTodayFood(todayMenu)
    }

    return (
        <div className="box">
         <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={props.image} alt='dishes' />
              </figure>
            </div>

            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{props.name}</strong> <br/>
                        <small>{props.calories} cal</small>
                    </p>
                </div>    
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                        <button onclick={addToMenu} className="button is-info"> + </button>
                    </div>
                </div>
            </div>
         </article>   
        </div>
    );
}

export default FoodBox;