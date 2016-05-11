/*
This is empty on purpose! Your code to build the resume will go here.
 */
var role = "Entry level programmer";
var name = "Dan";
var email = "danielfrank1015@gmail.com";
var welcomeMsg = "Welcome!";
var skills = ["Skills: ", "Java, ", "XML, ", "Python."];

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", email);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
var formattedSkillsStart = HTMLskillsStart.replace("%data%", "Skills: ");




var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contact" : formattedContact,
	"welcome" : formattedWelcome,
	"skillsStart" : formattedSkillsStart
};


$("#header").prepend(bio.welcome);
$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.skillsStart);
$("#main").append(bio.contact);
