function maxArea(height: number[]): number {
	let maxArea = 0;
	let left = 0;
	let rig = height.length - 1;
		        
	while (left < rig) {
		const minHeight = Math.min(height[left], height[rig]);
		const currentArea = minHeight * (rig - left);
		maxArea = Math.max(maxArea, currentArea);
							        
		if (height[left] < height[rig]) {
			left++;
		} else {
			rig:--;
		}
	}
															       
	return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7])); 
console.log(maxArea([1,1])); 
