import { data } from "../common/data"
import Services from './service';

export default class Functions {
  static CALC = (object, type, value) => {
    //console.log("Pre-CALC Type:" + type + " Value:" + value + "Object:" + JSON.stringify(object, null, 2))
    // Set new input
    switch (type) {
      case 'industry':
        //Set new industry. Recalculate order value and budget. Keep orders, sites and breakdown as previously set
        object.industry = value;
        object.orders = data.CALCULATOR_DEFAULTS[value].orders
        object.sites = data.CALCULATOR_DEFAULTS[value].sites
        break;

      case 'orders':
        object.orders = value.toFixed(0);
        break;

      case 'sites':
        object.sites = value.toFixed(0);
        break;

      case 'cbd':
        object.geo_cbd = value;
        break;

      case 'metro':
        object.geo_metro = value;
        break;

      case 'regional':
        object.geo_regional = value;
        break;

      case 'triangle':

        let layerX = value.layerX.toFixed(0)
        let layerY = value.layerY.toFixed(0)

        object.positionX = layerX;
        object.positionY = layerY;

        object.distance_response_time_x = Services.DistanceResponseTimeX(layerX, layerY);
        object.distance_seniority_x = Services.DistanceSeniorityX(layerX, layerY);
        object.distance_cost_x = Services.DistanceCostX(layerX, layerY);

        object.percent_response_time = Services.PercentResponseTime(layerX, layerY);
        object.percent_seniority = Services.PercentSeniority(layerX, layerY);
        object.percent_cost = Services.PercentCost(layerX, layerY);

        const triangle_outputs = Services.TriangleTradeoffs(object.percent_response_time, object.percent_seniority, object.percent_cost, object.industry)
        object.cost_per_work_order = triangle_outputs[0]
        object.average_response_time = triangle_outputs[1]
        object.technician_level = triangle_outputs[2]
        break;

      case 'email':
          object.email = value;
          break;
      case 'phone':
        object.phone = value;
        break;

      default:
        break;

    }

    // Generic calculate savings and outputs 
    object.order_value_old = (data.BENCHMARKS[object.industry].order_cost).toFixed(0)
    object.budget_old =  Math.round((data.BENCHMARKS[object.industry].order_cost * object.orders).toFixed(0)/1000)*1000 // Round to nearest $1000
    
    // Recalculate savings
    object.savings_sub_geo = Services.SavingsSubGeo(); //Todo pass object and calc geo boostsd
    object.savings_sub_sites = Services.SavingsSubSites(object.sites)
    object.savings_sub_dedicated = Services.SavingsSubDedicated(object.orders, object.sites)
    object.savings_percentage = Services.SavingsTotal(object)

    // Calculate new order value, budget, 
    object.budget_new = Math.round((object.budget_old * (1 - (object.savings_percentage * 0.01))).toFixed(0)/1000)*1000 // Round to nearest $1000
    object.order_value_new = (object.budget_new / object.orders).toFixed(0)

    object.savings_dollars = object.budget_old - object.budget_new        
    // Update sub outputs for savings, consolidation and response times

    object.order_value_new = parseFloat((object.order_value_old * (1 - object.savings_percentage / 100)).toFixed(0))

    //console.log("POST-CALC Type:" + type + " Value:" + value + "Object:" + JSON.stringify(object, null, 2))
    return object
  }
}
