/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", "Kenrick Chan");
 var formattedRole = HTMLheaderRole.replace("%data%", "Junior Web Developer");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var bio = {
 	"name" : "Kenrick Chan",
 	"role" : "Junior Web Developer",
 	"contact" : {
 		"number" : "646-642-8266",
 		"email" : "kenrick.chan@outlook.com"
 	},
 	"picture" : "/Users/kenrickchan/Documents/frontend-nanodegree-resume/images",
 	"age" : 26,
 	"skills" : ["python", "developing", "cars"],
 	"welcome" : "Welcome to my resume"
 };

 var work = {
 	"jobs" : [
 	{
 		"title" : "Quality Assurance Engineer",
 		"employer" : "Akkadian Labs",
 		"date" : "December 2013 - Present",
 		"description" : "See what i did was...",
 		"location" : "New York, NY"
 	},
 	{
 		"title" : "Desktop Support Specialist",
 		"employer" : "New York City-Human Resource Administration",
 		"date" : "September 2008 - September 2011",
 		"description" : [
 		"i did this", "and this"
 		],
 		"location" : "New York, NY"
 	}
 	]
};

 var education = {
 	"schools" : [
 	{
 		"name" : "Bernard M. Baruch",
 		"year" : "January 2011 - December 2013",
 		"location" : "New York, NY"
 	}

 	]
 };

 var projects = {
 	"projects" : [
 	{
 		"title":"Javascript Resume",
 		"date":"December 2016",
 		"description":"Resume built in Javascript",
 		"images":"/Users/kenrickchan/Documents/frontend-nanodegree-resume/images"
 	}


 	]
 };

 if (bio.skills.length > 0) {
 	$("#header").append(HTMLskillsStart);
 	var count = 0
 	var formattedSkills = ""
 	for (count in bio.skills) {
 		formattedSkills = HTMLskills.replace("%data%", bio.skills[count]);
 		$("#skills").append(formattedSkills); 		 		
 	}
 	//while (bio.skills.length > count) {
 	//	formattedSkills = HTMLskills.replace("%data%", bio.skills[count]);
 	//	$("#skills").append(formattedSkills);
 	//	count += 1;
 	//}
 }

//for (count in work.jobs) {
//	$("#main").append(HTMLworkStart);

	//for (y in work.jobs[count]) {
	//	var formattedworkEmployer = HTMLworkEmployer.replace("%date%", y["employer"]);
	//	var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs["title"]);	
	//	$("#work-entry").append(formattedworkEmployer + formattedworkTitle);
	//}
//	var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[count].employer);
//	var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[count].title);
//	var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
//	$(".work-entry:last").append(formattedEmployerTitle);

//	var formattedworkDate = HTMLworkDates.replace("%data%", work.jobs[count].date);
//	$(".work-entry:last").append(formattedworkDate);

//	var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[count].description);
//	$(".work-entry:last").append(formattedworkDescription);
//}

function displayWork() {
	for (count in work.jobs) {
		$("#main").append(HTMLworkStart);
		var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[count].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[count].title);
		var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedworkDate = HTMLworkDates.replace("%data%", work.jobs[count].date);
		$(".work-entry:last").append(formattedworkDate);

		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[count].description);
		$(".work-entry:last").append(formattedworkDescription);
	}	
}

displayWork();


function locationizer(work_obj) {
	var locationArray = [];
	for (count in work.jobs) {
		locationArray.push(work.jobs[count].location);
	}
	return locationArray;
}

console.log(locationizer(work));

$("#main").append(internationalizeButton);
function inName(string1, string2) {
	var fName = string1.slice(0,1).toUpperCase() + string1.slice(1).toLowerCase();
	var lName = string2.toUpperCase();
}
























