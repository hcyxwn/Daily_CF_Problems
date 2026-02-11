#include <bits/stdc++.h>
#define int long long
using namespace std;

#ifdef LOCAL
#include "debug.cpp"
#else
#define debug(...) 42
#endif

void solve() {

	int n;
	cin >> n;
	int z = 0;
	for (int i = 1; i <= n; i++) {
		z ^= i;
	}
	if (z == 0) {
		cout << -1 << '\n';
		return ;
	}

	vector<int> a(n);
	iota(a.begin(), a.end(), 1);
	int res = 0;
	for (int i = 0; i < n; i++) {
		if ((res ^ a[i]) == 0) {
			swap(a[i], a[i + 1]);
		}
		res ^= a[i];
	}
	for (auto x : a) {
		cout << x << " ";
	}
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
