export async function seed(knex) {
  await knex('bridges').insert([
    {
      name: 'Auckland Harbour Bridge',
      location: 'Auckland Harbour',
      type: 'Motorway bridge',
      year_built: 1959,
      length_meters: 1020,
      lanes: 8,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/auckland-harbour-bridge.jpg',
    },
    {
      name: 'Grafton Bridge',
      location: 'Grafton Gully',
      type: 'Road bridge',
      year_built: 1910,
      length_meters: 100,
      lanes: 4,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/grafton-bridge.jpg',
    },
    {
      name: 'Jacobs Ladder Bridge',
      location: 'Somewhere',
      type: 'Pedestrian bridge',
      year_built: 2000,
      length_meters: 50,
      lanes: 1,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/jacobs-ladder-bridge.jpg',
    },
    {
      name: 'Māngere Bridge',
      location: 'Māngere',
      type: 'Road bridge',
      year_built: 1965,
      length_meters: 300,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/mangere-bridge.jpg',
    },
    {
      name: 'Newmarket Viaduct',
      location: 'Newmarket',
      type: 'Viaduct',
      year_built: 1980,
      length_meters: 500,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/newmarket-viaduct.jpg',
    },
    {
      name: 'Onehunga Harbour Road Bridge',
      location: 'Onehunga Harbour Road',
      type: 'Road bridge',
      year_built: 1995,
      length_meters: 150,
      lanes: 2,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/onehunga-roadbridge.jpg',
    },
    {
      name: 'Onepoto Bridge',
      location: 'Someplace',
      type: 'Bridge type',
      year_built: 2010,
      length_meters: 80,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/onepoto-bridge.jpg',
    },
    {
      name: 'Panmure Bridge',
      location: 'Panmure',
      type: 'Bridge type',
      year_built: 2005,
      length_meters: 120,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/panmure-bridge.jpg',
    },
    {
      name: 'Tāmaki Bridge',
      location: 'Tāmaki',
      type: 'Bridge type',
      year_built: 2015,
      length_meters: 90,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/tamaki-bridge.jpg',
    },
    {
      name: 'Upper Harbour Bridge',
      location: 'Upper Harbour',
      type: 'Bridge type',
      year_built: 2008,
      length_meters: 200,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/upper-harbour-bridge.jpg',
    },
    {
      name: 'Victoria Park Viaduct',
      location: 'Victoria Park',
      type: 'Viaduct',
      year_built: 1988,
      length_meters: 350,
      added_by_user: 1, <button className="favourites">
      <img src="img/favourite.png" alt="favourite" />
    </button>
      image_url: 'bridgesimg/victoria-park-viaduct.jpg',
    },
    {
      name: 'Westgate Pedestrian and Cycle Bridge',
      location: 'Westgate',
      type: 'Pedestrian and Cycle Bridge',
      year_built: 2018,
      length_meters: 120,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/westgate-bridge.jpg',
    },
    {
      name: 'Wynyard Crossing',
      location: 'Wynyard Quarter',
      type: 'Bascule Bridge',
      year_built: 2012,
      length_meters: 60,
      added_by_user: 1,
      toll_charge: 2.5,
      image_url: 'bridgesimg/wynward-crossing.jpg',
    },
  ])
}
