export async function seed(knex) {
  await knex('bridges').insert([
    {
      name: 'Auckland Harbour Bridge',
      location: 'Auckland Harbour',
      type: 'Motorway bridge',
      year_built: 1959,
      length_meters: 1960,
      lanes: 8,
      added_by_user: 1,

      toll_charge: 4.1,   
      busyness: 100,
      origin: '-36.82067236081737,174.75008944247077',
      destination: '-36.8370245326167,174.74172861970737',
      image_url: 'auckland-harbour-bridge.jpg',


    },
    {
      name: 'Grafton Bridge',
      location: 'Grafton Gully',
      type: 'Road bridge',
      year_built: 1910,
      length_meters: 100,
      lanes: 4,
      added_by_user: 1,

      toll_charge: 3.2,
      busyness: 40,
      origin: '-36.85847087135433,174.7636892283512',
      destination: '-36.86033028619136,174.76682777998548',
      image_url: 'grafton-bridge.jpg',

    },
    {
      name: 'Jacobs Ladder Bridge',
      location: 'Somewhere',
      type: 'Pedestrian bridge',
      year_built: 2000,
      length_meters: 50,
      added_by_user: 1,
      toll_charge: 2.5,

      busyness: 3,
      image_url: 'jacobs-ladder-bridge.jpg',

    },
    {
      name: 'Māngere Bridge',
      location: 'Māngere',
      type: 'Road bridge',
      year_built: 1965,
      length_meters: 300,
      lanes: 3,
      added_by_user: 1,

      toll_charge: 2.2,
      busyness: 14,
      origin: '-36.93607851977716,174.78922500539352',
      destination: '-36.930275971075915,174.78519148256817',
      image_url: 'mangere-bridge.jpg',

    },
    {
      name: 'Newmarket Viaduct',
      location: 'Newmarket',
      lanes: 6,
      type: 'Viaduct',
      year_built: 1980,
      length_meters: 500,
      added_by_user: 1,
      toll_charge: 2.5,

      busyness: 60,
      origin: '-36.87013981482671,174.77190593112167',
      destination: '-36.87710595823875,174.7819763801974',
      image_url: 'newmarket-viaduct.jpg',


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

      busyness: 5,
      origin: '-36.93607851977716,174.78922500539352',
      destination: '-36.930275971075915,174.78519148256817',
      image_url: 'onehunga-roadbridge.jpg',

    },
    {
      name: 'Onepoto Bridge',
      location: 'Someplace',
      type: 'Bridge type',
      year_built: 2010,
      length_meters: 80,
      added_by_user: 1,
      toll_charge: 2.5,

      busyness: 25,
      image_url: 'onepoto-bridge.jpg',

    },
    {
      name: 'Panmure Bridge',
      location: 'Panmure',
      type: 'Bridge type',
      year_built: 2005,
      lanes: 3,
      length_meters: 120,
      added_by_user: 1,
      toll_charge: 2.5,

      busyness: 25,
      origin: '-36.90968837529957,174.8595350733492',
      destination: 'd -36.907143030552554,174.85724335816198',
      image_url: 'panmure-bridge.jpg',

    },
    {
      name: 'Waipuna Bridge',
      location: 'Tāmaki',
      lanes: 3,
      type: 'Bridge type',
      year_built: 2015,
      length_meters: 90,
      added_by_user: 1,
      toll_charge: 2.5,

      busyness: 25,
      origin: '-36.91325719068416,174.8614666430839',
      destination: '-36.91114861321223,174.8549395686055',
      image_url: 'tamaki-bridge.jpg',

    },
    {
      name: 'Upper Harbour Bridge',
      location: 'Upper Harbour',
      type: 'Bridge type',
      lanes: 5,
      year_built: 2008,
      length_meters: 200,
      added_by_user: 1,
      toll_charge: 2.5,

      busyness: 45,
      origin: '-36.788140726177694,174.65904809049823',
      destination: '-36.78387397864176,174.6717828672585',
      image_url: 'upper-harbour-bridge.jpg',

    },
    {
      name: 'Victoria Park Viaduct',
      location: 'Victoria Park',
      type: 'Viaduct',
      year_built: 1988,
      length_meters: 350,
      lanes: 4,
      added_by_user: 1,

      toll_charge: 2.5,
      busyness: 17,
      origin: '-36.8450942936357,174.75266608058828',
      destination: '-36.84948040167459,174.7535174154923',
      image_url: 'victoria-park-viaduct.jpg',


    },
    {
      name: 'Westgate Pedestrian and Cycle Bridge',
      location: 'Westgate',
      type: 'Pedestrian and Cycle Bridge',
      year_built: 2018,
      length_meters: 120,
      added_by_user: 1,
      toll_charge: 2.5,

      busyness: 11,
      image_url: 'westgate-bridge.jpg',

    },
    {
      name: 'Wynyard Crossing',
      location: 'Wynyard Quarter',
      type: 'Bascule Bridge',
      year_built: 2012,
      length_meters: 60,
      added_by_user: 1,
      toll_charge: 2.5,

      image_url: '../public/bridgesimg/wynward-crossing.jpg',
      busyness: 4,
      image_url: 'wynward-crossing.jpg',

    },
  ])
}
