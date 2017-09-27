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

var sort = {
		//selection
		//bubble
		//insertion
		//ranking
		selection :(x)=>{
			alert('선택정렬-----> '+x);
			var arr = new Array();
			arr = x;
			alert('선택정렬-----> '+arr.length);
			var temp=0, min=0;
			
			for(var i=0; i<arr.length-1; i++){
				min = i;
				for(var j=i+1; j<=arr.length-1; j++){
					if(arr[min]>arr[j]){
						min = j;
					};
				};
				temp = arr[min];
				arr[min]=arr[i];
				arr[i]=temp;
			};
			
		
			return arr;
		},
		
		bubble : (x)=>{
			alert('버블정렬-----> '+x);
			var arr = new Array();
			arr = x;
			alert('버블정렬-----> '+arr.length);
			var temp=0;
			
			for(var i=0; i<arr.length; i++){
				for(var j=i+1; j<=arr.length-1; j++){
					if(arr[i]>arr[j]){
						temp = arr[j];
						arr[j]=arr[i];
						arr[i]=temp;
					};
				};
			};
			return arr;
		},
		
		insertion : (x)=>{
			alert('삽입정렬-----> '+x);
			var key=0;
	        for(var i=1; i<x.length; i++){
	            key = x[i];
	            for(var j=i-1; j>=0 && x[j]>key; j--){
	               if(x[j] > key){
	                  x[j+1] = x[j];
	               }
	            }
	            x[j+1] = key;
	         }
	         return x;
		},
		
		ranking : (x)=>{
			alert('석차구하기-----> '+x);
			var arr = new Array();
			var rank = new Array();
			arr = x;
			
			for(var i=0; i<arr.length; i++){
				rank[i] = 1;
			};
			alert('랭킹-----> '+rank);
			for(var i=0; i<arr.length; i++){
				for(var j=0; j<arr.length; j++){
					if(arr[i]<arr[j]){
						rank[i]++;
					};
				};
			};
			return rank;
		}
		
}