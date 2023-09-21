import 'package:flutter/material.dart';
import 'package:zealworkers_token/screens/authentication/sign_up.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
import '../../constants/colors.dart' as app_color;

class ForgotPassword extends StatelessWidget {
  ForgotPassword({super.key});

  final TextEditingController email = TextEditingController();

  final TextEditingController password = TextEditingController();

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
                      text: 'Forget Password',
                      textColor: app_color.black,
                      textAlign: TextAlign.center,
                      fontWeight: FontWeight.w800,
                      fontSize: screenWidth * 0.06,
                    ),
                    TextWidget(
                      text: 'Continue to reset your password',
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
                          Button(
                              onPressed: () {
                                if (formKey.currentState!.validate()) {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => SignUp()));
                                }
                              },
                              buttonColor: app_color.primary,
                              buttonText: 'Continue',
                              textColor: app_color.white),
                        ],
                      ),
                    ),
                    SizedBox(
                      height: screenHeight * 0.06,
                    ),
                  ],
                ),
              ),
            )),
      )),
    );
  }
}
