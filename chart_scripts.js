/*Call on charts recipe from Google library, and carry out "load"*/
google.charts.load('current', {
	'packages' : ['corechart']
});

/*Google will refer to contents from the corechart package
 * When this happens, perform the "makeBothCharts" function
 * This will use code from google to make the two charts.      */
google.charts.setOnLoadCallback(makeBothCharts);

function makeBothCharts() {

	makeChart();
	makeChart2();

}

/*This is the makeChart function.
 * The makeChart function will use code from the google library to make a chart on the page
 * without any other "ingredients," i.e. objects or arrays.
 */
function makeChart() {

	/* Using the data available in the google library, create a chart.*/

	var chartData = new google.visualization.DataTable();
	/*Using data table's functions, we are able to add columns and rows
	 *Add a column of type string, labeled "HostCountry"*/
	chartData.addColumn('string', 'HostCountry');
	/*Add a column of type number, labeled "Refugees"*/
	chartData.addColumn('number', 'Refugees');
	/*Each row is an array of arrays, with 5 strings and 5 numbers
	 *and the same number of elements as there are columns.
	 * The data types match what was declared in the "addColumn" function,
	 * i.e. top host countries and the number of Afghan refugees in those countries.
	 * */
	
	/*Add a column for the bar label
	 *Reference link for how to add column roles: https://developers.google.com/chart/interactive/docs/roles
	 */
	chartData.addColumn({type:'string', role:'annotation'});

	
	
	chartData.addRows(chart1DataArray);

	/*The object includes some customization;
	 * I will need to add to this to make the visualization my own,
	 * and something that I might actually want to publish.
	 */
	var chartDesign = {
		'title' : 'Countries Hosting Afghan Refugees',
		'width' : 1000,
		'height' : 700,
		'bar':{
			'groupWidth':10
			}
	};

	/*Here I created a variable to hold the bar chart.
	 * I must use a <div> ID that exists on the HTML page
	 * in order for it to function
	 */
	var pieChart = new google.visualization.BarChart(document.getElementById("chart_container"));
	/*Draw chart by using the "chartData" object
	 * and the "chartDesign" object
	 */

	pieChart.draw(chartData, chartDesign);
	/*End makeChart function*/
}

function makeChart2() {

	/* Using the data available in the google library, create a chart.*/

	var chart2Data = new google.visualization.DataTable();
	/*Using data table's functions, we are able to add columns and rows
	 *Add a column of type string, labeled "TypeRefugee"*/
	chart2Data.addColumn('string', 'TypeRefugee');
	/*Add a column of type number, labeled "HowMany"*/
	chart2Data.addColumn('number', 'HowMany');
	/*Each row is an array of arrays, with 5 strings and 5 numbers
	 *and the same number of elements as there are columns.
	 * The data types match what was declared in the "addColumn" function,
	 * and refers to the different types of refugees registered in Afghanistan in 2015.
	 * */
	
	chart2Data.addRows(chart2DataArray);

	/*The object includes some customization;
	 * I will need to add to this to make the visualization my own,
	 * and something that I might actually want to publish.
	 */
	var chart2Design = {
		'title' : 'Refugees in Afghanistan, 2015',
		'width' : 800,
		'height' : 700
	};

	/*Here I created a variable to hold the pie chart.
	 * I must use a <div> ID that exists on the HTML page
	 * in order for it to function
	 *REMEMBER TO CHANGE DIV ID TO MATCH THE ONE ON THE PAGE*/
	var pieChart = new google.visualization.PieChart(document.getElementById("chart_container2"));
	/*Draw chart by using the "chart2Data" object
	 * and the "chart2Design" object
	 */

	pieChart.draw(chart2Data, chart2Design);
	/*End makeChart2 function*/
}

