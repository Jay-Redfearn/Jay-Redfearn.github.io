var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatExpense, floatSavings, floatInvestment, floatTaxRate, floatHours;

    //Getting all values from HTML and turning it into data JS can use
    floatExpense = parseFloat($("expense").value);
    floatSavings = parseFloat($("savings").value);
	floatInvestment = parseFloat($("investment").value);
    floatTaxRate = parseFloat($("taxRate").value);
    floatHours = parseFloat($("hours").value);
    
    var moneyNeeded = (12 * floatExpense) / (1 - ((floatSavings + floatInvestment) / 100));
	var incomeNeeded = moneyNeeded / (1 - (floatTaxRate / 100));
	var wageNeededLong = incomeNeeded / (52 * floatHours);
	var wageNeeded = wageNeededLong.toFixed(2)
	
	var wageAfterTaxLong = moneyNeeded / (52 * floatHours);
	var wageAfterTax = wageAfterTaxLong.toFixed(2);
    
    $("wage").value = wageNeeded;
	$("money").value = wageAfterTax;
};

window.onload = function () 
{
    $("wage").value = ""; //blanks the wage box upon page load
	$("money").value = "";
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("expense").focus(); //puts the cursor on the first DOM text input box
};