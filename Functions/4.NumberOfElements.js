console.log('Problem 4. Number of elements');
/*Write a function to count the number of div elements on the web page*/

function numberOfElements(){
    var count = document.getElementsByTagName('div').length;
    console.log('There are ' + count + ' DIVs. in the HTML page');
}
numberOfElements();
