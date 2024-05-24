// fetch call makes API call and return result.
// Note: fetch built-in API call returns promise object so async await is been used.
const fetchData = async (URL) => {
  const responsePromise = await fetch(URL);
  const data = await responsePromise.json();
  return data;
}

/* main function is called initially to make api call
   waits for the data to return to invoke GetLocationLinks to execute the logic. */
const main = () => {
  const resultData = fetchData("https://my-json-server.typicode.com/marcuzh/router_location_test_api/db");
  resultData.then((result) => {
    // checking if result has data or empty object
    Object.keys({ result }).length === 0 ? console.log('No data available') : GetLocationLinks(result);
  })
    // Logs error if there are any error in fetch or any issue which execution.
    .catch((err) => { console.log(`ERROR!!! --> ${err}`) });
}

// GetLocationLinks function executed the logic and returns final result locationLinks list
const GetLocationLinks = (data) => {
  // destructured the response from fetch call
  const { locations, routers } = data;
  /* Creating new object to store location id & name as key value pairs,
  to avoid loop through location list objects to get location name from id. */
  const locIdNameObj = {};
  locations.forEach(location => {
    locIdNameObj[location.id] = location.name;
  });
  const locationLinks = [];
  // looping through routers array
  routers.forEach(router => {
    const currentLocation = locIdNameObj[router.location_id];
    // looping through routers_link array
    router.router_links.forEach(id => {
      // find() function returns first element id matched in routers array with router_links id.
      const linkedRouter = routers.find(r => r.id === id);
      // getting the linkedLocation using linkedRouter
      const linkedLocation = locIdNameObj[linkedRouter.location_id];
      // checking if current & linkedLocation are different
      if (currentLocation !== linkedLocation) {
        // the locations are sorted and joined with <->, sorted so that the duplicated could be removed using Set()
        const locationLink = [currentLocation, linkedLocation].sort().join(' <-> ');
        locationLinks.push(locationLink);
      }
    });
  });
  // Set() is used to eliminate duplicate elements from final array
  [...new Set(locationLinks)].forEach(locationLink => {
    console.log(locationLink);
  });
};

// This is the root function call to start the execution.
main();