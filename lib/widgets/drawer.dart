import 'package:flutter/material.dart';
import 'package:zealworkers_token/screens/wallet/wallet.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class MyDrawer extends StatelessWidget {
  const MyDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Drawer(
      shape: null,
      backgroundColor: app_color.soft,
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          DrawerHeader(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(50),
                  child: Image.network(
                    'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg',
                    fit: BoxFit.cover,
                    width: screenWidth * 0.15,
                  ),
                ),
                SizedBox(width: screenWidth * 0.03),
                Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    TextWidget(
                        text: 'Solomon Tosin',
                        textColor: app_color.black,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w600,
                        fontSize: screenWidth * 0.045),
                    TextWidget(
                        text: 'solomon@gmail.com',
                        textColor: app_color.black,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w400,
                        fontSize: screenWidth * 0.035)
                  ],
                ),
              ],
            ),
          ),
          ListTile(
            selectedTileColor: app_color.primary,
            selectedColor: app_color.white,
            leading: const Icon(
              Icons.person_outline,
              color: app_color.black,
            ),
            title: TextWidget(
                text: 'My Profile',
                textColor: app_color.black,
                textAlign: TextAlign.start,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.04),
            onTap: () {},
          ),
          ListTile(
            selectedTileColor: app_color.primary,
            selectedColor: app_color.white,
            leading: const Icon(
              Icons.account_balance_wallet_outlined,
              color: app_color.black,
            ),
            title: TextWidget(
                text: 'Wallet',
                textColor: app_color.black,
                textAlign: TextAlign.start,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.04),
            onTap: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => const Wallet()));
            },
          ),
          ListTile(
            selectedTileColor: app_color.primary,
            selectedColor: app_color.white,
            leading: const Icon(
              Icons.domain_verification_outlined,
              color: app_color.black,
            ),
            title: TextWidget(
                text: 'KYC',
                textColor: app_color.black,
                textAlign: TextAlign.start,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.04),
            onTap: () {},
          ),
          // ListTile(
          //   selectedTileColor: app_color.primary,
          //   selectedColor: app_color.white,
          //   leading: const Icon(
          //     Icons.people_outline,
          //     color: app_color.black,
          //   ),
          //   title: TextWidget(
          //       text: 'My Team',
          //       textColor: app_color.black,
          //       textAlign: TextAlign.start,
          //       fontWeight: FontWeight.w500,
          //       fontSize: screenWidth * 0.04),
          //   onTap: () {
          //     Navigator.push(context,
          //         MaterialPageRoute(builder: (context) => const Team()));
          //   },
          // ),
          ListTile(
            selectedTileColor: app_color.primary,
            selectedColor: app_color.white,
            leading: const Icon(
              Icons.attach_file_outlined,
              color: app_color.black,
            ),
            title: TextWidget(
                text: 'Learn More',
                textColor: app_color.black,
                textAlign: TextAlign.start,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.04),
            onTap: () {},
          ),
          ListTile(
            selectedTileColor: app_color.primary,
            selectedColor: app_color.white,
            leading: const Icon(
              Icons.settings_outlined,
              color: app_color.black,
            ),
            title: TextWidget(
                text: 'Settings',
                textColor: app_color.black,
                textAlign: TextAlign.start,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.04),
            onTap: () {},
          ),
          ListTile(
            selectedTileColor: app_color.primary,
            selectedColor: app_color.white,
            leading: const Icon(
              Icons.logout,
              color: app_color.black,
            ),
            title: TextWidget(
                text: 'Sign Out',
                textColor: app_color.black,
                textAlign: TextAlign.start,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.04),
            onTap: () {},
          ),
          SizedBox(height: screenHeight * 0.08),
          ListTile(
              title: Row(
            children: [Image.asset('assets/img/fbk.png')],
          ))
        ],
      ),
    );
  }
}
