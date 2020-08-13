
// this value is non-editable static value.
// this value is default value of 'calculator' in App.js
export const CALCULATOR = {
  industry: 0,

  sites: 0,
  orders: 0,
  square_meterage: 0,
  bool_use_sites: false,
  geo_cbd: 0.6,
  geo_metro: 0.4,
  geo_regional: 0,

  // Savings are calculated individually and added together to create savings_total
  savings_sub_sites: 0,
  savings_sub_geo: 0,
  savings_sub_dedicated: 0,

  // // Outputs
  savings_percentage: 0,
  savings_dollars: 0,
  budget_old: 0,
  budget_new: 0,
  //consolidated_orders: 0,
  //response_time: 0,

  positionX: 0,
  positionY: 0,

  // // INPUTS Triangle raw X/Y inputs used to calculate percentages
  distance_response_time_x: 142,
  distance_seniority_x: 142,
  distance_cost_x: 142,

  // // TODO Decision to use this or move across?
  // // Triangle percentages (centre = 50)
  percent_response_time: 50,
  percent_seniority: 50,
  percent_cost: 50,

  // //Output
  cost_per_work_order: 296,
  average_response_time: '8 hours',
  technician_level: 'Mid-Level',
  email: '',
  phone: ''
}