module.exports = function main(inputs) {
    console.log("Debug Info");

    var output = '***<store earning no money>Receipt ***';
    var name; 
    var quantity;
    var unit_price;
    var subtotal; 
    var prev_name = " ";
    var curr_name = " ";
    var cur_price;
    var prev_price;
    var count = 0;
    var count2 = 0;
    var count3 = 0;
    var total_price;

    inputs.forEach(input => {
        curr_name = input.Name;
        curr_price = input.Price;
            if (prev_name == null) {
                prev_name = curr_name;
                prev_price = curr_price;
               if (curr_name == prev_name) {
                    count = count + 1;
                    total_price = prev_price + curr_price;
                    console.log(output);
                    console.log("Name: " + curr_name + " Quantity: " + count + " " + input.Unit + ", Unit price: " + total_price + "(yuan)," + " Subtotal: " + total_price + "(yuan)");
                    console.log(count);
                }

            }
    });
};



// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)
// Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)
// ----------------------
// Total: 23.00 (yuan)
// **********************

//        if (curr_name == 'Coca-Cola'){
//            prev_price = curr_price;
//            count = count + 1;
//
//        }
//        else if (curr_name == 'Sprite'){
//            count2 = count2 + 1;
//        }
//         else if (curr_name == 'battery'){
//            count3 = count3 + 1;
//         }
//
//        console.log(output);
//        console.log("Name: " + curr_name + " Quantity: " + count + " " + input.Unit + ", Unit price: " );
//        console.log("Name: " + curr_name + " Quantity: " + count2 + " " + input.Unit + ", Unit price: " );
//        console.log("Name: " + curr_name + " Quantity: " + count3 + " " + input.Unit + ", Unit price: " );

//         console.log(count);
//         console.log(count2);
//         console.log(count3);

