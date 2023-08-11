//Net Salary Calculator

//A program that calculates an individual's monthly net salary

let basicSalary; 
let benefits;
let tax;

function calNetSalary(basicSalary=15000 , benefits=5000){
   
    //calculate the payee(i.e Tax)

    const grossPay = basicSalary + benefits;
// console.log(`The gross salary is ${grossPay} KSH`);
if( basicSalary <= 24000){
 tax = grossPay * 0.10;
}
else if(basicSalary >= 24001 && basicSalary <= 32333){
    tax = grossPay * 0.25;
}
else if (basicSalary >= 32334 && basicSalary <= 500000){
    tax = grossPay * 0.30;
}
else if (basicSalary >= 500001 && basicSalary <= 800000){
    tax = grossPay * 0.325
}
else if (basicSalary > 800000){
    tax = grossPay * 0.35;
}
console.log (`The tax is ${tax} KSH`);
     //calculate NHIFDeductions
    
    let nhifPay;
    if (grossPay <= 5999){
        nhifPay = 150;
    }
    else if (grossPay >= 6000 && grossPay <= 7999){
        nhifPay =  300;
    }
    else if (grossPay >= 8000 && grossPay <= 11999){
        
        nhifPay = 400;
    }
    else if (grossPay >= 12000 && grossPay <= 14999){
        
        nhifPay =  500;
    }
    else if(grossPay >= 15000 && grossPay <= 19999){
    
        nhifPay =  600;
    }
    else if (grossPay >= 20000 && grossPay <=  24999){
        
        nhifPay = 750;
    }
    else if(grossPay >= 25000 && grossPay <= 29999){
        
        nhifPay = 850;
    }
    else if(grossPay >= 30000  && grossPay <= 34999){
        
        nhifPay = 900;
    }
    else if(grossPay >= 35000  && grossPay <= 39999){
        
        nhifPay =  950;
    }
    else if(grossPay >= 40000  && grossPay <= 44999){
        
        nhifPay = 1000;
    }
    else if(grossPay >= 45000  && grossPay <= 49999){
        
        nhifPay = 1100;
    }
    else if(grossPay >= 50000  && grossPay <= 59999){
        
        nhifPay = 1200;
    }
    else if(grossPay >= 60000  && grossPay <= 69999){
        
        nhifPay = 1300;
    }
    else if(grossPay >= 70000  && grossPay <= 79999){
        
        nhifPay = 1400;
    }
    else if(grossPay >= 80000  && grossPay <= 89999){
        
        nhifPay =  1500;
    }
    else if(grossPay >= 90000  && grossPay <= 99999){
        
        nhifPay = 1600;
    }
    else if(grossPay >= 100000){
        
        nhifPay =  1700;
    }
    console.log (`The NHIFDeduction is ${nhifPay} KSH`);
    //calculate NSSFDeductions
    
    let nssfDeductions = 0.06 * grossPay;
    console.log(`The NSSFDeduction is ${nssfDeductions} KSH`);
    
    //calculate gross salary

    let grossSalary = grossPay;
    console.log (`The gross salary is ${grossSalary} KSH`);
    
    //calculate net salary.
    
    let netSalary = grossPay  - nhifPay - nssfDeductions - tax
    
    
     return `The net salary is ${netSalary} KSH`;
}
console.log(calNetSalary(50000,5000));