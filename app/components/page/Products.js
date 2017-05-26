/**
 * Created by Eliteimac3 on 26/05/2017.
 */
var React = require('react');
var PremiumInfantFormula = require('./PremiumInfantFormula');
var PremiumFollowOnFormula = require('./PremiumFollowOnFormula');
var PremiumToddlerNutritious = require('./PremiumToddlerNutritious');
var InstantFullCreamMilkPowder = require('./InstantFullCreamMilkPowder');
var NutritionalFormulaChildren = require('./NutritionalFormulaChildren');
var NutritionalFormulaPregnant = require('./NutritionalFormulaPregnant');
var NutritionalFormulaElderly = require('./NutritionalFormulaElderly');

class ProductDetail extends React.Component {
    
    render() {
        var productId = this.props.match.params.id;
        return (
            <div>
                <h1>This Product Detail</h1>
                {productId == 1 &&
                    <PremiumInfantFormula/>
                }
                {productId == 2 &&
                <PremiumFollowOnFormula/>
                }

                {productId == 3 &&
                <PremiumToddlerNutritious/>
                }
                {productId == 4 &&
                <InstantFullCreamMilkPowder/>
                }
                {productId == 5 &&
                <NutritionalFormulaChildren/>
                }
                {productId == 6 &&
                <NutritionalFormulaPregnant/>
                }

                {productId == 7 &&
                <NutritionalFormulaElderly/>
                }







            </div>
        )
    }
}

module.exports = ProductDetail;