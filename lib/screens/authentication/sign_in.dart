import 'package:flutter/material.dart';
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/constants/tab/tab.dart';
import 'package:zealworkers_token/models/user_authentication.dart';
import 'package:zealworkers_token/screens/authentication/sign_in_comp.dart';
import 'package:zealworkers_token/services/auth_service.dart';
import '../../constants/colors.dart' as app_color;

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override
  State<SignIn> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  final TextEditingController email = TextEditingController();

  final TextEditingController password = TextEditingController();

  final formKey = GlobalKey<FormState>();

  bool loading = false;
  String userToken = '';

  @override
  Widget build(BuildContext context) {
    AuthService userRegistrationService = AuthService(
      onErrorMessage: (message) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(message),
            duration: const Duration(seconds: 3),
            backgroundColor: app_color.red,
          ),
        );
      },
      onSuccessMessage: (message) {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(builder: (context) => MainTab(token: userToken)),
        );
      },
      onLoading: (isLoading) {
        setState(() {
          loading = isLoading;
        });
      },
      userToken: (String token) {
        setState(() {
          userToken = token;
        });
      },
    );

    final onSubmit = loading
        ? null
        : () async {
            if (formKey.currentState!.validate()) {
              final userData = UserAuthentication(
                email: email.text,
                password: password.text,
              );

              await userRegistrationService.registerUser(
                  userData.email, userData.password, '', loginRoute);
            }
          };

    return Scaffold(
      backgroundColor: app_color.white,
      body: SingleChildScrollView(
        child: SignInComp(
          formKey: formKey,
          email: email,
          password: password,
          onSubmit: onSubmit,
          token: userToken,
          userRegistrationService: userRegistrationService,
          loading: loading,
        ),
      ),
    );
  }
}
