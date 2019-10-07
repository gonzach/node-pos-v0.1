var product = [];
module.exports = function main(inputs) {
    return printReceipt(inputs);
};

var output = '***<store earning no money>Receipt ***\n';
function printReceipt(inputs){
    product = inputs;
    var barcode_item = get_barcode();
    var price_item = get_price();
    var quantity;
    var finalString = "";
    var count = 0;
    var subtotal = 0;
    inputs.forEach((element)=>{
        if (element.Barcode === Object.keys(barcode_item)[count]) {
            if (Object.values(barcode_item)[count] > 1){
                    quantity = Object.values(barcode_item)[count] + ' bottles';
            } else {
                quantity = Object.values(barcode_item)[count];
            }
            finalString += "Name: " + element.Name +
            ", Quantity: " + quantity +
            ", Unit price: " + Object.values(price_item)[count].toFixed(2) +
            " (yuan), Subtotal: " + (Object.values(price_item)[count] * Object.values(barcode_item)[count]).toFixed(2)+
            " (yuan)\n";
            subtotal = Object.values(price_item)[count] * Object.values(barcode_item)[count] + subtotal;
            count++;
        }
    });
    finalString += '----------------------\n' + 'Total: ' + subtotal.toFixed(2) + ' (yuan)\n' + '**********************\n';
    console.log(output + finalString);
    return (output + finalString);
}

function get_barcode(){
    var item_count = {};
    product.forEach((count_barcode)=>{
    item_count[count_barcode.Barcode] = item_count[count_barcode.Barcode] + 1 || 1
    });
    return item_count;
}

function get_price(){
    var item_count = {};
    product.forEach((count_price)=>{
    item_count[count_price.Barcode] = count_price.Price;
    });
    return item_count;
}