/**
 * @param {number[]} light
 * @return {number}
 */

/*
  打开某盏灯的时候判断是够全为蓝灯的条件：
  打开的这盏灯的时候，算上这盏灯以及在它之前打开的所有灯之中最大编号的灯必须为灯的数量
  
  举例说明：
  [3,2,4,1,5]
  
  1. 打开 3 的时候，算上 3 ，此时一共打开灯的数量是 1，最大的灯(最后面的一盏灯)是 3
     不满足条件，因为最后一盏灯是 3，那么此时需要打开灯数量为 3 才对，是 1，显然不行
  2. 打开 2 的时候，此时共打开了 2 盏灯，最后一盏灯是 3，不满足，因为数量是 3 才可以
     保证所有灯全亮
  3. 打开 4 的时候，此时共打开了 3 盏灯，最后一盏灯是 4，不满足，因为数量是 4 才可以
     保证所有灯全亮
  4. 打开 1 的时候，此时共打开了 4 盏灯，最后一盏灯是 4，满足，因为打开了 4 盏灯，
     并且最后一盏灯是 4，说明 1 2 3 4 全亮，符合条件
  5. 打开 5 的时候，此时共打开了 5 盏灯，最后一盏灯是 5，满足，因为打开了 5 盏灯，
     并且最后一盏灯是 5，说明 1 2 3 4 5 全亮，符合条件
*/
var numTimesAllBlue = function (light) {
  let count = 0, max = -Infinity;

  for (let i = 0; i < light.length; i++) {
    max = Math.max(max, light[i]);
    if (max === i + 1) {
      count++;
    }
  }

  return count;
};