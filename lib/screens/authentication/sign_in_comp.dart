import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/screens/authentication/forgot_password.dart';
import 'package:zealworkers_token/screens/authentication/sign_up.dart';
import 'package:zealworkers_token/services/auth_service.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/button_icon.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
import '../../constants/colors.dart' as app_color;

class SignInComp extends ConsumerWidget {
  final GlobalKey<FormState>? formKey;
  final TextEditingController? email;
  final TextEditingController? password;
  final Function()? onSubmit;
  final String token;
  final AuthService userRegistrationService;
  final bool? loading;
  const SignInComp(
      {super.key,
      required this.formKey,
      required this.email,
      required this.password,
      required this.onSubmit,
      required this.token,
      required this.userRegistrationService,
      required this.loading});

  @override
  Widget build(BuildContext context, ref) {
    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

    return Column(
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
    );
  }
}
