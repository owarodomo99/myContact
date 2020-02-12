
/*$('#button').click(() => {
db.collection("users")
    .add({
        subject: $('#subject').val(),
        credit: '3',
        grade: Number($('#grade').val()),
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#subject').val('')
        $('#grade').val('')
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})
/*db.collection('users').orderBy("subject").onSnapshot(doc => {
        let table = $('tbody')[0]
        $("tbody tr").remove()
        gpa = 0
        credit = 0
        //document.querySelectorAll("tbody tr").forEach(item => item.remove())
        doc.forEach(item => {
            let row = table.insertRow(-1)
            let firstCell = row.insertCell(0)
            let secoundCell = row.insertCell(1)
            firstCell.textContent = item.data().subject
            secoundCell.textContent = item.data().grade
            gpa += ((item.data().grade) * (item.data().credit))
            credit += item.data().credit
        })
        console.log(gpa/credit)
        $('h4').text(gpa/credit)
    })
*/

// index.js
//let firebaseConfig = {
 //   apiKey: "AIzaSyBzfdUNQR9e0fVLbnSA_eSva6oP3feq9HI",
 //   authDomain: "localhost",
 //   projectId: "database-2d6f4",
//};
// Initialize Firebase
let firebaseConfig = {
    apiKey: "AIzaSyBzfdUNQR9e0fVLbnSA_eSva6oP3feq9HI",
    authDomain: "localhost",
    projectId: "database-2d6f4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();




$('button').click(() => {

    
    if ($('#firstname').val()==='') {
        alert('Please input your FirstName !');
        document.myForm.firstname.focus();
    
    }

    else if ($('#lastname').val()==='') {
        alert('Please input your LastName !');
        document.myForm.lastname.focus();
     
    }
    else if($('#gender').val()===''){
        alert('please choose yours gender.');
        document.myForm.gender.focus();
    }
    else if ( $('#email').val()==='') {
        alert('Please input your Email !');
        document.myForm.email.focus();
      
    }
    else if ( validateEmail($('#email').val())===false) {
        alert('Email is not correct!');
        document.myForm.email.focus();
      
    }

    else if ( $('#massage').val() === '') {
        alert('Please input your Massage !');
        document.myForm.massage.focus();
       

    }else{
    db.collection("USers").add({
        firstname: $('#firstname').val(),
        lastname: $('#lastname').val(),
        gender: Number($('#gender').val()),
        email: $('#email').val(),
        massage: $('#massage').val(),
          
            
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $('#firstname').val(' ')
            $('#lastname').val(' ')
            $('#gender').val(' ')
            $('#email').val(' ')
            $('#massage').val(' ')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }
});




db.collection("USers").onSnapshot(doc=>{
    let table = $('tbody')[0]
   Male=0;
   Female=0;
   Other=0;
   SumG=0;
   
    $("tbody tr").remove();
    
    doc.forEach(item=>{
        let row= table.insertRow(-1)
        let firstcell =row.insertCell(0)
        let secondcell =row.insertCell(1)
        let thirdcell =row.insertCell(2)
        let fourthcell = row.insertCell(3)
        let fifthcell = row.insertCell(4)
        firstcell.textContent=item.data().firstname
        secondcell.textContent=item.data().lastname
        thirdcell.textContent=GString(item.data().gender)
        fourthcell.textContent=item.data().email
        fifthcell.textContent=item.data().massage
        if(item.data().gender==1){
            Male+=1;
            SumG+=1;
        }else if(item.data().gender==2){
            Female+=1;
            SumG+=1;
        }
        else if(item.data().gender==3){
            Other+=1;
            SumG+=1;
        }else{
            SumG=1;
        }
     
    })
   console.log()
    $('h4').text("Male: "+(Male*100/SumG)+"%    "+"Female: "+Female*100/SumG+"%     "+"Other: "+Other*100/SumG+"%    ")
})


let validateEmail = (email) => {
    atpos = email.indexOf('@');
    dotpos = email.lastIndexOf('.');

    if (atpos < 1 || (dotpos-atpos) < 2) {
        document.myForm.email.focus();
        return false;
    }
    return true;
}

function GString(score){
    
    if(score==1){
    score = 'Male';
    }
    else if(score==2){
    score = 'Female';
    }
    else if(score==3){
    score = 'Other';
    }
    return score;
}
