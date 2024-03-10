const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const err001 = document.querySelector("#err001");
const err002 = document.querySelector("#err002");
const err003 = document.querySelector("#err003");
const submit = document.querySelector("#submit");
const dynamic = document.querySelector(".dynamic");
const overlay = document.querySelector(".button-overlay");
const img = document.querySelector("img");
const parody = document.querySelector(".parody");
const monthinput = document.querySelector("#month-input");
const dayinput = document.querySelector("#day-input");
const yearinput = document.querySelector("#year-input");
const current = new Date();
const yearconvert = document.querySelector("#year-convert");
const monthconvert = document.querySelector("#month-convert");
const daysconvert = document.querySelector("#days-convert");
const dash1 = document.querySelector(".dash1");
const dash2 = document.querySelector(".dash2");




// limiting numbers input
dayinput.addEventListener("input", function() {
    if (this.value > 2) {
        this.value = this.value.slice(0,2);
    }
})

monthinput.addEventListener("input", function() {
    if (this.value > 2) {
        this.value = this.value.slice(0,2);
    }
})

yearinput.addEventListener("input", function() {
    if (this.value > 4) {
        this.value = this.value.slice(0,4);
    }
})

// Checking day inputs
function checkday() {
    let p = dayinput.value;
    let z = monthinput.value;
    if (p.trim() === "") {
        err001.innerHTML = "This field is required";
        dayinput.style.border = "2px solid red";
        err001.style.display = "block";
        day.style.color = "red";
        setTimeout(function() {
            err001.style.display = "";
            dayinput.style.border = "";
            err001.innerHTML = "";
        day.style.color = "";
          }, 5000);
          return false
    }
    else if((p <1) || (p> 31)){
        err001.innerHTML = "Must be a valid day";
        dayinput.style.border = "2px solid red";
        err001.style.display = "block";
        day.style.color = "red";
        setTimeout(function() {
            err001.style.display = "";
            dayinput.style.border = "";
            err001.innerHTML = "";
        day.style.color = "";
          }, 5000);
          return false
    }
    else if (((p==31) && ((z==4) ||(z==6) ||(z==9)|| (z==11))) || ((p>29) && (z==2)) ) {
        err001.innerHTML = "Must be a valid date";
        dayinput.style.border = "2px solid red";
        err001.style.display = "block";
        day.style.color = "red";
        setTimeout(function() {
            err001.style.display = "";
            dayinput.style.border = "";
            err001.innerHTML = "";
        day.style.color = "";
          }, 5000);
          return false
    }
    else return true
}

// checking month inputs
function checkmonth() {
    let p = monthinput.value;
    if (p.trim() === "") {
        err002.innerHTML = "This field is required";
        monthinput.style.border = "2px solid red";
        err002.style.display = "block";
        month.style.color = "red";
        setTimeout(function() {
            err002.style.display = "";
            monthinput.style.border = "";
            err002.innerHTML = "";
        month.style.color = "";
          }, 5000);
          return false
    }
    else if((p>12) || (p<1)){
        err002.innerHTML = "Must be a valid month";
        monthinput.style.border = "2px solid red";
        err002.style.display = "block";
        month.style.color = "red";
        setTimeout(function() {
            err002.style.display = "";
            monthinput.style.border = "";
            err002.innerHTML = "";
        month.style.color = "";
          }, 5000);
          return false
    }
    else return true
}

// Checking year inputs
function checkyear() {
    let p = yearinput.value;
    let d = current.getFullYear()
    if (p.trim() === "") {
        err003.innerHTML = "This field is required";
        yearinput.style.border = "2px solid red";
        err003.style.display = "block";
        year.style.color = "red";
        setTimeout(function() {
            err003.style.display = "";
            yearinput.style.border = "";
            err003.innerHTML = "";
        year.style.color = "";
          }, 5000);
          return false
    }
    else if (p > d) {
        err003.innerHTML = "Must be a valid year";
        yearinput.style.border = "2px solid red";
        err003.style.display = "block";
        year.style.color = "red";
        setTimeout(function() {
            err003.style.display = "";
            yearinput.style.border = "";
            err003.innerHTML = "";
        year.style.color = "";
          }, 5000);
          return false
    }
    else return true;
}

// Function to calculate age
function calculateAge() {
    // Get the input values
    let inputDay = parseInt(dayinput.value);
    let inputMonth = parseInt(monthinput.value);
    let inputYear = parseInt(yearinput.value);
  
  
    // Calculate the age
    let ageInYears = current.getFullYear() - inputYear;
    let ageInMonths = current.getMonth() + 1 - inputMonth;
    let ageInDays = current.getDate() - inputDay;
  
    // Adjust age based on negative values
    if (ageInDays < 0) {
      ageInMonths--;
      const daysInLastMonth = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
      ageInDays += daysInLastMonth;
    }
  
    if (ageInMonths < 0) {
      ageInYears--;
      ageInMonths += 12;
    }
  
    // get rid of those dashes
    dash1.style.display = "none";
    dash2.style.display = "none";
    // Display the age in the .dynamic element
    yearconvert.innerHTML = `${ageInYears} `;
    monthconvert.innerHTML = `${ageInMonths}`;
    daysconvert.innerHTML = `${ageInDays}`;
  }
  


// Final click
parody.addEventListener('click', function () {
    let cday = checkday();
   let cmonth = checkmonth();
    let cyear = checkyear();

    if (cday && cmonth && cyear){
        calculateAge();
    }
});

