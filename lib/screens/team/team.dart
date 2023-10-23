import 'package:flutter/material.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class Team extends StatelessWidget {
  const Team({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: app_color.soft,
      // appBar: AppBar(
      //   title: TextWidget(
      //       text: 'My Team',
      //       textColor: app_color.black,
      //       textAlign: TextAlign.center,
      //       fontWeight: FontWeight.w600,
      //       fontSize: screenWidth * 0.04),
      // ),
      body: Padding(
    padding: EdgeInsets.all(screenWidth * 0.03),
    child: Column(
      children: [
        TextWidget(
            text:
                'The list below shows your direct team and indirect team.',
            textColor: app_color.black,
            textAlign: TextAlign.center,
            fontWeight: FontWeight.w400,
            fontSize: screenWidth * 0.032),
        SizedBox(height: screenHeight * 0.03),
        SizedBox(
          height: screenHeight * 0.75,
          child: ListView(
            padding: EdgeInsets.zero,
            children: [
              ListTile(
                leading: Container(
                    padding: EdgeInsets.all(screenWidth * 0.01),
                    decoration: BoxDecoration(
                        color: app_color.primary,
                        borderRadius: BorderRadius.circular(50)),
                    child: const Icon(
                      Icons.person,
                      color: app_color.white,
                    )),
                title: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        TextWidget(
                            text: 'Solomon@gmail.com',
                            textColor: app_color.grey,
                            textAlign: TextAlign.start,
                            fontWeight: FontWeight.w500,
                            fontSize: screenWidth * 0.035),
                        TextWidget(
                            text: '(0)',
                            textColor: app_color.grey,
                            textAlign: TextAlign.start,
                            fontWeight: FontWeight.w500,
                            fontSize: screenWidth * 0.035),
                      ],
                    ),
                    TextWidget(
                        text: 'Active',
                        textColor: app_color.grey,
                        textAlign: TextAlign.start,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.032),
                  ],
                ),
                trailing: Icon(
                  Icons.circle,
                  color: app_color.green,
                  size: screenWidth * 0.035,
                ),
              ),
              const Divider(
                color: app_color.grey,
              ),
              ListTile(
                leading: Container(
                    padding: EdgeInsets.all(screenWidth * 0.01),
                    decoration: BoxDecoration(
                        color: app_color.primary,
                        borderRadius: BorderRadius.circular(50)),
                    child: const Icon(
                      Icons.person,
                      color: app_color.white,
                    )),
                title: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        TextWidget(
                            text: 'Solomon@gmail.com',
                            textColor: app_color.grey,
                            textAlign: TextAlign.start,
                            fontWeight: FontWeight.w500,
                            fontSize: screenWidth * 0.035),
                        TextWidget(
                            text: '(0)',
                            textColor: app_color.grey,
                            textAlign: TextAlign.start,
                            fontWeight: FontWeight.w500,
                            fontSize: screenWidth * 0.035),
                      ],
                    ),
                    TextWidget(
                        text: 'Inactive',
                        textColor: app_color.grey,
                        textAlign: TextAlign.start,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.032),
                  ],
                ),
                trailing: Icon(
                  Icons.circle,
                  color: app_color.grey,
                  size: screenWidth * 0.035,
                ),
              ),
              const Divider(
                color: app_color.grey,
              ),
            ],
          ),
        )
      ],
    ),
      ),
    );
  }
}
