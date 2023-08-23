#include <bits/stdc++.h>
using namespace std;

void printVector<vector<int> &nums){
cout << "Elements of nums: ";
for(int &i:nums) cout << i << " ";
};

int main(){
vector<int> num = {10,9,8,7,6,5,4,3,2,1,0};
sort(nums.begin(),nums.end());
printVector(num);
return 0;
}