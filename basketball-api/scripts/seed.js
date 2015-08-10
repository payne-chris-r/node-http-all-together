var async = require('async');
var Team = require('../lib/team');
var mongoose = require('mongoose');


async.series([
  // first we clear the database of teams. Remeber, this is done ASYNCHRONOUSLY
  function(done){
    Team.remove({}, done);
  },
  // next, we add the all of the teams.
  function(done){
    async.parallel([
      function(done){
        Team.create({
          name: 'Cavaliers',
          city: 'Cleveland',
          players: [
            {
              name: 'Lebron James',
              position: 'SF',
              jerseyNumber: 23
            },
            {
              name: 'Kyrie Irving',
              position: 'PG',
              jerseyNumber: 2
            },
            {
              name: 'Timothy Mozgov',
              position: 'C',
              jerseyNumber: 20
            },
            {
              name: 'Tristan Thompson',
              position: 'PF',
              jerseyNumber: 13
            },
            {
              name: 'J.R. Smith',
              position: 'SG',
              jerseyNumber: 5
            }
          ]
        }, done);
      },
      function(done){
        Team.create({
          name: 'Warriors',
          city: 'Golden State',
          players: [
            {
              name: 'Stephen Curry',
              position: 'PG',
              jerseyNumber: 30
            },
            {
              name: 'Klay Thompson',
              position: 'SG',
              jerseyNumber: 11
            },
            {
              name: 'Draymond Green',
              position: 'PF',
              jerseyNumber: 23
            },
            {
              name: 'Andrew Bogut',
              position: 'C',
              jerseyNumber: 13
            },
            {
              name: 'Harrison Barnes',
              position: 'SF',
              jerseyNumber: 40
            }
          ]
        }, done);
      },
    ], function(err, results){
      done();
    });
  }
], function(err, results){
  mongoose.disconnect();
});