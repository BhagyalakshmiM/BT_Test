import { getLocationLinks } from "./getConnections.js";

// JSON object can be added here
const data1 = {
    "routers": [
        {
            "id": 1,
            "name": "alpha-01",
            "location_id": 1,
            "router_links": [2]
        },
        {
            "id": 2,
            "name": "alpha-02",
            "location_id": 2,
            "router_links": [1, 3]
        },
        {
            "id": 3,
            "name": "beta-01",
            "location_id": 3,
            "router_links": [2, 4]
        },
        {
            "id": 4,
            "name": "beta-02",
            "location_id": 4,
            "router_links": [3, 5]
        },
        {
            "id": 5,
            "name": "gamma-01",
            "location_id": 5,
            "router_links": [4]
        }
    ],
    "locations": [
        {
            "id": 1,
            "postcode": "AB12 3CD",
            "name": "Aberdeen Art Gallery"
        },
        {
            "id": 2,
            "postcode": "AB12 4EF",
            "name": "Duthie Park"
        },
        {
            "id": 3,
            "postcode": "AB12 5GH",
            "name": "Marischal College"
        },
        {
            "id": 4,
            "postcode": "AB12 6IJ",
            "name": "Codonas Amusement Park"
        },
        {
            "id": 5,
            "postcode": "AB12 7KL",
            "name": "King's College Chapel"
        }
    ]
};

const data2 = {
    "routers": [
        {
            "id": 1,
            "name": "xenon-01",
            "location_id": 1,
            "router_links": [2, 3]
        },
        {
            "id": 2,
            "name": "xenon-02",
            "location_id": 2,
            "router_links": [1, 4]
        },
        {
            "id": 3,
            "name": "krypton-01",
            "location_id": 3,
            "router_links": [1]
        },
        {
            "id": 4,
            "name": "krypton-02",
            "location_id": 4,
            "router_links": [2, 5]
        },
        {
            "id": 5,
            "name": "argon-01",
            "location_id": 5,
            "router_links": [4, 6]
        },
        {
            "id": 6,
            "name": "argon-02",
            "location_id": 6,
            "router_links": [5]
        }
    ],
    "locations": [
        {
            "id": 1,
            "postcode": "G12 8QQ",
            "name": "University of Glasgow"
        },
        {
            "id": 2,
            "postcode": "G12 9AA",
            "name": "Kelvingrove Art Gallery"
        },
        {
            "id": 3,
            "postcode": "G13 0AA",
            "name": "Botanic Gardens"
        },
        {
            "id": 4,
            "postcode": "G13 1AA",
            "name": "Riverside Museum"
        },
        {
            "id": 5,
            "postcode": "G14 2AA",
            "name": "Glasgow Science Centre"
        },
        {
            "id": 6,
            "postcode": "G14 3AA",
            "name": "The SSE Hydro"
        }
    ]
}

const data3 = {
    "routers": [
        {
            "id": 1,
            "name": "omega-01",
            "location_id": 1,
            "router_links": [2, 3]
        },
        {
            "id": 2,
            "name": "omega-02",
            "location_id": 2,
            "router_links": [1, 4]
        },
        {
            "id": 3,
            "name": "theta-01",
            "location_id": 3,
            "router_links": [1]
        },
        {
            "id": 4,
            "name": "theta-02",
            "location_id": 4,
            "router_links": [2, 5]
        },
        {
            "id": 5,
            "name": "sigma-01",
            "location_id": 5,
            "router_links": [4]
        }
    ],
    "locations": [
        {
            "id": 1,
            "postcode": "EH1 1BB",
            "name": "Edinburgh Castle"
        },
        {
            "id": 2,
            "postcode": "EH1 2CC",
            "name": "Royal Mile"
        },
        {
            "id": 3,
            "postcode": "EH1 3DD",
            "name": "Holyrood Palace"
        },
        {
            "id": 4,
            "postcode": "EH1 4EE",
            "name": "Arthur's Seat"
        },
        {
            "id": 5,
            "postcode": "EH1 5FF",
            "name": "National Museum of Scotland"
        }
    ]
}

const data4 = {
    "routers": [
        {
            "id": 1,
            "name": "hub-01",
            "location_id": 1,
            "router_links": [2, 3]
        },
        {
            "id": 2,
            "name": "node-01",
            "location_id": 2,
            "router_links": [1, 4]
        },
        {
            "id": 3,
            "name": "node-02",
            "location_id": 3,
            "router_links": [1, 5]
        },
        {
            "id": 4,
            "name": "ext-01",
            "location_id": 4,
            "router_links": [2]
        },
        {
            "id": 5,
            "name": "ext-02",
            "location_id": 5,
            "router_links": [3]
        }
    ],
    "locations": [
        {
            "id": 1,
            "postcode": "M1 1AD",
            "name": "Manchester Town Hall"
        },
        {
            "id": 2,
            "postcode": "M1 2BD",
            "name": "Manchester Museum"
        },
        {
            "id": 3,
            "postcode": "M1 3CD",
            "name": "The John Rylands Library"
        },
        {
            "id": 4,
            "postcode": "M1 4DE",
            "name": "Manchester Cathedral"
        },
        {
            "id": 5,
            "postcode": "M1 5EF",
            "name": "Museum of Science and Industry"
        }
    ]
}

// if new data added modify the array accordingly
const dataArr = [data1, data2, data3, data4];

// Testing the logic with sample data
dataArr.forEach((data, index) => {
    console.log(`Test: ${index}`);
    getLocationLinks(data);
})