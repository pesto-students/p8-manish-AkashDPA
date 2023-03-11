/**
 * Problem 10.5:
 * Find the Town JudgeIn a town, there are n people labeled from 1 to n.
 * There is a rumor that one of thesepeople is secretly the town judge.
 * 
 * 
 * If the town judge exists, then: 1. The town judge trusts nobody. 2. Everybody (except forthe town judge) trusts the town judge. 3.
 * There is exactly one person that satisfies properties 1 and 2.
 * 
 * You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. 
 * Return the label of the town judge if the town judge existsand can be identified, or return -1 otherwise.
 */


let n = 3;
let trust = [
   [1, 3],
   [2, 3],
];

let townJudge = (n, trust) => {
   const trusted = new Array(n + 1).fill(0);
 
   for (let [i, j] of trust) {
     trusted[i]--;
     trusted[j]++;
   }
 
   for (let i = 1; i < trusted.length; i++) {
     if (n - 1 === trusted[i]) {
       return i;
     }
   }
   return -1;
};
 
let res = townJudge(n, trust);
console.log(res);
