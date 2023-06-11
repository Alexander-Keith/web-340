/*
===========================================
; Title:  team.js
; Author: Alexander Keith
; Date:   6/9/2023
; Description: team-manager.js file for Assignment 3.2 – Node's Module System
;==========================================
*/

'use strict';

// Define Team class
const Team = require('./team.js');

// Array of five team objects
const teams = [
    new Team('Alabama', 'Crimson Tide', '54'),
    new Team('LSU', 'Tigers', '54'),
    new Team('Georgia', 'Bulldogs', '54'),
    new Team('Texas', 'Longhorns', '54'),
    new Team('USC', 'Trojans', '54')
];

// Function to get array of teams
function getTeams() {
    return teams;
}

// Function to get specific team by name
function getTeam(name) {
    return teams.find(team => team.name === name);
}

// Function to display team information
function displayTeam(team) {
    return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: " + team.playerCount + '\n';
}

// Exports the Team class and functions
module.exports = {
    getTeams,
    getTeam,
    displayTeam
};