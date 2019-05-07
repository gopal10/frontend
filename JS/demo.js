var v1= new Date();

var month= v1.getMonth();
var date = v1.getDay();
var year= v1.getFullYear();


console.log(month +"-"+  date +"-" + year);



var a=10,b=20,c=30,d=450,e=50;

if(e>b && e>c && e>d && e>a)
{
    console.log("5th elemnt is greater :"+ e)
    
}

else if(d>a && d>b && d>c && d>e)
{
    console.log("4th elemnt is greater :"+ d)
    
}

else if(a>b && a<c && a>d && a>e)
{
    console.log("1st elemnt is greater :"+ a)
    
}

else if(b>a && b>c && b>d && b>e)
{
    console.log("2st elemnt is greater :"+ b)
    
}

 else (c>a && c>b && c>d && c>e)
{
    console.log("3rd elemnt is greater :"+ c)
    
}
