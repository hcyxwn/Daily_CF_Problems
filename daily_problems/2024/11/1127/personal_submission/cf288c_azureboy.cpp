#include <bits/stdc++.h>
#define int long long
using namespace std;
struct custom_hash {
	static uint64_t splitmix64(uint64_t x) {
		// http://xorshift.di.unimi.it/splitmix64.c
		x += 0x9e3779b97f4a7c15;
		x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
		x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
		return x ^ (x >> 31);
	}
	// unordered_map<int,int,custom_hash>ma;
	size_t operator()(uint64_t x) const {
		static const uint64_t FIXED_RANDOM = chrono::steady_clock::now().time_since_epoch().count();
		return splitmix64(x + FIXED_RANDOM);
	}
};
void solve() {
	int n;
	cin >> n;
	vector<int>a(n + 1);
	unordered_map<int, int, custom_hash>ma;

	for (int i = n; i >= 0; i--) {
		if (a[i])continue;
		int z = 0;
		for (int j = 0; j < 31; j++) {
			if ((((i >> j) & 1) ^ 1) && z + (1 << j) <= i)z += (1 << j);
		}
		if (ma[z] == 0) {
			ma[z] = 1;
			a[i] = z;
			a[z] = i;
			ma[i] = 1;
		}
	}
	int sum = 0;
	for (int i = 0; i <= n; i++)sum += (i ^ a[i]);
	cout << sum << "\n";
	for (int i = 0; i <= n; i++)cout << a[i] << " ";

}
signed main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int T = 1;
	//cin >> T;
	while (T--) {
		solve();
	}
	return 0;
}
