const totalHammingDistance = (nums) => {
  if(nums.length < 1){       
         return 0      
       }
    
      let dis = '';
      for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i; j < nums.length - 1; j++) {
          let x = nums[i] ^ nums[j+1];
            if(x > 0){
            let arr = x.toString(2)
            dis += x.toString(2)
            
          }
        }
    }
    var count = dis.match(/[1]/g)
    
    return count ? count.length : 0;
}

const hammingDistance = totalHammingDistance([2, 14, 4])
