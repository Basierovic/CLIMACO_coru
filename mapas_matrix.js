///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [43.07327775725035, -7.9],
		zoom: 9,
		minZoom: 3,
		maxZoom: 20,
		maxBounds: [
			[20, -50],
			[50, 50]
			],
	});




///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';
//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultmarkGeocode: false
	}).addTo(map);


///////////Diseño caracteriticas basicas del visor///////////
//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h2>Cambio climático recente nas parroquias <br> da Coruña';
	 return div;
	};
	title2.addTo(map);
//Logo Matrix	
var title1 = L.control({position: 'bottomright' });
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/matrix0.png" width="200px" height="100px" ></img></a>';
	 return div;
	};
	title1.addTo(map);


		//Logo CLIMACO
var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/climaco.png" width="100px" height="100px" ></img></a>';
	 return div;
	};
	title4.addTo(map); 
	





///////////Cartografía de referencia///////////

var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>| Map data © 2021 <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2021</strong></a>',
	}).addTo(map);		
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB',
    attribution: '| <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2021</strong></a>'
    });
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB',
    pane: 'labels'
    });


var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	opacity: 0.5,
	attribution: 'Map data &copy'
	});
var osm1 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	opacity: 0,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetmap</a>'
	});
var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});
var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>',
	});



//Límites
// var comunidades = L.geoJson(comunidades, {
// 	color: "#17202A", 
// 	weight: 1.3,
// 	opacity: 0.5,
// 	fillOpacity: 0,
// 	pane: 'límites', // layer goes on top.
// 	attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional || © <a href="http://www.aemet.es">Agencia Estatal de Meteorología |'			
// 	}).addTo(map);

 

 var relieve = L.imageOverlay('images/hillshade_cor.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]).addTo(map);

var conce = L.geoJson(conce, {
	color: "#17202A", 
	weight: 1.5,
	opacity: 0.5,
	fillOpacity: 0,
	pane: 'límites', // layer goes on top.
	attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional |'			
	}).addTo(map);

relieve.setOpacity(0.8);


///////////Otras funcionalidades
				
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[43, -8.5], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);




    
//MIS MAPAS


//CAMB_VAG_4


function getColor1(a) {
	
	return a >= 6? '#A7268A' : 
	a >= 5? '#EA2627':
	a >= 4? '#FC8581':
	a < 4? '#FFFFE7':
	
	'#C25200';
};


function style1(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_vag_4),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};
function popup1(feature, layer) {

	if (feature.properties && feature.properties.camb_vag_4 && feature.properties.nome_concel) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Incremento vagas de calor: </strong>"+feature.properties.camb_vag_4.toLocaleString().substring(0,1)+"%",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson1 = L.geoJson(tabla, {
	style: style1,
	onEachFeature: popup1
});



//DIAS DE VERANO
function getColor2(a) {
	
	return a >= 8? '#720101' : 
	a >= 7? '#A80101':
	a >= 6? '#E20101':
	a >= 5? '#FE8081':
	a >= 4? '#FFA77F':
	a > 0? '#FFFFE7':
	
	'#C25200';
};


function style2(feature) {
	return {
		fillColor: getColor2(feature.properties.camb_ver),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};
function popup2(feature, layer) {

	if (feature.properties && feature.properties.camb_ver) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"
            
			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"

            	+"<strong>Incremento de días de verán: </strong>"+feature.properties.camb_ver.toLocaleString().substring(0,1)+" días",

            		

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson2 = L.geoJson(tabla, {
	style: style2,
	onEachFeature: popup2
});


//XEADAS

function getColor3(a) {
	
	return a >= -1? '#FFFFCB' : 
	a >= -2? '#FFC2A6':
	a >= -3? '#FF8E8D':
	a >= -4? '#FB6185':
	a >= -5? '#ED3394':
	a >= -6? '#D132C0':
	a >= -7? '#B23ED5':
	a >= -8? '#9645DF':
	a >= -9? '#6E48CF':
	a < -9? '#364ABC':
	
	'#C25200';
};

function style3(feature) {
	return {
		fillColor: getColor3(feature.properties.camb_xea),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};
function popup3(feature, layer) {

	if (feature.properties && feature.properties.camb_xea) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"
             
			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"

            	+"<strong>Descenso de días de xeada: </strong>"+feature.properties.camb_xea.toLocaleString().substring(0,2)+" días"

            		,

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson3 = L.geoJson(tabla, {
	style: style3,
	onEachFeature: popup3
});

//TEMP MEDIA

function getColor4(a) {
	
	return a >= 0.8? '#8F3433' : 
	a >= 0.7? '#FF3334':
	a >= 0.6? '#FF9899':
	a >= 0.5? '#FFB898':
	a < 0.5? '#FFEFCB':
	'#C25200';
};

function style4(feature) {
	return {
		fillColor: getColor4(feature.properties.med_camb),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};



function popup4(feature, layer) {

	if (feature.properties && feature.properties.med_camb) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"
             +"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
            	+"<strong>Incremento na temperatura: </strong>"+feature.properties.med_camb.toLocaleString().substring(0,4)+" °C"

            		,

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson4 = L.geoJson(tabla, {
	style: style4,
	onEachFeature: popup4
});

//TEMP MEDIA MIN
function getColor5(a) {
	
	return a >= 0.8? '#8F3433' : 
	a >= 0.7? '#FF3334':
	a >= 0.6? '#FF9899':
	a >= 0.5? '#FFB898':
	a < 0.5? '#FFEFCB':
	'#C25200';
};

function style5(feature) {
	return {
		fillColor: getColor5(feature.properties.min_camb),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};
function popup5(feature, layer) {

	if (feature.properties && feature.properties.min_camb) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"
             +"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
            	+"<strong>Incremento na temperatura: </strong>"+feature.properties.min_camb.toLocaleString().substring(0,4)+" °C"

            		,

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson5 = L.geoJson(tabla, {
	style: style5,
	onEachFeature: popup5
});
//TEMP MEDIA MAX
function getColor6(a) {

	return a >= 0.8? '#8F3433' : 
	a >= 0.7? '#FF3334':
	a >= 0.6? '#FF9899':
	a >= 0.5? '#FFB898':
	a < 0.5? '#FFEFCB':
	'#C25200';
};

function style6(feature) {
	return {
		fillColor: getColor6(feature.properties.max_camb),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};
function popup6(feature, layer) {

	if (feature.properties && feature.properties.max_camb) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"
             +"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
            	+"<strong>Incremento na temperatura: </strong>"+feature.properties.max_camb.toLocaleString().substring(0,4)+" °C"

            		,

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson6 = L.geoJson(tabla, {
	style: style6,
	onEachFeature: popup6
});

//

function styleCon(feature) {
	return {
		fillColor: 'green',
		weight: 0.5,
		opacity: 0.5,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.0
	};

};
function popupCon(feature, layer) {

	if (feature.properties && feature.properties.NomeConcel) {
		layer.bindTooltip("<strong>Concello: </strong>"+  
			feature.properties.NomeConcel,
			/*" <br><strong>Concello: </strong>"+
			feature.properties.Concello,
			*/{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var Concellos = L.geoJson(tabla,{
	style: styleCon,
	onEachFeature: popupCon
});

var mapa1 = L.layerGroup([geojson1]);
var mapa2 = L.layerGroup([geojson2]);
var mapa3 = L.layerGroup([geojson3]).addTo(map);
var mapa4 = L.layerGroup([geojson4]);
var mapa5 = L.layerGroup([geojson5]);
var mapa6 = L.layerGroup([geojson6]);
// var mapa14 = L.layerGroup([geojson14,Concellos]);
// var mapa15 = L.layerGroup([geojson15,Concellos]);







var baseTree = 
[
	{ label: "<strong>Limpar mapa", layer: osm3 },
            

	  

{
	label: '<strong>Mapas do cambio da temperatura',
	children: [

       { label: "Cambio na temperatura media",layer: mapa4},
       { label: "Cambio na temperatura media das mínimas",layer: mapa5},
       { label: "Cambio na temperatura media das máximas",layer: mapa6},
	   
	           ]
},



{
	label: '<strong>Mapas parroquiais do cambio nos extremos térmicos',
	children: [
	
		{ label: "Cambio nos días de xeada",layer: mapa3},
		{ label: "Cambio nos días de verán",layer: mapa2},
	    { label: "Cambio nas vagas de calor ",layer: mapa1}
	    
	    
	   
               ]
},



		
	   
	
	
	 ];





var overlayTree = {
	label: '<strong>Mapas de referencia',
	children: [
	
		{ label: "Concellos", layer: conce},
		{ label: "OpenStreetmap", layer: osm},
		{ label: "Toponimia", layer: positronLabels},
		{ label: "Relevo", layer: relieve}
	]
};	




//leyendas

	var htmlLegend1 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na frecuencia anual de vagas de calor entre os períodos 1961-1989 e 1991-2019'+"<\h3>",
			layer: geojson1,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: media espacial por parroquias'+'<br>'+'<BR>Vaga de calor: tres días consecutivos nos que a temperatura máxima supera o percentil 95 da temperatura máxima diaria de verán do período de referencia 1971-2000'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  % </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp  < 5 '+"<\h4>",html: '',style: {'background-color': '#FC8581','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 5 – 6 '+"<\h4>",html: '',style: {'background-color': '#EA2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp  > 6 '+"<\h4>",html: '',style: {'background-color': '#A7268A','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2021).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend1);


	var htmlLegend2 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio no número medio de días de verán no mes de setembro entre os períodos 1961-1989 e 1991-2019'+"<\h3>",
			layer: geojson2,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media espacial por parroquias.<br><BR>Días de verán: xornada coa temperatura máxima ≥ 25°C'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h3>"+'<br> <strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDías </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h4>"+  '&nbsp   < 4 '+"<\h4>",html: '',style: {'background-color': '#FFFFE7','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			 	label:"<h4>"+  '&nbsp 4 – 5 '+"<\h4>",html: '',style: {'background-color': '#FFA77F','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 5 – 6 '+"<\h4>",html: '',style: {'background-color': '#FE8081','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 6 – 7 '+"<\h4>",html: '',style: {'background-color': '#E20101','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp > 7 '+"<\h4>",html: '',style: {'background-color': '#A80101','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2021).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend2);



		var htmlLegend3 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio no número medio anual de días de xeada entre os períodos 1961-1989 e 1991-2019'+"<\h3>",
			layer: geojson3,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
			    label:"<h4>"+  'Método: Media espacial por parroquias.<br><BR>Día de xeada: xornada con temperatura mínima ≤ 0°C'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h3>"+'<br> <strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   Días</strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h4>"+  '&nbsp  > -1 '+"<\h4>",html: '',style: {'background-color': '#FFFFCB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			 	label:"<h4>"+  '&nbsp -2 – -1 '+"<\h4>",html: '',style: {'background-color': '#FFC2A6','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp -3 – -4 '+"<\h4>",html: '',style: {'background-color': '#FF8E8D','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp -4 – -5 '+"<\h4>",html: '',style: {'background-color': '#FB6185','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp -5 – -6 '+"<\h4>",html: '',style: {'background-color': '#ED3394','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp -6 – -7 '+"<\h4>",html: '',style: {'background-color': '#D132C0','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp < -7 '+"<\h4>",html: '',style: {'background-color': '#B23ED5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				

				/*label:"<h4>"+  ' Moi feble'+"<\h4>",html: '',style: {'background-color': '#74b330','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Feble'+"<\h4>",html: '',style: {'background-color': '#fffdb3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  ' Moderado'+"<\h4>",html: '',style: {'background-color': '#f4af84','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			    label:"<h4>"+  ' Notable'+"<\h4>",html: '',style: {'background-color': '#d20105','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				*/label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2021).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend3);

	var htmlLegend4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media anual entre os períodos 1961-1989 e 1991-2019'+"<\h3>",
			layer: geojson4,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media espacial por parroquias.<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h3>"+'<br> <strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h4>"+  '&nbsp < 0,5 '+"<\h4>",html: '',style: {'background-color': '#FFEFCB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			 	label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#FFB898','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#FF9899','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#FF3334','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp > 0,8 '+"<\h4>",html: '',style: {'background-color': '#8F3433','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2021).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend4);

	var htmlLegend5 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media das mínimas anual entre os períodos 1961-1989 e 1991-2019'+"<\h3>",
			layer: geojson5,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media espacial por parroquias.<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h3>"+'<br> <strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h4>"+  '&nbsp < 0,5 '+"<\h4>",html: '',style: {'background-color': '#FFEFCB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			 	label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#FFB898','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#FF9899','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#FF3334','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp > 0,8 '+"<\h4>",html: '',style: {'background-color': '#8F3433','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2021).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend5);

	var htmlLegend6 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media das máximas anual entre os períodos 1961-1989 e 1991-2019'+"<\h3>",
			layer: geojson6,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: Media espacial por parroquias.<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				
				label:"<h3>"+'<br> <strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				label:"<h4>"+  '&nbsp < 0,5 '+"<\h4>",html: '',style: {'background-color': '#FFEFCB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			 	label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#FFB898','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#FF9899','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#FF3334','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp > 0,8 '+"<\h4>",html: '',style: {'background-color': '#8F3433','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label: "<h5>" +'<BR><i>Fonte: CLIMACO. Elaboración propia con datos da Axencia Estatal de Meteoroloxía (2021).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend6);

//minimapa	
  var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"topleft", width:100,height:100,}).addTo(map); 	




//Visualizar capas
// L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree, overlayTree,{collapsed:true}).collapseTree(baseTree,overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});