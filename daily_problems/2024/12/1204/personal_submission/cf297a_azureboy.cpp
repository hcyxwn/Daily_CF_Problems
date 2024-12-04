#include <bits/stdc++.h>
#define int long long
using namespace std;
void solve() {
	string a, b;
	cin >> a >> b;
	int n = a.size();
	int m = b.size();
	int x = 0;
	for (auto c : a) {
		x += (c == '1');
	}
	if (x % 2) {
		x++;
		a += "1";
		n++;
	}
	bool ok = false;
	int i = 0;
	for (int k = 0; k < m; k++) {
		char c = b[k];
		if (c == '0') {
			if (x % 2 == 0) {
				continue;
			}
			while (i <= n - 1 && a[i] == '0') {
				i++;
			}
			if (i <= n - 1 && a[i] == '1') {
				i++;
				x--;
			} else {
				ok = true;
			}
		} else {
			if (x % 2 == 1) {
				x++;
				continue;
			}
			while (i <= n - 1 && a[i] == '0') {
				i++;
			}
			if (i <= n - 1 && a[i] == '1') {
				i++;
			} else {
				ok = true;
			}
		}
	}
	cout << ((!ok) ? "YES\n" : "NO\n");
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
