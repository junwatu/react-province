var ProvinceSelect = React.createClass({ 
        	render: function(){ 
	        	return <ProvinceList data={this.state.provs} onSelect={this.onSelectProvHandler}/>
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

	        onSelectProvHandler: function(provListComponent) {
                var selectedProv = provListComponent.props;
                // Do something with data
                console.log(selectedProv); 
	        }
});
		
var ProvinceList = React.createClass({
    render: function(){
        return (
	        <select  onChange={this.onSelectHandler} ref="provSelect">
	            {    
	            	this.props.data.map(function(prov){
                        return <option key={prov.iso} data-bps={prov.bps} id={prov.iso}>{prov.name}</option>
	            	})
	            }
	        </select>		
	    );
    },

    onSelectHandler: function(e){

    	this.props.prov = {
    		bps: e.target[e.target.selectedIndex].getAttribute('data-bps'),
    		iso: e.target[e.target.selectedIndex].id,
    		value: e.target.value
    	}
    	
        this.props.onSelect(this);
    }
})

React.render(
    <ProvinceSelect id="province"/>,
    document.getElementById('province')
);