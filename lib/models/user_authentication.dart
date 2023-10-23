class UserAuthentication {
  final String email;
  final String password;
  final String? referral;

  UserAuthentication({
    required this.email,
    required this.password,
    this.referral,
  });
}
