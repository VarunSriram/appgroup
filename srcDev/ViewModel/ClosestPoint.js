	function closest_pt_mark(desti,loca){
		
		var length=loca.surr.length;
		var dist=100000;
		var count=0;
		var closest=desti;
		// intialize dist to high arbitrary number
		//for loop to make marker only for closest point to destination
		for(var w=0; w<length;w++){
			if (loca.surr[w].building == desti.building){
				return desti;
			}
			if (loca.surr[w].building != "null"){
				continue;
			}
			var getX=(loca.surr[w].lat);
			var getY=(loca.surr[w].lng);
			var destX=(desti.lat);
			var destY=(desti.lng);
			//code segment to find dist between destination and point
			//var lats=Math.pow(destX-getX,2);
			var lats= destX-getX;
			lats= lats*lats;
			//var lngs=Math.pow(destY-getY,2);
			var lngs= destY-getY;
			lngs= lngs*lngs;
			var pt_distance=Math.sqrt(lats+lngs);
		
			if(pt_distance<dist){
			
				dist=pt_distance;//update the distance
				closest=loca.surr[w];
				
			}
			
		}
	
		return closest;
	
}
