import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/constants/utils/vars.dart';
import 'package:zealworkers_token/providers/prefs_provider.dart';
import 'package:zealworkers_token/providers/token_provider.dart';
import 'package:zealworkers_token/providers/user_data_provider.dart';
import 'package:zealworkers_token/screens/kyc/kyc.dart';
import 'package:zealworkers_token/screens/profile/profile.dart';
import 'package:zealworkers_token/screens/wallet/wallet.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class MyDrawer extends ConsumerWidget {
  const MyDrawer({super.key});

  @override
  Widget build(BuildContext context, ref) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    final userData = ref.watch(userDataProvider);

    Future<void> logout() async {
      // Clear user session data
      ref.watch(tokenProvider.notifier).state = '';
      ref.watch(prefsProvider).setString(userTokenstr, '');
    }

    return Drawer(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(0)),
        backgroundColor: app_color.soft,
        child: userData.when(data: (data) {
          return ListView(
            padding: EdgeInsets.zero,
            children: [
              DrawerHeader(
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(50),
                      child: Image.asset(
                        'assets/img/logo.png',
                        fit: BoxFit.cover,
                        width: screenWidth * 0.15,
                      ),
                    ),
                    SizedBox(width: screenWidth * 0.03),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        SizedBox(
                          width: screenWidth * 0.48,
                          child: TextWidget(
                              text: data!.fullName!,
                              textColor: app_color.black,
                              textAlign: TextAlign.center,
                              fontWeight: FontWeight.w600,
                              fontSize: screenWidth * 0.045),
                        ),
                        SizedBox(
                          width: screenWidth * 0.48,
                          child: TextWidget(
                              text: data.email!,
                              textColor: app_color.black,
                              textAlign: TextAlign.center,
                              fontWeight: FontWeight.w400,
                              fontSize: screenWidth * 0.035),
                        )
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
                onTap: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => Profile()));
                },
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
                  Navigator.of(context).push(
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
                onTap: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const Kyc()));
                },
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
              // ListTile(
              //   selectedTileColor: app_color.primary,
              //   selectedColor: app_color.white,
              //   leading: const Icon(
              //     Icons.settings_outlined,
              //     color: app_color.black,
              //   ),
              //   title: TextWidget(
              //       text: 'Settings',
              //       textColor: app_color.black,
              //       textAlign: TextAlign.start,
              //       fontWeight: FontWeight.w500,
              //       fontSize: screenWidth * 0.04),
              //   onTap: () {},
              // ),
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
                onTap: logout,
              ),
              SizedBox(height: screenHeight * 0.08),
              ListTile(
                  title: Row(
                children: [Image.asset('assets/img/fbk.png')],
              ))
            ],
          );
        }, error: (err, s) {
          return Container();
        }, loading: () {
          return Container();
        }));
  }
}
