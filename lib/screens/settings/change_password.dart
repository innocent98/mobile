import 'package:flutter/material.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
import '../../constants/colors.dart' as app_color;

class ChangePassword extends StatelessWidget {
  ChangePassword({super.key});

  final TextEditingController email = TextEditingController();

  final TextEditingController password = TextEditingController();

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Container(
      color: app_color.white,
      child: SafeArea(
          child: Scaffold(
              backgroundColor: app_color.white,
              appBar: AppBar(
                title: TextWidget(
                    text: 'Change Password',
                    textColor: app_color.black,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w600,
                    fontSize: screenWidth * 0.05),
              ),
              body: Form(
                key: formKey,
                child: Column(
                  children: [
                    SizedBox(height: screenHeight * 0.08),
                    TextForm(
                      controller: email,
                      keyboardType: TextInputType.emailAddress,
                      labelText: 'Current Password',
                      labelColor: app_color.black,
                    ),
                    SizedBox(
                      height: screenHeight * 0.03,
                    ),
                    TextForm(
                      controller: password,
                      keyboardType: TextInputType.visiblePassword,
                      labelText: 'New Password',
                      labelColor: app_color.black,
                      obscureText: true,
                    ),
                    SizedBox(
                      height: screenHeight * 0.03,
                    ),
                    TextForm(
                      controller: password,
                      keyboardType: TextInputType.visiblePassword,
                      labelText: 'Confirm Password',
                      labelColor: app_color.black,
                      obscureText: true,
                    ),
                    SizedBox(
                      height: screenHeight * 0.05,
                    ),
                    Button(
                        onPressed: () {
                          if (formKey.currentState!.validate()) {
                            // Navigator.push(
                            //     context,
                            //     MaterialPageRoute(
                            //         builder: (context) => SignUp()));
                          }
                        },
                        buttonColor: app_color.primary,
                        buttonText: 'Submit',
                        textColor: app_color.white),
                  ],
                ),
              ))),
    );
  }
}
