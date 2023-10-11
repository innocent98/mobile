import 'package:flutter/material.dart';
import 'package:zealworkers_token/screens/settings/change_password.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class Settings extends StatelessWidget {
  const Settings({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Container(
      color: app_color.soft,
      child: SafeArea(
          child: Scaffold(
        backgroundColor: app_color.soft,
        body: Padding(
          padding: EdgeInsets.all(screenWidth * 0.05),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: screenHeight * 0.1,
                width: screenWidth,
                child: TextWidget(
                    text: 'Settings',
                    textColor: app_color.black,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w600,
                    fontSize: screenWidth * 0.05),
              ),
              Container(
                width: screenWidth * 0.9,
                padding: EdgeInsets.all(screenWidth * 0.04),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: app_color.white,
                ),
                child: GestureDetector(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => ChangePassword()));
                  },
                  child: TextWidget(
                      text: 'Change Password',
                      textColor: app_color.black,
                      textAlign: TextAlign.start,
                      fontWeight: FontWeight.w600,
                      fontSize: screenWidth * 0.042),
                ),
              ),
              SizedBox(height: screenHeight * 0.02),
              Container(
                width: screenWidth * 0.9,
                padding: EdgeInsets.all(screenWidth * 0.04),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: app_color.white,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    TextWidget(
                        text: 'Notification',
                        textColor: app_color.black,
                        textAlign: TextAlign.start,
                        fontWeight: FontWeight.w600,
                        fontSize: screenWidth * 0.042),
                    Icon(
                      Icons.toggle_on,
                      color: app_color.link,
                      size: screenWidth * 0.1,
                    )
                  ],
                ),
              ),
              SizedBox(height: screenHeight * 0.04),
              TextWidget(
                  text: 'General',
                  textColor: app_color.black,
                  textAlign: TextAlign.start,
                  fontWeight: FontWeight.w600,
                  fontSize: screenWidth * 0.042),
              SizedBox(height: screenHeight * 0.02),
              Container(
                width: screenWidth * 0.9,
                padding: EdgeInsets.all(screenWidth * 0.04),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: app_color.white,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    TextWidget(
                        text: 'About',
                        textColor: app_color.black,
                        textAlign: TextAlign.start,
                        fontWeight: FontWeight.w600,
                        fontSize: screenWidth * 0.042),
                    SizedBox(height: screenHeight * 0.02),
                    const Divider(
                      color: app_color.grey,
                    ),
                    SizedBox(height: screenHeight * 0.02),
                    TextWidget(
                        text: 'Privacy Policy',
                        textColor: app_color.black,
                        textAlign: TextAlign.start,
                        fontWeight: FontWeight.w600,
                        fontSize: screenWidth * 0.042),
                    SizedBox(height: screenHeight * 0.02),
                    const Divider(
                      color: app_color.grey,
                    ),
                    SizedBox(height: screenHeight * 0.02),
                    TextWidget(
                        text: 'User Agreement',
                        textColor: app_color.black,
                        textAlign: TextAlign.start,
                        fontWeight: FontWeight.w600,
                        fontSize: screenWidth * 0.042),
                  ],
                ),
              ),
            ],
          ),
        ),
      )),
    );
  }
}
