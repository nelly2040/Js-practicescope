//create an object using a Factory function
function createEvent(eventsList){//...this is an object...eventName
    //initialize new event
    eventsList= [];

    return{//return two nested functions
        registerUser: (userName)=> {
            //add userName to eventsList
            eventsList.push(userName);
        },

        checkRegistration: (userName)=> {
            //returns whether that userName is registered for the event.
            /*
                iterate through the eventsList elements
                ...if the username is in the eventsList return true
                ..otherwise return false
            */
            for(let i= 0; i< eventsList.length; i++){
                if(eventsList[i]== userName){
                    return true;
                }
            }
            return false;
        }
    };
}

const event = createEvent("JavaScript Conference");
event.registerUser("Alice");
console.log(event.checkRegistration("Alice")); // Expected Result: true
console.log(event.checkRegistration("Bob")); // Expected Result: false