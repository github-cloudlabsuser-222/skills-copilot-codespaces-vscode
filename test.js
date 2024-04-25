const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
            let result;
            switch(operation) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case '/':
                    if(secondNumber != '0') {
                        result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    } else {
                        console.log('Error: Division by zero is not allowed.');
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log('Error: Invalid operation. Only +, -, *, / are allowed.');
                    rl.close();
                    return;
            }
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});

const readline = require('readline');

jest.mock('readline');

describe('Calculator', () => {
    let mockOutput;
    let mockClose;

    beforeEach(() => {
        mockOutput = new jest.fn();
        mockClose = new jest.fn();

        readline.createInterface.mockReturnValue({
            question: (query, callback) => {
                if (query.includes('operation')) {
                    callback('+');
                } else {
                    callback('2');
                }
            },
            output: {
                write: mockOutput
            },
            close: mockClose
        });
    });

    it('should perform addition correctly', () => {
        require('./calculator');
        expect(mockOutput).toHaveBeenCalledWith('The result is: 4\n');
    });
});