let firstName = prompt ("What is your first name?");
let Name = "Welcome" + " " + firstName + ", " + "click the 'Into The Spaceverse' button to continue" ;
alert(Name);
         
        function spaceVerse() {
                let city = prompt ("What is your city");
                let age = prompt("What is your age?");
              

             if (age >= 18){
                let h1 = document.querySelector("h1");
                h1.innerHTML = "Hi " + firstName + "! Welcome to Spaceverse!🛸";
             }
             if (age < 18) {
                 let h1 = document.querySelector("h1");
                 h1.innerHTML = "Oh no," + " " + firstName + "! Maybe next time...🤗🐱‍🚀";  
            }
        }
    
             let spaceVerseButton = document.querySelector("button");
             spaceVerseButton.addEventListener("click", spaceVerse);
       