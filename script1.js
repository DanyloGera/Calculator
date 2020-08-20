function operation_test(){
	var input =	document.getElementById('result');
	var num1 = parseInt(document.getElementById("num1").value);
	var num  = document.getElementById('num').value;
	var num2 = parseInt(document.getElementById("num2").value);
	console.log(num1, num, num2);
	var res;
	if(num === "+")
		res=num1+"+"+num2+"="+(num1+num2);
	else if(num === "-")
		res=num1+"-"+num2+"="+(num1-num2);
	else if(num === "*")
		res=num1+"*"+num2+"="+(num1*num2);
	else if(num === "/")
		res=num1+"/"+num2+"="+(num1/num2);
	else if(num === "%")
		res=num1+"%"+num2+"="+(num1%num2);
	else if(num === ">")
		res=num1+">"+num2+"="+(num1>num2);
	else if(num === "<")
		res=num1+"<"+num2+"="+(num1<num2);
	else if(num === "==")
		res=num1+"=="+num2+"="+(num1==num2);
	else if(num === ">=")
		res=num1+">="+num2+"="+(num1>=num2);
	else if(num === "<=")
		res=num1+"<="+num2+"="+(num1<=num2);
	else if(num === "!=")
		res=num1+"!="+num2+"="+(num1!=num2);
	else
		res="Error";
	input.value=res;
	// ДЗ:
	// op1 op op2
	//  5   +  8
	// op1 and op2 are Numbers!
	// if(op === "+")
	//     console.log(op1+op2);
	// else if(op === "-")
	// 	   console.log(op1-op2);
	// ...
	// else
	// 	   console.log("Error");
}
