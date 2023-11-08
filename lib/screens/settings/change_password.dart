import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/constants/env.config.dart';
import 'package:zealworkers_token/models/user_authentication.dart';
import 'package:zealworkers_token/providers/token_provider.dart';
import 'package:zealworkers_token/services/auth_service.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/text.dart';
import 'package:zealworkers_token/widgets/text_form.dart';
import '../../constants/colors.dart' as app_color;

class ChangePassword extends ConsumerWidget {
  ChangePassword({super.key});

  final TextEditingController currentPassword = TextEditingController();

  final TextEditingController password = TextEditingController();

  final TextEditingController confirmPassword = TextEditingController();

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context, ref) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    bool loading = false;

    final userToken = ref.watch(tokenProvider);

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
            duration: const Duration(seconds: 2),
            backgroundColor: app_color.green,
          ),
        );
        Future.delayed(const Duration(seconds: 2), () {
          Navigator.pop(context);
        });
      },
      onLoading: (isLoading) {
        loading = isLoading;
      },
      userToken: (String token) {},
    );

    final onSubmit = loading
        ? null
        : () async {
            if (formKey.currentState!.validate()) {
              final userData = UserAuthentication(
                currentPassword: currentPassword.text,
                password: password.text,
              );

              await userRegistrationService.updateUser(userToken,
                  userData.currentPassword, userData.password, updateUserRoute);
            }
          };

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
                      controller: currentPassword,
                      keyboardType: TextInputType.visiblePassword,
                      labelText: 'Current Password',
                      labelColor: app_color.black,
                      obscureText: true,
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
                      controller: confirmPassword,
                      keyboardType: TextInputType.visiblePassword,
                      labelText: 'Confirm Password',
                      labelColor: app_color.black,
                      obscureText: true,
                    ),
                    SizedBox(
                      height: screenHeight * 0.05,
                    ),
                    Button(
                        onPressed: password.text != confirmPassword.text
                            ? () {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  const SnackBar(
                                    content: Text(
                                        'New password and confirm password does not match'),
                                    duration: Duration(seconds: 3),
                                    backgroundColor: app_color.red,
                                  ),
                                );
                              }
                            : onSubmit,
                        buttonColor: app_color.primary,
                        buttonText: 'Submit',
                        textColor: app_color.white),
                  ],
                ),
              ))),
    );
  }
}
