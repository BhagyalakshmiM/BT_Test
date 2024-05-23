// fetch call made to given URL and return result
// Note: fetch built-in API call returns promise object so async await is been used.
const fetchData = async (URL) => {
    const responsePromise = await fetch(URL);
    const data = await responsePromise.json();
    return data;
}

// main function is called initially to make api call
// waits for the data to call GetConnectionsList to execute the logic on it.
const main = () => {
    const resultData = fetchData("https://my-json-server.typicode.com/marcuzh/router_location_test_api/db");
    resultData.then((result) => {
        GetConnectionsList(result);
    })
    // Logs error if there are any error in fetch or any issue which execution.
    .catch((err) => { console.log(`${err}`)});
}

// this returns final result connections list
function GetConnectionsList(data) {
    // destructured the response from fetch call
    const { locations, routers } = data;
    // Map() data structure makes it easier to store data (set()) in key value pairs and access it using get() function.
    const locationNameMap = new Map();
    locations.forEach(location => {
        locationNameMap.set(location.id,location.name);
    });
    // Set() data structure makes sure there are no dublicates stored in connections.
    const connections = new Set();
    // looping through routers array
    routers.forEach(router => {
      const currentLocation = locationNameMap.get(router.location_id);
      // looping through routers_link array
      router.router_links.forEach(routerLinkId => {
        // find() function returns first element matched in routers array with routerLinkId
        const linkedRouter = routers.find(r => r.id === routerLinkId);
        // getting the linkedLocation using linkedROuter
        const linkedLocation = locationNameMap.get(linkedRouter.location_id);
        // checking if current & linkedLocation are different
        if (currentLocation !== linkedLocation) {
          // the locationNames sorted to make sure Set() can eliminate dublication from final array.
          const connection = [currentLocation, linkedLocation].sort().join(' <-> ');
          connections.add(connection);
        }
      });
    });
    connections.forEach(connection => {
      console.log(connection);
    });
  };

  main();
