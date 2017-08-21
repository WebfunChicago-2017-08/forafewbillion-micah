function aFewBillion(){
    var total = 0;
    var paymentCents = 1;

    for(var days = 1; days <= 30; days++){
        console.log("Today's payment is $" + (paymentCents/100));
        total += paymentCents;
        console.log("Total earnings so far is $" + (total/100));
        paymentCents *= 2;
        console.log("It has been", days, "day(s).");
        console.log("Tomorrow's payment will be $" + (paymentCents/100));
        console.log("===============================");

    }
}

aFewBillion();
