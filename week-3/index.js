/*
===========================================
; Title:  index.js
; Author: Alexander Keith
; Date:   6/9/2023
; Description: index.js file for Assignment 3.2 – Node's Module System
;==========================================
*/

'use strict';

// Import TeamManager module
const TeamManager = require('./team-manager.js');

// Get array of teams
const teams = TeamManager.getTeams();

// Display array of team objects
console.log("-- DISPLAYING TEAMS --");
teams.forEach(team => {
  console.log(TeamManager.displayTeam(team));
});
console.log();

// Get specific team by name
const team1 = TeamManager.getTeam('Alabama');
const team3 = TeamManager.getTeam('Georgia');

// Display single team objects
console.log("-- DISPLAYING A SINGLE TEAM --");
console.log(TeamManager.displayTeam(team1));
console.log();
console.log("-- DISPLAYING A SINGLE TEAM --");
console.log(TeamManager.displayTeam(team3));