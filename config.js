var dataUrl = 'data/cimis_stations.csv';
var maxZoom = 18;
var fieldSeparator = ',';
var baseUrl = 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png';
var baseAttribution = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var subdomains = 'abcd';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50, disableClusteringAtZoom:9};
var labelColumn = "Name";
var opacity = 1.0;