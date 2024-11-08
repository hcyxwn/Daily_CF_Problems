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
void solve()
{
	int n;
	cin >> n;
	vector<int>a(n);
	unordered_map<int, int, custom_hash>ma;
	for (int i = 0; i < n; i++)
	{
		cin >> a[i];
		ma[a[i]]++;
	}
	if (n == 4)
	{
		for (auto x : a)cout << x << " ";
		cout << "\n";
		return ;
	}
	for (auto [x, y] : ma)
	{
		if (y >= 4)
		{
			cout << x << " " << x << " " << x << " " << x << "\n";
			return ;
		}
	}

	vector<int>v;
	for (auto [x, y] : ma)
	{
		if (y >= 2)v.push_back(x);
	}
	sort(v.begin(), v.end());

	double mi = 1e18;
	int x = 0;
	int y = 0;
	for (int i = 1; i < v.size(); i++)
	{
		if (v[i] * 1.0 / v[i - 1] + v[i - 1] * 1.0 / v[i] < mi)
		{
			mi = v[i] * 1.0 / v[i - 1] + v[i - 1] * 1.0 / v[i];
			x = v[i];
			y = v[i - 1];
		}
	}
	cout << x << " " << y << " " << x << " " << y << "\n";
}
signed main()
{
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int T = 1;
	cin >> T;
	while (T--)
	{
		solve();
	}
	return 0;
}
