/**
 * 
 * Problem 7.4:
 * Parenthesis CheckerGiven an expression string x.
 * Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
 * For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
 * 
 */

function checkParenthesis(exp) {
    const openParenthesis = '({[';
    const stack = [];
    for (let paren of exp) {
        if (openParenthesis.includes(paren))
            stack.push(paren);
        else {
            switch (paren) {
                case ')':
                    if (stack.pop() != '(') return false;
                    break;
                case '}':
                    if (stack.pop() != '{') return false;
                    break;
                case ']':
                    if (stack.pop() != '[') return false;
                    break;
                default:
                    return 'not valid parenthesis';
            }
        }
    }
    return stack.length == 0;
}

const exp = '()[]{}'

console.log(checkParenthesis(exp))