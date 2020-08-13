import { images } from "./images";

export const data = {
    SECTION1_HEADER: 'The Facilities Maintenance Revolution',
    SECTION1_DESCRIPTION: 'What’s the financial benefit of modernising your facilities maintenance model by switching to Intact Group’s award-winning integrated building management service? Select your industry to explore the average order size, reactive repair budget, and savings based on our industry research:',

    SECTION2_HEADER1: 'Integrated Building Management',
    SECTION2_HEADER2: 'Savings Calculator',
    SECTION2_BULLET1: 'Eliminate call out fees',
    SECTION2_BULLET2: 'Consolidate work orders',
    SECTION2_BULLET3: 'Don’t pay for unused labour',
    SECTION2_RESULTS: 'Projected Annual Savings',

    SECTION3_HEADER: 'Prioritizing Your Maintenance Goals',
    SECTION3_DESCRIPTION: 'How would you like to achieve your goals? Drag the selector below between cost, time and quality to choose the best fit for your business.',

    S4_EMAIL_OK: 'Your Report Is On It\'s Way',
    S4_EMAIL_OK_BODY: 'The Intact team will be in touch with your report shortly! In the meantime, why not visit <a href="http://intactgroupau.com/">Intactgroupau.com</a> for more information.',
    S4_EMAIL_INVALID: 'Valid Email Required',
    S4_EMAIL_INVALID_BODY: 'Please update your email address and try again.',
    S4_EMAIL_ERROR: 'Dev Build: Under Construction',
    S4_EMAIL_ERROR_BODY: 'Our report feature is almost done! We\'ll reach once this is ready for production. In the meantime, why not visit <a href="http://intactgroupau.com/">Intactgroupau.com</a> for more information.',
    
    SECTION4_HEADER: 'Download Report',
    SECTION4_HEADER2: 'Based On Live Customer Results',
    SECTION4_CUSTOMER_LIST: [
        { title: 'Lululemon', img: images.logo3 },
        { title: 'Apple', img: images.logo2 },
        { title: 'H&M', img: images.logo1 },
        { title: 'Williams Sonoma', img: images.logo4 },
    ],

    // Sector 1 Industry Benchmarks
    BENCHMARKS: [
        {
            id: 0,
            title: 'Retail',
            img: images.retail,
            img_selected: images.retailselected,
            sub_sector: 'Midrange Specialty Retailer',

            maintenance_budget: 420000,
            order_cost: 380,
            savings: 92000,
            percentage: 27,

            before_budget: 420000,
            before_order_cost: 380,
            before_hours: 465,
            after_budget: 420000,
            after_order_cost: '380',
            after_hours: '60 hours',
            savings_diff: 420000,
            //savings_percentage: '380'
            //savings_hours: '60 hours',

            
        },
        {
            id: 1,
            title: 'Commercial',
            img: images.commercial,
            img_selected: images.commercialselected,
            sub_sector: 'Single Building Commercial',
            maintenance_budget: 8000000,
            order_cost: 160,
            savings: 2800000,
            percentage: 12
        },
        {
            id: 2,
            title: 'Health',
            img: images.health,
            img_selected: images.healthselected,
            sub_sector: 'Multi-Site Medical Center',
            maintenance_budget: 600000,
            order_cost: 650,
            savings: 90000,
            percentage: 46
        },
        // {
        //     id: 3,
        //     title: 'Education',
        //     img: images.education,
        //     img_selected: images.educationselected,
        //     sub_sector: 'Tertiary Institution',
        //     maintenance_budget: 0,
        //     order_cost: 0,
        //     savings: 0,
        //     percentage: 0
        // },
        {
            id: 3,
            title: 'Government',
            img: images.government,
            img_selected: images.governmentselected,
            sub_sector: 'Local Council',
            maintenance_budget: 540000,
            order_cost: 1200,
            savings: 97000,
            percentage: 85
        },
    ],

    // Sector 2 calculator defaults
    CALCULATOR_DEFAULTS: [
        {
            id: 0,
            title: 'Retail',
            orders: 1100,
            sites: 36,
            square_meterage: 0,
            order_value: 296,
            sites_slider_25: 10, // Max sites slider is customised to each industry
            sites_slider_50: 100,
            sites_slider_75: 500,
            sites_slider_max: 900
        },
        {
            id: 1,
            title: 'Government',
            orders: 3200,
            sites: 85,
            square_meterage: 0,
            order_value: 984,
            sites_slider_25: 10, // Max sites slider is customised to each industry
            sites_slider_50: 100,
            sites_slider_75: 500,
            sites_slider_max: 700
        },
        {
            id: 2,
            title: 'Commercial',
            orders: 20000,
            sites: 8,
            square_meterage: 0,
            order_value: 104,
            sites_slider_25: 7, // Max sites slider is customised to each industry
            sites_slider_50: 15,
            sites_slider_75: 23,
            sites_slider_max: 30
        },
        {
            id: 3,
            title: 'Health',
            orders: 1000,
            sites: 15,
            square_meterage: 0,
            order_value: 553,
            sites_slider_25: 7, // Max sites slider is customised to each industry
            sites_slider_50: 15,
            sites_slider_75: 23,
            sites_slider_max: 30
        },
        {
            id: 4,
            title: 'Education',
            orders: 0,
            sites: 0,
            square_meterage: 0,
            order_value: 0,
            max_sites: 0,
            sites_slider_25: 7, // Max sites slider is customised to each industry
            sites_slider_50: 15,
            sites_slider_75: 23,
            sites_slider_max: 30
        },
    ],

    // Sector 3 tradeoffs calculator initial values
    TRADEOFF_PROPERTIES: {

        // Tradeoff summary
        tradeoffs_list: { 0: "Equal Priority", 1: "Reduce Costs", 2: "Quality Worksmanship", 3: "Rapid Response" },
        tradeoff: 0,

        // Seniority
        seniority_list: { 0: "Apprentice", 1: "Mid-Level", 2: "Senior", 3: "First Available" },
        seniority: 1,

        // Response time. Specific response set for retail, goverment vs all others
        response_time_list: { 0: "1 hour", 1: "2 hours", 2: "4-8 hours", 3: "24-48 hours", 4: "5-10 days" },
        response_time_list_retail_gov: { 0: "2 hours", 1: "4 hours", 2: "8 hours", 3: "24 hours", 4: "24 hours" },
        response_time: 1
    },

    TRADEOFFS_RETAIL: {
        default:            [350, '24 hours', 'Mid-Level'], 
        cost_lowest:        [140, '10 days', 'Apprentice'],
        cost_lower:         [350, '24 hours', 'Mid-Level'], 
        time_faster:        [380, '2 hours', 'Senior'],
        time_fastest:        [350, '4 hours', 'First Available'],
        seniority_higher:   [470, '4 hours', 'Midlevel+'],
        seniority_highest:  [600, '4 hours', 'Senior']
    },

    // Sector 3 tradeoffs specific to an industry, eg calculator cost ranges
    // TODO: Start by giving all industries the same results ie[id=0] and can apply individual to industry later 
    TRADEOFF_INDUSTRIES: [
        {
            id: 0, // Retail
            min_cost: 140,
            max_cost: 600
        },
        {
            id: 1, // Government 
            min_cost: 240,
            max_cost: 600
        },
        {
            id: 2, // Commercial 
            min_cost: 140,
            max_cost: 1200 //TODO
        },
        {
            id: 3, //Health
            min_cost: 400,
            max_cost: 1200 //TODO
        },
        {
            id: 4, //Education
            min_cost: 0,
            max_cost: 0 //TOD   
        },
        {
            id: 5, // Aged Care
            min_cost: 0,
            max_cost: 0 //TODO      
        }
    ]
}