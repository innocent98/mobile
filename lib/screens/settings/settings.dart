import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zealworkers_token/providers/user_data_provider.dart';
import 'package:zealworkers_token/screens/settings/change_password.dart';
import 'package:zealworkers_token/screens/settings/switch_notification.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class Settings extends ConsumerWidget {
  const Settings({super.key});

  @override
  Widget build(BuildContext context, ref) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    final Uri privacy = Uri.parse('https://zealworkers.com/privacy');
    final Uri about = Uri.parse('https://zealworkers.com/about');
    final Uri terms = Uri.parse('https://zealworkers.com/terms');

    final userData = ref.watch(userDataProvider);

    return Scaffold(
      backgroundColor: app_color.soft,
      appBar: AppBar(
        backgroundColor: app_color.white,
        title: Center(
          child: TextWidget(
              text: 'Settings',
              textColor: app_color.black,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w600,
              fontSize: screenWidth * 0.04),
        ),
      ),
      body: Padding(
          padding: EdgeInsets.all(screenWidth * 0.05),
          child: userData.when(data: (data) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
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
                      SwitchNotification(userD: data!)
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
                      Padding(
                        padding:
                            EdgeInsets.symmetric(vertical: screenHeight * 0.01),
                        child: InkWell(
                          onTap: () {
                            _launchURL(about);
                          },
                          child: SizedBox(
                            width: screenWidth * 0.9,
                            child: TextWidget(
                                text: 'About',
                                textColor: app_color.black,
                                textAlign: TextAlign.start,
                                fontWeight: FontWeight.w600,
                                fontSize: screenWidth * 0.042),
                          ),
                        ),
                      ),
                      // SizedBox(height: screenHeight * 0.02),
                      const Divider(
                        color: app_color.grey,
                      ),
                      // SizedBox(height: screenHeight * 0.02),
                      Padding(
                        padding:
                            EdgeInsets.symmetric(vertical: screenHeight * 0.01),
                        child: InkWell(
                          onTap: () {
                            _launchURL(privacy);
                          },
                          child: SizedBox(
                            width: screenWidth * 0.9,
                            child: TextWidget(
                                text: 'Privacy Policy',
                                textColor: app_color.black,
                                textAlign: TextAlign.start,
                                fontWeight: FontWeight.w600,
                                fontSize: screenWidth * 0.042),
                          ),
                        ),
                      ),
                      // SizedBox(height: screenHeight * 0.02),
                      const Divider(
                        color: app_color.grey,
                      ),
                      // SizedBox(height: screenHeight * 0.02),
                      Padding(
                        padding:
                            EdgeInsets.symmetric(vertical: screenHeight * 0.01),
                        child: InkWell(
                          onTap: () {
                            _launchURL(terms);
                          },
                          child: SizedBox(
                            width: screenWidth * 0.9,
                            child: TextWidget(
                                text: 'User Agreement',
                                textColor: app_color.black,
                                textAlign: TextAlign.start,
                                fontWeight: FontWeight.w600,
                                fontSize: screenWidth * 0.042),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            );
          }, error: (err, s) {
            return const Text('');
          }, loading: () {
            return Container();
          })),
    );
  }
}

void _launchURL(Uri url) async {
  if (await canLaunchUrl(url)) {
    await launchUrl(url, mode: LaunchMode.externalApplication);
  } else {
    throw 'Could not launch $url';
  }
}
