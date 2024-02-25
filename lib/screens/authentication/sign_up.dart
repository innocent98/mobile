import 'package:flutter/material.dart';
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/models/user_authentication.dart';
import 'package:zealworkers_token/screens/authentication/sign_in.dart';
import 'package:zealworkers_token/services/auth_service.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/button_icon.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
import '../../constants/colors.dart' as app_color;

class SignUp extends StatefulWidget {
  const SignUp({super.key});

  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  final TextEditingController email = TextEditingController();

  final TextEditingController password = TextEditingController();

  final TextEditingController confirmPassword = TextEditingController();

  final TextEditingController referralCode = TextEditingController();

  final formKey = GlobalKey<FormState>();

  bool loading = false;

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

        Navigator.push(
            context, MaterialPageRoute(builder: (context) => const SignIn()));
      },
      onLoading: (isLoading) {
        setState(() {
          loading = isLoading;
        });
      },
      userToken: (String token) {},
    );

    final onSubmit = loading
        ? null
        : () async {
            if (formKey.currentState!.validate()) {
              if (password.text != confirmPassword.text) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content:
                        Text('Password and Confirm Password do not match.'),
                    duration: Duration(seconds: 3),
                    backgroundColor: Colors.red,
                  ),
                );
              } else {
                final userData = UserAuthentication(
                  email: email.text,
                  password: password.text,
                  referralCode: referralCode.text,
                );

                await userRegistrationService.registerUser(userData.email,
                    userData.password, userData.referralCode, regRoute);
              }
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
              text: 'Sign Up',
              textColor: app_color.black,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w800,
              fontSize: screenWidth * 0.06,
            ),
            TextWidget(
              text: 'Create Account with Zealworkers',
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
                        labelColor: app_color.black),
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
                      height: screenHeight * 0.03,
                    ),
                    TextForm(
                      controller: confirmPassword,
                      keyboardType: TextInputType.visiblePassword,
                      labelText: 'Confirm Password',
                      labelColor: app_color.black,
                      obscureText: true,
                    ),
                    SizedBox(
                      height: screenHeight * 0.03,
                    ),
                    TextForm(
                        controller: referralCode,
                        keyboardType: TextInputType.text,
                        labelText: 'Referral Code (Optional)',
                        labelColor: app_color.black,
                        isRequired: false),
                    SizedBox(
                      height: screenHeight * 0.03,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        TextWidget(
                            text: 'Already have an account?',
                            textColor: app_color.black,
                            textAlign: TextAlign.center,
                            fontWeight: FontWeight.w600,
                            fontSize: screenWidth * 0.03),
                        InkWell(
                          onTap: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => const SignIn()));
                          },
                          child: TextWidget(
                              text: ' Log In',
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
                      buttonText: 'Sign Up',
                      textColor: app_color.white,
                    ),
                    SizedBox(
                      height: screenHeight * 0.01,
                    ),
                    Padding(
                      padding: EdgeInsets.fromLTRB(
                          screenWidth * 0.09, 0, screenWidth * 0.09, 0),
                      child: TextWidget(
                          text:
                              'By continuing you agree to our Terms and Conditions and Privacy Policy',
                          textColor: app_color.grey,
                          textAlign: TextAlign.center,
                          fontWeight: FontWeight.w600,
                          fontSize: screenWidth * 0.03),
                    ),
                  ],
                )),
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
