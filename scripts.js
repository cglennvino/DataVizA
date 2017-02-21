/* Description of my data here */
/* Number of Afghan refugees living in Pakistan, in millions, at the end of 2015 */
var Afghans_In_Pakistan = 1.5;

/* Description of this overall assignment, which focuses on the population of Afghan refugees worldwide. */
var Afghan_Refugees_Worldwide = "Afghan Refugees Global Population";

/* Afghanistan is the second largest source of refugees worldwide. This is true -- today, Afghanistan is the second largest source of refugees after Syria. */
var Afghanistan_Is_The_Largest_Source_Of_Refugees_Worldwide = false;

/* Top five countries hosting Afghan refugees. This list names the countries that host the highest numbers of Afghan refugees, with Pakistan being the host of the most Afghan refugees and the United States being the host of the smallest number of Afghan refugees. */
var Hosting_Countries_Of_Afghan_Refugees = ["Pakistan", "Iran", "Germany", "United Arab Emirates", "United States"];

/* Characteristics of Afghan refugees. Here I specify the initial cause of displacement, the number of internally displaced persons in the country, top two host countries, and characteristics specific to the Afghan refugee population in Iran. */
var Characteristics_Of_Afghan_Refugees = {
	"Initial_Cause_Of_Displacement" : "Soviet Afghan War",
	"Number_Of_IDPs" : 980000,
	"Top_Host_Countries" : ["Pakistan", "Iran"],
	"Afghan_Refugees_In_Iran" : {
		"Living_Situation" : "Urban Areas",
		"Major_Ethnic_Group" : "Hazaras",
		"Literacy_Rate" : "Sixty Percent"
	}
};

/*Below is a list of objects, with each object being an article on my current research project focusing on refugee work training and placement. I gave each object five properties, referring to the headline, source, link, author, and summary*/
var Articles_RefugeeWorkResources = [{
	"headline" : "While Others Saw Refugees, This German Professor Saw Human Potential",
	"newssource" : "NPR",
	"author" : "Joe Palca",
	"link" : "http://www.npr.org/sections/goatsandsoda/2017/02/09/513700808/while-others-saw-refugees-this-german-professor-saw-human-potential",
	"description" : "A university professor in Germany named Carmen Bachmann started a program to connect highly qualified refugees with academic training and connections to scientists in the country."
}, {
	"headline" : "Over 50 U.S. Businesses Step Up for Refugees",
	"newssource" : "Forbes",
	"author" : "John Kluge",
	"link" : "http://www.forbes.com/sites/johnkluge/2016/09/20/u-s-businesses-step-up-for-refugees/#10be84c93790",
	"description" : "An op-ed by John Kluge, founder of the alight fund, about private companies' contributions to supporting refugees."
}, {
	"headline" : "How One U.S. Group Turns Migrants Into Employees",
	"newssource" : "NPR",
	"author" : "Deborah Amos",
	"link" : "http://www.npr.org/sections/parallels/2016/12/28/507146518/how-one-u-s-group-turns-migrants-into-employees",
	"description" : "A radio piece about Upwardly Global, a non-profit that helps refugees find meaningful careers in the U.S."
}, {
	"headline" : "Refugees in Syracuse: Benefit or burden? Here's what the numbers say",
	"newssource" : "Syracuse.com",
	"author" : "Chris Baker",
	"link" : "http://www.syracuse.com/poverty/2016/03/refugees_in_syracuse_benefit_burden.html",
	"description" : "This article looks at data about refugees in Syracuse, and makes a correlation between refugee arrival and poverty in the city."
}];

/*Objective: Go through each item in the list and have console print object every time there is an article published by NPR*/

function IDnpr(listOfArticles) {

	for (var counter = 0; counter < listOfArticles.length; counter++) {

		/*Test if an article has "NPR" as "newssource"
		 * If it does, print the object.
		 * If it does not, print "Not NPR."
		 * Articles_RefugeeWorkResources[counter] has also been replaced with "RefugeeArticle"
		 */
		var RefugeeArticle = listOfArticles[counter];

		if (RefugeeArticle.newssource == "NPR") {
			console.log(RefugeeArticle);
		} else {
			console.log("Not NPR");
		}
	}

	console.log("End of loop");

}

/*Call my newly created function*/

/*Calling it with my first list*/
console.log("Calling the first list");
IDnpr(Articles_RefugeeWorkResources);
