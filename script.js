function volume_sphere() {
	const rad  =parseFloat(document.getElementById("radius").value);
	if (isNaN(rad) || rad <= 0) {
		
		document.getElementById("volume").textContent = "Please enter a valid positive number for the radius.";
} 
	else {
                // Calculate the volume of the sphere
        const vol = (4/3) * Math.PI * Math.pow(rad, 3);
document.getElementById("volume").textContent = ${vol.toFixed(2)};
}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
