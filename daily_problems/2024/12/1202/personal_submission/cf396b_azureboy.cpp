#include <bits/stdc++.h>
#define int long long
using namespace std;
using i64 = long long;
using u64 = unsigned long long;
using u32 = unsigned;
template<class T>
struct Frac {
	T num;
	T den;
	Frac(T num_, T den_) : num(num_), den(den_) {
		if (den < 0) {
			den = -den;
			num = -num;
		}
	}
	Frac() : Frac(0, 1) {}
	Frac(T num_) : Frac(num_, 1) {}
	explicit operator double() const {
		return 1. * num / den;
	}
	Frac &operator+=(const Frac &rhs) {
		num = num * rhs.den + rhs.num * den;
		den *= rhs.den;
		return *this;
	}
	Frac &operator-=(const Frac &rhs) {
		num = num * rhs.den - rhs.num * den;
		den *= rhs.den;
		return *this;
	}
	Frac &operator*=(const Frac &rhs) {
		num *= rhs.num;
		den *= rhs.den;
		return *this;
	}
	Frac &operator/=(const Frac &rhs) {
		num *= rhs.den;
		den *= rhs.num;
		if (den < 0) {
			num = -num;
			den = -den;
		}
		return *this;
	}
	friend Frac operator+(Frac lhs, const Frac &rhs) {
		return lhs += rhs;
	}
	friend Frac operator-(Frac lhs, const Frac &rhs) {
		return lhs -= rhs;
	}
	friend Frac operator*(Frac lhs, const Frac &rhs) {
		return lhs *= rhs;
	}
	friend Frac operator/(Frac lhs, const Frac &rhs) {
		return lhs /= rhs;
	}
	friend Frac operator-(const Frac &a) {
		return Frac(-a.num, a.den);
	}
	friend bool operator==(const Frac &lhs, const Frac &rhs) {
		return lhs.num * rhs.den == rhs.num * lhs.den;
	}
	friend bool operator!=(const Frac &lhs, const Frac &rhs) {
		return lhs.num * rhs.den != rhs.num * lhs.den;
	}
	friend bool operator<(const Frac &lhs, const Frac &rhs) {
		return lhs.num * rhs.den < rhs.num * lhs.den;
	}
	friend bool operator>(const Frac &lhs, const Frac &rhs) {
		return lhs.num * rhs.den > rhs.num * lhs.den;
	}
	friend bool operator<=(const Frac &lhs, const Frac &rhs) {
		return lhs.num * rhs.den <= rhs.num * lhs.den;
	}
	friend bool operator>=(const Frac &lhs, const Frac &rhs) {
		return lhs.num * rhs.den >= rhs.num * lhs.den;
	}
	// 输出格式
	friend ostream &operator<<(ostream &os, Frac x) {
		T g = gcd(x.num, x.den);
		if (x.den == g) {
			return os << x.num / g;
		} else {
			return os << x.num / g << "/" << x.den / g;
		}
	}
	// Frac<int>ans = {1, 2};
};
void solve() {
	int n;
	cin >> n;
	auto check = [&](int x) {
		if (x <= 1)return false;
		for (int i = 2; i <= sqrt(x); i++) {
			if (x % i == 0)return false;
		}
		return true;
	};
	int x = n;
	while (!check(x))x--;
	int y = n + 1;
	while (!check(y))y++;
	int fm = x * y - 2 * y + 2 * (n - x + 1);
	int fz = 2 * x * y;
	Frac<int>ans = {fm, fz};
	cout << ans << "\n";
}
signed main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int T = 1;
	cin >> T;
	while (T--) {
		solve();
	}
	return 0;
}
