let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputGrade=parseInt(document.getElementById('input-grade').value)
    console.log(inputGrade)
    let finalOutput
    // write Code For the Code challenge
    
    //Defining an arrow function called grading that evaluates the conditions
    const grading = myGrade => {
        // If check whether the grade is greater than 79 and less than or equal to 100
        if (inputGrade > 79  && inputGrade <= 100){
            //display Grade A if True
            myGrade = "A"
        }
        // Else if statement to check whether the grade is less than or equal to 79 and greater than or equal to 60 
        else if (inputGrade <= 79 && inputGrade >= 60){
            //display Grade B if True
            myGrade = "B"
        }
        // Else if statement to check whether the grade is less than or equal to 59 and greater than or equal to 49 
        else if (inputGrade <= 59  && inputGrade >= 49){
            //display Grade C if True
            myGrade = "C"
        }
        // Else if statement to check whether the grade is less than or equal to 49 and greater than or equal to 40 
        else if (inputGrade <= 49 && inputGrade >= 40){
            //display Grade D if True
            myGrade = "D"
        }
        //Else if statement to check whether the grade is less than 40 and greater than or equal to 0
        else if (inputGrade < 40 && inputGrade >=0){
            //display Grade E if True
            myGrade = "E"
        }
        // Else statement to check whether the input is invalid 
        else{
            //display invalid input if True
            myGrade = "Invalid input. Please try again"
        }
        // returning the value contained in the variable myGrade
        return myGrade
    }

    //Calling the function grading and assigning it to the variable finalOutput 
    finalOutput = grading()

    //appending the result value to index.html file
    document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
    // write Code For the Code challenge
    
    //Declaring a variable checkSpeed 
    let checkSpeed

    //creating an anonymous function called speeding that evaluates the conditions
    const speeding = function(){
        //if check the speed is greater than 70
        if (inputSpeed <= 70){
            //display Ok if the expression is TRUE
            checkSpeed = "Ok"
        }
        // Else
        else{
            checkSpeed = (inputSpeed - 70) / 5
            //Check if checkSpeed is greater than 12
            checkSpeed > 12 ? 
            //display License suspended if TRUE
            checkSpeed = "License Suspended" : 
            //display the points if FALSE
            checkSpeed = `Points: ${checkSpeed}`
        }
         // returning the value contained in the variable checkSpeed
        return checkSpeed

    }
    //Calling the function speeding and assigning it to the variable finalOutput 
    finalOutput = speeding()

     //appending the result value to index.html file
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        let inputBenefits=parseInt(document.getElementById('input-benefits').value)
        console.log(inputSalary)
        console.log(inputBenefits)
        let finalOutput
        // write Code For the Code challenge

        // declaring the PAYE, NHIF and NSSF variables
        let paye, nhif, nssf
        // calculating the gross pay by summing up the basic salary and the benefits
        let grossSalary = inputSalary + inputBenefits

         //Defining a named function called calculatepaye that calculates the PAYE rates
        function calculatePaye(){
            // if statement to check whether the gross salary is less than or equal to Kshs. 24,000
            if (grossSalary <= 24000){
                // calculating the PAYE using the 10% tax rate
                paye = 0.1 * grossSalary
            }
            // Else if statement to check whether the gross salary is greater than Kshs. 24,000 and less than or equal to Kshs. 32,333
            else if (grossSalary > 24000 && grossSalary <= 32333){
                // calculating the PAYE using the 25% tax rate
                paye = 0.25 * grossSalary
            }
              // Else if statement to check whether the gross salary is greater than Kshs. 32,333
            else if (grossSalary > 32333 ){
                // calculating the PAYE using the 30% tax rate
                paye = 0.3 * grossSalary
            }
            // returning the value contained in the variable paye
            return paye
        }

         //Defining a named function called calculateNhif that calculates the NHIF rates
        function calculateNhif(){

            // ifstatement to check whether the gross salary is less than Kshs. 6,000
            if (grossSalary < 6000){
                // nhif is set to Kshs. 150
                nhif = 150
            }
            // Else if statement to check whether the gross salary is greater than or equal to Kshs. 6,000 and less than Kshs. 8,000
            else if (grossSalary >= 6000 && grossSalary < 8000){
                // nhif is set to Kshs. 300
                nhif = 300
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 8,000 and less than Kshs. 12,000
            else if (grossSalary >= 8000  && grossSalary < 12000){
                // nhif is set to Kshs. 400
                nhif = 400
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 12,000 and less than Kshs. 15,000
            else if (grossSalary >= 12000 && grossSalary < 15000){
                // nhif is set to Kshs. 500
                nhif = 500
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 15,000 and less than Kshs. 20,000
            else if (grossSalary >= 15000 && grossSalary < 20000){
                // nhif is set to Kshs. 600
                nhif = 600
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 20,000 and less than Kshs. 25,000
            else if (grossSalary >= 20000 && grossSalary < 25000){
                // nhif is set to Kshs. 750
                nhif = 750
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 25,000 and less than Kshs. 30,000
            else if (grossSalary >= 25000 && grossSalary < 30000){
                // nhif is set to Kshs. 850
                nhif = 850
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 30,000 and less than Kshs. 35,000
            else if (grossSalary >= 30000 && grossSalary < 35000){
                // nhif is set to Kshs. 900
                nhif = 900
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 35,000 and less than Kshs. 40,000
            else if (grossSalary >= 35000 && grossSalary < 40000){
                // nhif is set to Kshs. 950
                nhif = 950
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 40,000 and less than Kshs. 50,000
            else if (grossSalary >= 40000 && grossSalary < 45000){
                // nhif is set to Kshs. 1,000
                nhif = 1000
            }
            // Else if statement to check whether the gross salary is greater than or equal to Kshs. 45,000 and less than Kshs. 50,000
            else if (grossSalary >= 45000 && grossSalary < 50000){
                // nhif is set to Kshs. 1,100
                nhif = 1100
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 50,000 and less than Kshs. 60,000
            else if (grossSalary >= 50000 && grossSalary < 60000){
                // nhif is set to Kshs. 1,200
                nhif = 1200
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 60,000 and less than Kshs. 70,000
            else if (grossSalary >= 60000 && grossSalary < 70000){
                // nhif is set to Kshs. 1,300
                nhif = 1300
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 70,000 and less than Kshs. 80,000
            else if (grossSalary >= 70000 && grossSalary < 80000){
                // nhif is set to Kshs. 1,400
                nhif = 1400
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 80,000 and less than Kshs. 90,000
            else if (grossSalary >= 80000 && grossSalary < 90000){
                // nhif is set to Kshs. 1,500
                nhif = 1500
            }
             // Else if statement to check whether the gross salary is greater than or equal to Kshs. 90,000 and less than Kshs. 100,000
            else if (grossSalary >= 90000 && grossSalary < 100000){
                // nhif is set to Kshs. 1,600
                nhif = 1600
            }
             // Else if statement to check whether the gross salary is greater than Kshs. 100,000
            else if(grossSalary >= 100000){
                // nhif is set to Kshs. 1,700
                nhif = 1700
            }
            
            // returning the value contained in the variable nhif
            return nhif
                
        }
         //Defining a named function called calculateNssf that calculates the NSSF Tier I and Tier II 
        function calculateNssf(){
            // returning the value contained in the variable nssf
            return nssf = (0.6 * 6000)+(0.6 * 12000)
        }

    //Calling the function calculateNssf and assigning it to the variable finalnssf
    const finalnssf = calculateNssf()

    //Calling the function calculatePaye and assigning it to the variable finalpaye
    const finalpaye = calculatePaye()

    //Calling the function calculateNhif and assigning it to the variable finalnhif
    const finalnhif = calculateNhif()

    //Calculating the net salary by deducting the deductions from the gross salary
    const netsalary = grossSalary - finalpaye - finalnhif -nssf 

    //Assigning the netsalary variable to the finalOutput
    finalOutput = netsalary

    //appending the result value to index.html file
    document.getElementById('salary-id').append(finalOutput)
            
    })