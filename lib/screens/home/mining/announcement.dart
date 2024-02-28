import 'package:flutter/material.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class Announcement extends StatelessWidget {
  const Announcement({super.key});

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double screenHeight = MediaQuery.of(context).size.height;

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Container(
          height: screenHeight * 0.085,
          width: screenWidth * 0.3,
          padding: EdgeInsets.all(screenWidth * 0.02),
          decoration: BoxDecoration(
              color: app_color.secondary,
              borderRadius: BorderRadius.circular(8)),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Icon(Icons.circle,
                      color: app_color.green, size: screenWidth * 0.02),
                  SizedBox(width: screenWidth * 0.01),
                  TextWidget(
                    text: 'Active',
                    textColor: app_color.white,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w500,
                    fontSize: screenWidth * 0.03,
                    fontFamily: 'Poppins',
                  ),
                  SizedBox(width: screenWidth * 0.02),
                  Container(
                    width: 20,
                    height: 20,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(4),
                        color: app_color.green_soft),
                    child: Center(
                      child: TextWidget(
                        text: '0',
                        textColor: app_color.green,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.03,
                        fontFamily: 'Poppins',
                      ),
                    ),
                  )
                ],
              ),
              SizedBox(height: screenHeight * 0.01),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Icon(Icons.circle,
                      color: app_color.red, size: screenWidth * 0.02),
                  SizedBox(width: screenWidth * 0.01),
                  TextWidget(
                    text: 'Inactive',
                    textColor: app_color.white,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w500,
                    fontSize: screenWidth * 0.03,
                    fontFamily: 'Poppins',
                  ),
                  SizedBox(width: screenWidth * 0.02),
                  Container(
                    width: 20,
                    height: 20,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(4),
                        color: app_color.pink),
                    child: Center(
                      child: TextWidget(
                        text: '0',
                        textColor: app_color.red,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.03,
                        fontFamily: 'Poppins',
                      ),
                    ),
                  )
                ],
              ),
            ],
          ),
        ),
        Container(
          height: screenHeight * 0.085,
          width: screenWidth * 0.6,
          padding: EdgeInsets.all(screenWidth * 0.02),
          decoration: BoxDecoration(
              color: app_color.white, borderRadius: BorderRadius.circular(8)),
          child: Column(
            children: [
              Container(
                padding: EdgeInsets.symmetric(
                  horizontal: screenWidth * 0.02,
                ),
                decoration: BoxDecoration(
                    border: Border.all(width: 1, color: app_color.grey),
                    borderRadius: BorderRadius.circular(8)),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const ImageIcon(
                      AssetImage('assets/img/bullhorn.png'),
                      color: app_color.grey,
                    ),
                    TextWidget(
                      text: 'Anouncement',
                      textColor: app_color.grey,
                      textAlign: TextAlign.center,
                      fontWeight: FontWeight.w500,
                      fontSize: screenWidth * 0.03,
                      fontFamily: 'Poppins',
                    )
                  ],
                ),
              ),
              SizedBox(height: screenWidth * 0.01),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Image.asset(
                    'assets/img/fbb.png',
                    fit: BoxFit.cover,
                  ),
                  Image.asset(
                    'assets/img/tww.png',
                    fit: BoxFit.cover,
                  ),
                  Image.asset(
                    'assets/img/tgg.png',
                    fit: BoxFit.cover,
                  ),
                  Image.asset(
                    'assets/img/yt.png',
                    fit: BoxFit.cover,
                  ),
                  Image.asset(
                    'assets/img/discord.png',
                    fit: BoxFit.cover,
                  ),
                ],
              )
            ],
          ),
        )
      ],
    );
  }
}
