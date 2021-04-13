import React, {useState} from 'react';
import foodsJson from '../foods.json';
import 'bulma/css/bulma.css';
function FoodBox(props) {

    let [foods, setFoods] = useState(foodsJson)
    
    const displayFood = () => {

        return foods.map(each => {
            return(
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={each.image} alt="food pics" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                        <strong>{each.name}</strong> <br />
                                        <small>{each.calories} cal</small>
                                        </p>
                                    </div>
                                </div>
                                    <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input className="input" type="number" value="1" />
                                        </div>
                                        
                                        <div className="control">
                                            <button className="button is-info">+</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                         </div>
                )
        })
    }

    return (
        <>
        {displayFood()}
        </>
    );
}

export default FoodBox;