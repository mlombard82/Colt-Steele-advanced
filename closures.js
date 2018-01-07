function classroom  (){
    var instructors = ['Elie', 'Colt'];

    return {
        getInstructors: function(){
            return instructors.slice();
        },

        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors.slice();
        }
    }
}


var course1 = classroom();

course1.getInstructors().pop();
course1.getInstructors().pop();

course1.getInstructors();   