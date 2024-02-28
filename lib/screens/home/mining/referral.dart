import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class Referral extends StatelessWidget {
  final UserData data;

  const Referral({super.key, required this.data});

  Future<void> copyToClipboard(String text) async {
    await Clipboard.setData(ClipboardData(text: text));
  }

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;

    return Container(
      padding: EdgeInsets.all(screenWidth * 0.02),
      decoration: BoxDecoration(
          color: app_color.white, borderRadius: BorderRadius.circular(8)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          SizedBox(
            width: screenWidth * 0.5,
            child: TextWidget(
              text: 'Boost Your Mining  Rate When You Refer a Friend',
              textColor: app_color.grey,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w600,
              fontSize: screenWidth * 0.035,
              fontFamily: 'Poppins',
            ),
          ),
          Container(
            padding: EdgeInsets.all(screenWidth * 0.02),
            width: screenWidth * 0.35,
            decoration: BoxDecoration(
                gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      app_color.gradient1,
                      app_color.gradient2,
                      app_color.gradient3
                    ]),
                borderRadius: BorderRadius.circular(8)),
            child: Column(
              children: [
                TextWidget(
                  text: 'Referral Code',
                  textColor: app_color.white,
                  textAlign: TextAlign.center,
                  fontWeight: FontWeight.w600,
                  fontSize: screenWidth * 0.03,
                  fontFamily: 'Poppins',
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    TextWidget(
                      text: data.referralCode.toString(),
                      textColor: app_color.white,
                      textAlign: TextAlign.center,
                      fontWeight: FontWeight.w600,
                      fontSize: screenWidth * 0.032,
                      fontFamily: 'Poppins',
                    ),
                    SizedBox(width: screenWidth * 0.02),
                    InkWell(
                      onTap: () {
                        copyToClipboard(data.referralCode!);
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            backgroundColor: app_color.gradient3,
                            content: Text('Referral code copied to clipboard'),
                            duration: Duration(seconds: 3),
                          ),
                        );
                      },
                      child: Icon(
                        Icons.copy_rounded,
                        size: screenWidth * 0.04,
                        color: app_color.grey,
                      ),
                    )
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
