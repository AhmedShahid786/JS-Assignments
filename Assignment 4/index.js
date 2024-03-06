        //Task 1:
        console.log("Task 1: ")
        for (var i = 1; i <= 5; i++){
            console.log(i);
        }

        //Task 2:
        console.log("Task 2: ")
        var sum = 0;
        for (var b = 1; b <= 10; b++){
            sum = sum + b;
        }
        console.log('The Sum Of All The Numbers Is ' + sum);

        //Task 3:
        console.log("Task 3: ")

        for (c = 10; c >= 1; c--){
            console.log(c);
        }

        //Task 4:
        console.log("Task 4: ")

        var num =prompt("Enter A Number To See It's Table");
            console.log("Table Of " + num + ":");
        for (var d = 1; d <=10; d++){
            var mult = num * d;
            console.log(mult);
        }

        //Task 5:
        /*
        SUMMARY: 
        first of all, 'for' loop consists of 4 steps:

        1. initialization
        2. condition
        3. statement or block
        4. updation

        according to my understanding of for loops, the operating pattern of for loops is that first we     have to write the given syntax. Then in thenround brackets, we have to initialize a local variable to use in for loop, then after initializatio, we have to make a condition and after it we can proceed to updation while in the curly brackets, we have to write the code we want to run in the loop. The significance of for loop is that if we want to run a command repeatedly, for loop makes it easier. Instead of you writing the same code again and again, you can use the for loop.
        */

        //Task 6:
        console.log("Task 6: ")
        var star = '*';
        var star2 = "*";
        for (var r = 1; r <= 5; r++){
            console.log(star);
            star = star + star2;
        }