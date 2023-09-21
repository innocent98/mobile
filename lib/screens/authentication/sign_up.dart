import 'package:flutter/material.dart';
import 'package:zealworkers_token/screens/authentication/sign_in.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/button_icon.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
import '../../constants/colors.dart' as app_color;

class SignUp extends StatelessWidget {
  SignUp({super.key});

  final TextEditingController email = TextEditingController();
  final TextEditingController password = TextEditingController();
  final TextEditingController confirmPassword = TextEditingController();

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

    return Container(
      color: app_color.white,
      child: SafeArea(
          child: Scaffold(
        backgroundColor: app_color.white,
        body: SizedBox(
          height: screenHeight,
          width: screenWidth,
          child: Expanded(
            child: SingleChildScrollView(
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
                          const TextForm(
                              // controller: email,
                              keyboardType: TextInputType.emailAddress,
                              labelText: 'Referral Code (Optional)',
                              labelColor: app_color.black),
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
                                          builder: (context) => SignIn()));
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
                              onPressed: () {
                                if (formKey.currentState!.validate()) {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => SignIn()));
                                }
                              },
                              buttonColor: app_color.primary,
                              buttonText: 'Sign Up',
                              textColor: app_color.white),
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
          ),
        ),
      )),
    );
  }
}
