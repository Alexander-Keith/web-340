/*
===========================================
; Title:  team.js
; Author: Alexander Keith
; Date:   6/9/2023
; Description: team.js file for Assignment 3.2 – Node's Module System
;==========================================
*/

"use strict";

// Team class with three properties
class Team {
    constructor(name, mascot, playerCount) {
      this.name = name;
      this.mascot = mascot;
      this.playerCount = playerCount;
    }
}  

// Exports the Team class
module.exports = Team;