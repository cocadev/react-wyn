import { data } from "../common/data"

const x_A = -3;
const y_A = -142;

const x_B = -126;
const y_B = 71;

const x_C = 118;
const y_C = 71;

export default class Services {

    // S1 Donut Icon Percentages
    static IndustrySavings(value, total, type) {
        let result = '0'
        //console.log(value + " total: " + total + " " + type + " " + (value / total).toFixed(0))
        if (type === 'order') { result = (value / 14).toFixed(0) }
        else if (type === 'savings') { result = 100-((value / total) * 100).toFixed(0) }
        else if (type === 'budget') { result = (value / 90000).toFixed(0) }
        //console.log("Result: " + result)
        return result
    }

    // S3 response time distance
    static DistanceResponseTimeX(X, Y) {
        return Math.ceil(Math.sqrt(Math.pow(X - x_B, 2) + Math.pow(Y - y_B, 2)))
    }
    // S3 highest quality distance
    static DistanceSeniorityX(X, Y) {
        return Math.ceil(Math.sqrt(Math.pow(X - x_C, 2) + Math.pow(Y - y_C, 2)))
    }
    // S3 loweset cost distance
    static DistanceCostX(X, Y) {
        return Math.ceil(Math.sqrt(Math.pow(X - x_A, 2) + Math.pow(Y - y_A, 2)))
    }


    // S3 response time precent
    static PercentResponseTime(X, Y) {
        let time = Math.ceil(parseFloat(this.DistanceResponseTimeX(X, Y))/246*100)
        if (time > 100) { time = 100 }
        return time
    }
    // S3 highest quality precent
    static PercentSeniority(X, Y) {
        return Math.ceil(parseFloat(this.DistanceSeniorityX(X, Y))/246*100)
    }
    // S3 loweset cost precent
    static PercentCost(X, Y) {
       // console.log("X: " + X + " Y:" + Y + " Response: " + parseFloat((this.DistanceCostX(X, Y) / 142 * 50).toFixed(0)))
        return Math.ceil(parseFloat(this.DistanceCostX(X, Y))/246*100)
    }

    // S3 subroutine to determine the difference rounded to the nearest $10 
    // static RoundToTen(X, Y) {
    //     let z = ((X + Y) / 2).toFixed(0) // average
    //     return parseInt(Math.round(z / 10) * 10) // to nearest 10
    //      // average
    //     return 
    // }

    // S3 Turn the 1-100 integer percentage into a string value used to look up the array
    static ReturnZone(Percentage) {
        if (Percentage <= 20) {    
            return 'lowest'
        } else if (Percentage <= 40) {
            return 'lower'
        } else if (Percentage <= 60) {
            return 'default'
        } else if  (Percentage <= 80) {
            return 'higher'
        } else {
            return 'highest'
        }
    }

    // S3 Generic Range check returns true if min is between min and max inclusive
    static InRange(X, Min, Max) {
        return X >= Min && X <= Max
    }

    

    // // S3 New method to calculate cost
    // static TriangleTradeoffResults(percent_response_time, percent_seniority, percent_cost, industry) {
    //     // #1 Three arrays total for cost, response, seniority. Each has 5 options. 0 is closest, 1 is between 10% and 40%, 2 is 40%-60%, 3 is 60%-90%, 5 is 90%+
    //     let responses_list = data.TRADEOFF_PROPERTIES.response_time_list
    //     // If in retail or government then use slower response times from response_time_list_retail_gov
    //     if (industry in ([0, 4])) {
    //         responses_list = data.TRADEOFF_PROPERTIES.response_time_list_retail_gov
    //     }

    //     // #2 Instantiate array with 5 available costs
    //     let costs_list = [
    //         data.TRADEOFF_INDUSTRIES[industry].min_cost, // 0 lowest
    //         parseInt(Math.round(((data.TRADEOFF_INDUSTRIES[industry].min_cost + data.CALCULATOR_DEFAULTS[industry].order_value) / 2).toFixed(0) / 10) * 10), // diff rounded to $10
    //         data.CALCULATOR_DEFAULTS[industry].order_value,
    //         parseInt(Math.round(((data.TRADEOFF_INDUSTRIES[industry].max_cost + data.CALCULATOR_DEFAULTS[industry].order_value) / 2).toFixed(0) / 10) * 10), // diff rounded to $10,
    //         data.TRADEOFF_INDUSTRIES[industry].max_cost // 5
    //     ]
    //     // #3 
    //     let seniority_list = data.TRADEOFF_PROPERTIES.seniority_list

    //     // console.log("TriangleTradeoffResults: %Time %Seniority", percent_response_time, percent_seniority, percent_cost, industry)
    //     // console.table(responses_list)
    //     // console.table(costs_list)
    //     // console.table(seniority_list)

        
    //     // console.log("(InRange(percent_response_time, 40, 60) && InRange(percent_seniority, 40, 60) && InRange(percent_cost, 40, 60)")

    //     // Divide triangle into 5 zones, set cost from lowest to highest. Eg percent_cost under 20% -> costs_lists[0]
    //     let output_cost = 0;
    //     if (percent_cost <= 20) {    
    //         output_cost = costs_list[0]
    //     } else if (percent_cost <= 40) {
    //         output_cost = costs_list[1] 
    //     } else if (percent_cost <= 60) {
    //         output_cost = costs_list[2] 
    //     } else if  (percent_cost <= 80) {
    //         output_cost = costs_list[3]
    //     } else {
    //         output_cost = costs_list[4]
    //     }

    //     // Divide triangle into 5 zones, set response time from lowest to highest. Eg percent_cost under 20% -> costs_lists[0]
    //     let output_time = 0;
    //     if (percent_response_time <= 20) {    
    //         output_time = responses_list[0]
    //     } else if (percent_response_time <= 40) {
    //         output_time = responses_list[1] 
    //     } else if (percent_response_time <= 60) {
    //         output_time = responses_list[2] 
    //     } else if  (percent_response_time <= 80) {
    //         output_time = responses_list[3]
    //     } else {
    //         output_time = responses_list[4]
    //     }
    //     // console.log("Triangle Seniority: ", percent_seniority)

    //     let output_seniority = '';
    //     if (percent_response_time <= 20) {
    //         // Special case seniority is first available
    //         output_seniority = seniority_list[3]
    //     } else {
    //         if (percent_seniority <= 20) {    
    //             output_seniority = seniority_list[2]
    //         } else if (percent_seniority <= 40) {
    //             output_seniority = seniority_list[2] 
    //         } else if (percent_seniority <= 60) {
    //             output_seniority = seniority_list[1] 
    //         } else if (percent_seniority <= 80) {
    //             output_seniority = seniority_list[0]
    //         } else {
    //             output_seniority = seniority_list[0]
    //         }
    //     }
    //     // console.log("Triangle Results: $Cost HrsText ", output_cost, output_time, output_seniority)


    //     return {output_cost, output_time, output_seniority};
    // }

    // S3 New method to calculate cost
    static TriangleTradeoffs(percent_response_time, percent_seniority, percent_cost, industry) {
        
        //let seniority_list = data.TRADEOFFS_RETAIL
        console.log("TriangleTradeoffs: %Time %Seniority", percent_response_time, percent_seniority, percent_cost, industry)
        // console.table(responses_list)
        // console.table(costs_list)
        // console.table(seniority_list)
       
        // Set cost state to s
        const cost_zone = Services.ReturnZone(percent_cost)
        const seniority_zone = Services.ReturnZone(percent_seniority)
        const response_zone = Services.ReturnZone(percent_response_time)
        console.table('TriangleTradeoffs: Cost:', cost_zone, ' seniority_zone: ', seniority_zone, ' response: ', response_zone)
        // Divide triangle into 5 zones, set response time from lowest to highest. Eg percent_cost under 20% -> costs_lists[0]
        
        //if ((cost_zone === 'default') && (seniority_zone === 'default') && (response_zone === 'default')) {
            

        if (cost_zone === 'lower') { // Cost
            return data.TRADEOFFS_RETAIL.cost_lower
        } else if (cost_zone === 'lowest') { 
            return data.TRADEOFFS_RETAIL.cost_lowest

        } else if (seniority_zone === 'lower') { // Seniority
            return data.TRADEOFFS_RETAIL.seniority_higher
        } else if (seniority_zone === 'lowest') { 
            return data.TRADEOFFS_RETAIL.seniority_highest

        } else if (response_zone === 'lower') { // Delivery
            return data.TRADEOFFS_RETAIL.time_faster
        } else if (response_zone === 'lowest') { 
            return data.TRADEOFFS_RETAIL.time_fastest
        }
        return data.TRADEOFFS_RETAIL.default
    }


    // S3 Average Cost Per Work Order
    static CostPerWorkOrder(X, Y, industry) {
        // console.log ("CostPerWorkOrder:" + X + " Y:" + Y + " industry: " + industry + " max: " + data.TRADEOFF_INDUSTRIES[industry].max_cost + " " + data.TRADEOFF_INDUSTRIES[industry].min_cost)
        let response = parseFloat((this.PercentCost(X, Y) * 0.02 * data.TRADEOFF_INDUSTRIES[industry].max_cost).toFixed(0))
        if (response < data.TRADEOFF_INDUSTRIES[industry].min_cost) {
            return data.TRADEOFF_INDUSTRIES[industry].min_cost
        }
        return response
    }
    // S3 Average Response Time
    static AverageResponseTime(X, Y) {
        return parseFloat((this.PercentResponseTime(X, Y) * 0.02 * 4.5).toFixed(1))
    }
    // S3 Technician Seniority Level
    static TechnicianLevel(X, Y) {
        let value = parseFloat((this.PercentResponseTime(X, Y) * 0.02).toFixed(2))
        let result = 'No Level'
        if (value < 0.9) { result = 'Low-Level Technician' }
        else if (value < 1.4) { result = 'Mid-Level Technician' }
        else { result = 'High-Level Technician' }
        return result
    }


    //S2 savings sub geo
    static SavingsSubGeo() {
        return 5
    }
    //S2 savings sub sites
    static SavingsSubSites(sites) {
        let result = 12
        if (sites === 1) { result = 34 }
        else if (sites < 30) { result = 25 }
        else if (sites < 100) { result = 15 }
        else if (sites < 200) { result = 12 }
        else if (sites < 500) { result = 16 }
        else if (sites < 700) { result = 19 }
        else { result = 12 }
        return result
    }
    //S2 savings dedicated 
    static SavingsSubDedicated(orders, sites) {
        if ((orders / sites) > 500) {
            return 5
        } else {
            return 0
        }
    }
    //S2 savings total
    static SavingsTotal(object) {
        return object.savings_sub_geo + object.savings_sub_sites + object.savings_sub_dedicated
    }

    //S2 Minor output on consolidate orders
    static SavingsConsolidate(orders, sites, geo_cbd, geo_metro, geo_regional) {
        // Dedicated triggers if over 500 per site. Consolidate 30% of CBD orders, 15% of metro, 1% of regional 
        //console.log("SavingsConsolidate: " + orders + " " +  sites  + " geo_cbd: " + geo_cbd + " geo_metro: " + geo_metro + " " +  geo_regional)
        //console.log("Default 10%: " + (orders / sites * 0.1).toFixed(0))
        let consolidation = parseInt((orders / sites * 0.1).toFixed(0))
        if ((orders / sites) > 500) {
            // Start with 10% of orders
            if (geo_cbd > 0) {
                consolidation = consolidation + parseInt((geo_cbd * orders * 0.20 / 100).toFixed(0))
                //console.log("geo_cbd:"+ (orders / sites * 0.2).toFixed(0) )
            }
            if (geo_metro > 0) {
                consolidation = consolidation + (geo_metro * orders * 0.05 / 100).toFixed(0)
                //console.log("geo_metro: " + (geo_metro * orders * 0.05 / 100).toFixed(0))
            }
            if (geo_regional > 0) {
                consolidation = consolidation + (geo_regional * orders * 0.05 / 100).toFixed(0)
               // console.log("geo_regional: " + (geo_regional * orders * 0.02 / 100).toFixed(0))
            }
        }
        return consolidation
    }

    //S2 Minor output on save time
    static SavingsHours(orders, sites, geo_cbd, geo_metro, geo_regional) {
        // Time savings should be text ie "2" hours
        if (orders > 1000) { return "2.5" }
        else if (orders > 100) { return "2"  }
        else { return "1.5"}
    }

    //Dynamically round to nearest $100 or $1000
    static RoundValue(input) {
        const trimmed = input.toFixed(0)
        switch(trimmed.toString().length) {
            case 4:  
            case 5:
                return Math.round((trimmed).toFixed(0)/1000)*1000 // broken don't use yet
            default: return trimmed
        }
    }

}