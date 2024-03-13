/**
* Function to convert a given number into words.
* @param {number} n - The number to be converted into words.
* @returns {string} - The word representation of the given number.
*/

export const numberToWords = (num:number) => {
    num = Math.floor(num); // Remove the decimal part of the number
    // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
    const single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    const double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    const below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    
    if (num === 0) return 'Zero';
    
    // Recursive function to translate the number into words
    function translate(n: number = num): string {
        let word = "";
        if (n < 10) {
            word = single_digit[n] + ' ';
        } else if (n < 20) {
            word = double_digit[n - 10] + ' ';
        } else if (n < 100) {
            let rem = translate(n % 10);
            word = below_hundred[(n - n % 10) / 10 - 2] + (rem ? ' ' + rem : ''); // Check if rem is numt empty before adding it
        } else if (n < 1000) {
            let rem = translate(n % 100);
            word = single_digit[Math.trunc(n / 100)] + ' Hundred' + (rem ? ' ' + rem : ''); // Check if rem is numt empty before adding it
        } else if (n < 1000000) {
            word = translate(Math.trunc(n / 1000)) + ' Thousand ' + translate(n % 1000);
        } else if (n < 1000000000) {
            word = translate(Math.trunc(n / 1000000)) + ' Million ' + translate(n % 1000000);
        } else {
            word = translate(Math.trunc(n / 1000000000)) + ' Billion ' + translate(n % 1000000000);
        }
        return word.trim();
    }
    
    
    // Get the result by translating the given number
    let result = translate(num);
    return result.trim() + '.';
}
