const submit= () => {
//retrieve elements
const dateElement = document.getElementById("date")
const genderElement = document.getElementById("gender")
//const maleElement = document.getElementById("male")

//retrieving input values

const date = dateElement.value;
const gender = genderElement.value;
//const male = maleElement.value

const submit = [date,gender]


console.log(submit)

}