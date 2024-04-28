import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class Announcement extends ConsumerWidget {
  final UserData user;

  const Announcement({super.key, required this.user});

  @override
  Widget build(BuildContext context, ref) {
    double screenWidth = MediaQuery.of(context).size.width;
    double screenHeight = MediaQuery.of(context).size.height;

    final Uri fb = Uri.parse(
        'https://web.facebook.com/people/Zealworkers/61551154462616/?mibextid=LQQJ4d');
    final Uri x = Uri.parse(
        'https://twitter.com/zealworkers?t=s9uCnvEKI3hEZh59shW6Qw&s=09');
    final Uri lk = Uri.parse('https://www.linkedin.com/company/zealworkers');
    final Uri ig = Uri.parse('https://www.instagram.com/zealworkers/');
    final Uri m = Uri.parse('https://medium.com/@zealworkers');

    final UserData users = user;

    // Count the number of users that are mining
    final int miningCount = user.team!.where((team) => team.mining!).length;

    // Count the number of users that are not mining
    final int notMiningCount =
        users.team!.where((user) => !user.mining!).length;

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
                        text: miningCount.toString(),
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
                        text: notMiningCount.toString(),
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
                  InkWell(
                    onTap: () async {
                      _launchURL(fb);
                    },
                    child: Image.asset(
                      'assets/img/fbb.png',
                      fit: BoxFit.cover,
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      _launchURL(x);
                    },
                    child: Image.asset(
                      'assets/img/tww.png',
                      fit: BoxFit.cover,
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      _launchURL(lk);
                    },
                    child: ColorFiltered(
                      colorFilter: ColorFilter.mode(
                          app_color.gradient3.withOpacity(1),
                          BlendMode.srcATop),
                      child: Image.asset(
                        'assets/img/lk.png',
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      _launchURL(ig);
                    },
                    child: ColorFiltered(
                      colorFilter: ColorFilter.mode(
                          app_color.gradient3.withOpacity(1),
                          BlendMode.srcATop),
                      child: Image.asset(
                        'assets/img/ig.png',
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      _launchURL(m);
                    },
                    child: Image.asset(
                      'assets/img/discord.png',
                      fit: BoxFit.cover,
                    ),
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

void _launchURL(Uri url) async {
  if (await canLaunchUrl(url)) {
    await launchUrl(url);
  } else {
    throw 'Could not launch $url';
  }
}
