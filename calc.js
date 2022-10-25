function akanNames() {
  /*WORKING LIST */

  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //List of days of the week
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //List of female names
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //List of male names

  /*USER GUIDE*/
  var dateInput = prompt("Enter date of birth (YYYY-MM-DD):");

  /*DATE VARIABLES*/
  var birthDate = new Date(dateInput);//uses the variable dateInputfrom the user to create a calender date
  var exactdate = birthDate.getDay();//pick the day from the date object
  var birthMonth = birthDate.getMonth();//picks the month from the object
  var birthYear = birthDate.getFullYear();// picks the month from the object

  /*ACCESS THE NAME LIST BY DATES*/
  var genderFemale = femaleNames[exactdate];
  var genderMale = maleNames[exactdate];

  /*TO CAPTURE WRONG DATES*/
  if (

    exactdate >= 0 &&
    exactdate <= 7 &&
    birthMonth >= 0 &&
    birthMonth <= 12 &&
    dateInput.length === 10 &&
    birthYear >= 1000
  ) {

    var sex = prompt("Enter your Gender (M/F):").toUpperCase(); //takes the user gender and convert it to toUpperCase
    /* TO CAPTURE WRONG GENDER*/

    if (sex === "M" || sex === "F" || sex === "MALE" || sex === "FEMALE") {

      if (sex === "M") {
        document.getElementById("myFeedback").innerHTML = "Your Akan name is " + genderMale;
        // alert("Your Akan name is " + genderMale);

      }

      else {
        document.getElementById("myFeedback").innerHTML = "Your Akan name is " + genderFemale;
        // alert("Your Akan name is " + genderFemale);
      }

    }
    else {
      alert("Invalid Gender use F/M");
    }
  }
  else {
    alert("WRONG DATE FORMAT. PLEASE USE YYYY-MM-DD\nExample: 2022-10-23");
  }
}

