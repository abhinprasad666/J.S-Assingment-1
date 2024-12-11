


let [A_plus ,A, B_plus ,B, C_plus ,C, D_plus,D]=[90,80,70,60,50,40,30,29]
let overScore=101
let errorMsg='Invalid Mark! \n Please Enter Currect Mark'

// console.log("A+:"+ A_plus + "A:" +A + "B_plus"+B_plus) 
function calculateGrade(score,name){

if(A_plus<=score && (overScore>score))
    console.log(`Student:${name} \n Score:${score} \n Grade: A+ `)

else if(A<=score && (overScore>score) )
    console.log(`Student:${name} \n Score:${score} \n Grade: A `)

else if(B_plus<=score && (overScore>score))
    console.log(`Student:${name} \n Score:${score} \n Grade: B+ `)

else if(B<=score && (overScore>score))
    console.log(`Student:${name} \n Score:${score} \n Grade: B+ `)

else if(C_plus<=score && (overScore>score))
    console.log(`Student:${name} \n Score:${score} \n Grade: C+ `)

else if(C<=score && (overScore>score))
    console.log(`Student:${name} \n Score:${score} \n Grade: C `)

else if(D_plus<=score && (overScore>score))
    console.log(`Student:${name} \n Score:${score} \n Grade: D+ `)

else if(D<=score && (overScore>score))
    console.log("You Are Faild !")

else{

    console.log(errorMsg)
}

}



function displayResult(score,studentName){

    calculateGrade(score,studentName)

 }
 

 displayResult(85,"Athira")