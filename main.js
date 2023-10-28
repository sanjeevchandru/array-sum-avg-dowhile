//Find the Sum of numbers in an array and find average also using do-while
document.write("Find the Sum of numbers in an array and find average also using do-while"+"<br>");
document.write("---------------------------------------------------------"+"<br>");

var a=[10,25,5,10,18,3];
var b=0;
var x;
document.write("The array elements are:"+a+"<br>");
document.write("The counts of array elemente are:"+a.length+"<br>");
let i=0;
do{
     b=b+a[i];
     x=b/a.length;
     i++;
}
while(i<a.length)
document.write("The sum of array value is:"+b+"<br>");
document.write("The average value is:"+x);