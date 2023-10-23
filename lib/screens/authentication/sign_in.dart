import 'package:flutter/material.dart';
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/constants/tab/tab.dart';
import 'package:zealworkers_token/models/user_authentication.dart';
import 'package:zealworkers_token/screens/authentication/forgot_password.dart';
import 'package:zealworkers_token/screens/authentication/sign_up.dart';
import 'package:zealworkers_token/services/auth_service.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/button_icon.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
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
    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

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
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(message),
            duration: const Duration(seconds: 3),
            backgroundColor: app_color.green,
          ),
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

        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) => MainTab(token: userToken)));
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
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              height: screenHeight * 0.08,
            ),
            TextWidget(
              text: 'Sign In',
              textColor: app_color.black,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w800,
              fontSize: screenWidth * 0.06,
            ),
            TextWidget(
              text: 'Welcome Back!',
              textColor: app_color.grey,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w500,
              fontSize: screenWidth * 0.04,
            ),
            SizedBox(
              height: screenHeight * 0.1,
            ),
            Form(
              key: formKey,
              child: Column(
                children: [
                  TextForm(
                    controller: email,
                    keyboardType: TextInputType.emailAddress,
                    labelText: 'Email',
                    labelColor: app_color.black,
                  ),
                  SizedBox(
                    height: screenHeight * 0.03,
                  ),
                  TextForm(
                    controller: password,
                    keyboardType: TextInputType.visiblePassword,
                    labelText: 'Password',
                    labelColor: app_color.black,
                    obscureText: true,
                  ),
                  SizedBox(
                      width: screenWidth * 0.8,
                      child: InkWell(
                        onTap: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => ForgotPassword()));
                        },
                        child: TextWidget(
                          text: 'Forgot Password?',
                          textColor: app_color.grey,
                          textAlign: TextAlign.right,
                          fontWeight: FontWeight.w600,
                          fontSize: screenWidth * 0.03,
                        ),
                      )),
                  SizedBox(
                    height: screenHeight * 0.03,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      TextWidget(
                          text: 'Don’t have an account?',
                          textColor: app_color.black,
                          textAlign: TextAlign.center,
                          fontWeight: FontWeight.w600,
                          fontSize: screenWidth * 0.03),
                      InkWell(
                        onTap: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => const SignUp()));
                        },
                        child: TextWidget(
                            text: ' Sign Up',
                            textColor: app_color.link,
                            textAlign: TextAlign.center,
                            fontWeight: FontWeight.w600,
                            fontSize: screenWidth * 0.03),
                      )
                    ],
                  ),
                  SizedBox(
                    height: screenHeight * 0.01,
                  ),
                  Button(
                      onPressed: onSubmit,
                      buttonColor: app_color.primary,
                      buttonText: 'Sign In',
                      textColor: app_color.white),
                ],
              ),
            ),
            SizedBox(
              height: screenHeight * 0.08,
            ),
            TextWidget(
                text: 'Or sign up with',
                textColor: app_color.grey,
                textAlign: TextAlign.center,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.03),
            SizedBox(
              height: screenHeight * 0.05,
            ),
            ButtonIcon(
              buttonColor: app_color.white,
              buttonText: 'Facebook',
              textColor: app_color.black,
              borderColor: app_color.grey,
              image: 'assets/img/fb.png',
              onPressed: () {},
            ),
            SizedBox(
              height: screenHeight * 0.02,
            ),
            ButtonIcon(
              buttonColor: app_color.white,
              buttonText: 'Google',
              textColor: app_color.black,
              borderColor: app_color.grey,
              image: 'assets/img/gg.png',
              onPressed: () {},
            ),
            SizedBox(
              height: screenHeight * 0.06,
            ),
          ],
        ),
      ),
    );
  }
}
