
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
        {
          id: 1000000,
          landlord_id: 1000000,
          street: '2315 Brunswick St',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: 1000,
          deposit_amount:
          available_date: '2018/03/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: 49.264254,
          lng: -123.097665
        },
        {
          id: 1000001,
          landlord_id: 1000000,
          street: 'Mount Pleasant',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: 1000,
          deposit_amount:
          available_date: '2018/03/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lng: -123.104124,
          lat: 49.266416
        },
        {
          id: 1000002,
          landlord_id: 1000001,
          street: 'Downtown Vancouver',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: 1000,
          deposit_amount:
          available_date: '2018/01/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lng: -123.117943,
          lat: 49.278747
        },
        {
          id: 1000003,
          landlord_id: 1000002,
          street: 'EB Beach Ave FS Hornby St',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: 1000,
          deposit_amount:
          available_date: '2018/01/15',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lng: -123.132362,
          lat: 49.275147
        },
        {
          id: 1000004,
          landlord_id: 1000002,
          street: '128 west hastings st',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: 1000,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: 49.28184419999999,
          lng: -123.10816169999998
        },
        {
          id: 1000005,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000006,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000007,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000008,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000009,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000010,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000011,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000012,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000013,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000014,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000015,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000016,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000017,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000018,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000019,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000020,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000021,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000022,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000023,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000024,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000025,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000026,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000027,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000028,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000029,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000030,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000031,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000032,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000033,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000034,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000035,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000036,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000037,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000038,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000039,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000040,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000041,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000042,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000043,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000044,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000045,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000046,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000047,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000048,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000049,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000050,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000051,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000052,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000053,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000054,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000055,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000056,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000057,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000058,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000059,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          id: 1000060,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
        {
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000063,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000064,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000065,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000066,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000067,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000068,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000069,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000070,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000071,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000072,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000074,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000075,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        }
        ,
          id: 1000076,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000077,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000078,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000079,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000080,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000081,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000082,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000083,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000084,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000085,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000086,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000087,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000088,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000089,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000090,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000091,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000092,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000093,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000094,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000095,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000096,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000097,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000098,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000099,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        },
          id: 1000100,
          landlord_id: ,
          street: '',
          city: 'Vancouver',
          pet_friendly:
          rent_amount: ,
          deposit_amount:
          available_date: '2018/02/01',
          water:
          eletricity:
          internet:
          heat:
          natural_gas:
          storage:
          laundry_on_site:
          furniture:
          parking:
          details:
          lat: ,
          lng:
        }
      ])
    });
};
