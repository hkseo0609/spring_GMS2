var series={
		arithSeries : ()=>{
			var sum = 0;
			for(var i=1;i<=100;i++){
				sum = sum+i;
			}			
			return sum;
		},
		
		switchSeries : ()=>{
			var i=0, sum=0, sw=0;
			
			do {
				if(sw==0){
					sum=sum+i;
					sw=1;
				}else {
					sum=sum-i;
					sw=0;
				}
				i=i+1;
				
			}while(i<100);
			
			return sum;
			
		},
		
		diffSeries :(e)=>{
			var sum = 0;
			var x=e*1;
			var y=1;
			for(var i=0;i<x;i++){
				sum = sum+y;
				y = y+(i+1);
			}			
			return sum;
		},
		
		facSeries :()=>{
			var sum = 0;
			var j=1;
			for(var i=0;i<10;i++){
				j=j*(i+1);
				sum=sum+j;
			}			
			return sum;
		},
		
		fiboSeries :()=>{
			var a=1, b=1;
			var sum=2;
			var c=0;
			for(var i=2;i<20;i++){
				c=a+b;
				sum=sum+c;
				a=b;
				b=c;
			}			
			return sum;
		}
	
}