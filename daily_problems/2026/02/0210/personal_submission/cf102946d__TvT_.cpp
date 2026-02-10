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

    vector<int> cnt(n + 1);
    int mxc = 0;

    auto ask = [&](int x, int y) {
        cout << "? " << x << " " << y << endl;
        int mx;
        cin >> mx;
        return mx == n;
    };

    vector<int> v;

    for (int i = 0; i < n; i++) {
        if (ask(0, i)) {
            v.push_back(i);
        }
    }
    int L = 0;
    int R = 0;

    if (v.size() == 1) {
        R = v[0];
        for (int i = 0; i < n; i++) {
            if (ask(i, (R + 1) % n)) {
                L = i;
                break;
            }
        }
    } else {
        L = 0;
        for (int i = 0; i < n; i++) {
            if (ask(1, i)) {
                R = i;
                break;
            }
        }
    }

    if (L <= R) {
        cout << "! " << R - L << endl;
    } else {
        cout << "! " << (R - L + n) % n << endl;
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
