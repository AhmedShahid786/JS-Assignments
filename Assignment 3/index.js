            //Task 1:
            var fruits = ["apple", "banana", "orange", "grape"];
            //Fruits On Fruits Stand:
            console.log("Available Fruits: " + fruits);
            //First Customer Buys A fruits:
            fruits.pop();
            //Available Fruits After First Customer's Purchase:
            console.log("Fruits Available After First Purchase: " + fruits);

            //Second Customer Buys A fruits:
            fruits.pop();
            //Available Fruits After Second Customer's Purchase:
            console.log("Fruits Available After Second Purchase: " + fruits)
            //Adding Fruit Of Customer's Choice:
            var newFruit = prompt("Please Enter A Fruit Name.");
            //Available Fruits After Customer's Fruit Addition:
            fruits.push(newFruit);
            console.log("Fruits Available After Customer's Recommendation: " + fruits);

            //Task 2:
            //Remove The First Fruit From The List And Display It As A Newly Arrived Fruit:
            var newFruit = fruits.shift();
            console.log("The Newly Arrived Fruit Is: " + newFruit);
            //Updated Fruit's List:
            console.log("Upadted Inventory: " + fruits);
            //Prompt The User To Add A New Fruit At The Beginning:
            var usersFruit = prompt("Please Enter A Fruit Name (For Task 2)");
            fruits.push(usersFruit);
            console.log("Updated Inventory After User's Addition: " + fruits);

            //Task 3:
            //Creating Array For Numbers
            var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            console.log('Range Of Numbers: ' + nums);
            //Prompting User For Starting And Ending Indexes
            var startInd = prompt('Enter The Starting Index For Removal');
            var endInd = prompt('Enter Range Of Numbers You Want To Remove');
            //Using User Given Values From Variables To Identify Starting And Ending indexes
            nums.splice(startInd, endInd);
            //Display Updated Array
            console.log('Updated Array: ' + nums);

            //Task 4:
            //Re-assigning Array 
            var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            console.log('Range Of Numbers: ' + nums);
            //Prompt The User To Enter The Starting And Ending Indexes
            var ind1 =prompt('Enter The Starting Index For Slice');
            var ind2 =prompt('Enter The Ending Index For Slice');
            //Use The Entered Variable Values To Identify The Starting And Ending Indexes
            var resultDisplay = nums.slice(ind1,ind2);
            console.log('Extracted Slice: ' + resultDisplay);

            //Task 5:
            sum = nums[0] + nums[1] + nums[2] + nums[3] +nums[4] +nums[5] + nums[6] + nums[7] + nums[8] + nums[9];
            lngth = nums.length;
            avg = sum/lngth;
            console.log('The Average Of Array Is: ' + avg);
