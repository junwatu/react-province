(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ProvinceSelect = React.createClass({displayName: "ProvinceSelect", 
        	render: function(){ 
	        	return React.createElement(ProvinceList, {data: this.state.provs, onSelect: this.onSelectedProv})
	        },

	        componentWillMount: function(){
	         	this.setState({ provs: this.state.provinces });
	        },

	        getInitialState: function(){
	         	return {
	         		provinces: [
	         			{name:'Daerah Khusus Aceh', bps: 11, iso: 'id-ac'},
	         			{name:"Sumatera Utara", bps: 12, iso: 'id-su'},
	         			{name:"Sumatera Barat", bps: 13, iso: 'id-sb'},
	         			{name:"Riau", bps: 14, iso: 'id-ri'},
	         			{name:"Jambi", bps: 15, iso:'id-ja'},
	         			{name:"Sumatera Selatan", bps: 16, iso: 'id-ss'},
	         			{name:"Bengkulu", bps: 17, iso:'id-be'},
	         			{name:"Lampung", bps: 18, iso: 'id-la'},
	         			{name:"Kepulauan Bangka Belitung", bps: 19, iso: 'id-bb'},
	         			{name:"Kepulauan Riau", bps: 21, iso: 'id-kr'},
	         			{name:"DKI Jakarta", bps: 31, iso: 'id-jk'},
	         			{name:"Jawa Barat", bps: 32, iso: 'id-jb'},
	         			{name:"Jawa Tengah", bps: 33, iso: 'id-jt'},
	         			{name:"D.I Yogyakarta", bps: 34, iso: 'id-yo'},
	         			{name:"Jawa Timur", bps: 35, iso: 'id-ji'},
	         			{name:"Banten", bps:36, iso: 'id-bt'},
	         			{name:"Bali", bps: 51, iso: 'id-ba'},
	         			{name:"Nusa Tenggara Barat", bps: 52, iso: 'id-nb'},
	         			{name:"Nusa Tenggara Timur", bps: 53, iso: 'id-nt'},
	         			{name:"Kalimantan Barat", bps: 61, iso: 'id-kb'},
	         			{name:"Kalimantan Tengah", bps: 62, iso: 'id-kt'}, 
	         			{name:"Kalimantan Selatan", bps: 63, iso: 'id-ks'},
	         			{name:"Kalimantan Timur", bps: 64, iso: 'id-kt'}, 
	         			{name:"Kalimantan Timur", bps: null, iso: 'id-ku'}, 	
	         			{name:"Sulawesi Utara", bps: 71, iso: 'id-sa'},
	         			{name:"Sulawesi Tengah", bps: 72, iso: 'id-st'},
	         			{name:"Sulawesi Selatan", bps: 73, iso: 'id-sn'},
	         			{name:"Sulawesi Tenggara", bps: 74, iso: 'id-sg'},
	         			{name:"Gorontalo", bps:75, iso: 'id-go'},
	         			{name:"Sulawesi Barat", bps: 76, iso: 'id-sr'},
	         			{name:"Maluku", bps: 81, iso: 'id-ma'},
	         			{name:"Maluku Utara", bps: 82, iso: 'id-mu'},
	         			{name:"Papua Barat", bps: 91, iso: 'id-pb'},
	         			{name:"Papua", bps: 94, iso: 'id-pa'}
	         		],
	         		provs: []
	         	}
	        },

			onSelectedProv: function(event){
	      		var data = event.target.value.toLowerCase();
	      		// TODO: Do something with the data
	        }
});
		
var ProvinceList = React.createClass({displayName: "ProvinceList",
    render: function(){
        return (
	        React.createElement("select", {onChange: this.props.onSelect}, 
	                
	            	this.props.data.map(function(prov){
                        return React.createElement("option", {key: prov.iso, "data-bps": prov.bps, id: prov.iso}, prov.name)
	            	})
	            
	        )		
	    );
    }
})

React.render(
    React.createElement(ProvinceSelect, {id: "province"}),
    document.getElementById('province')
);

},{}]},{},[1]);
