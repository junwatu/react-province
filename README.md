#React Component - Select Province


##Installation

> TODO

##Usage

```
<indonesia-province id="propinsiku"></indonesia-province>

<script>
	var propinsi = document.getElementById('propinsiku');

	propinsi.addEventListener('change', function(e){
		var data = e.target.value.toLowerCase();
	});

</script>

```